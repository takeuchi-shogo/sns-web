import _foreach from 'lodash.foreach';
import axios from 'axios';
import cookie from 'js-cookie';

import Config from '/src/infrastructure/Config.js';


class Api {

	constructor() {
		this._config = new Config
	}

	get(endpoint, params, callback) {

		let sendParams = (params == null) ? {} : params

		if (cookie.get('token')) {
			sendParams.accessToken = cookie.get('token')
		}
		//console.log(sendParams)

		axios({
			method: 'get',
			baseURL: this._config.url.api,
			url: endpoint,
			params: sendParams,
		})
		.then((response) => {
			callback(null, response.data.result, response.data.data)
		})
		.catch((error) => {
			if (error.response) {
				if (error.response.status == 406) {
					this._refreshToken((err, message) => {
						if (err) {
							callback(error.response.status, error.response.data.result, error.response.data.data)
							return
						}
						this.get(endpoint, params, (error, message, data) => {
							callback(error, message, data)
						})
					})
					return
				}
				callback(error.response.status, error.response.data.result, error.response.data.data)
				return
			}
			callback(503, error.message, null)
		})
		.finally(() => {})
	}

	post(endpoint, params, callback) {

		let sendParams = (params == null) ? {} : params
		const formData = new FormData()

		if (cookie.get('token')) {
			formData.append('accessToken', cookie.get('token'))
		}

		_foreach(sendParams, (value, key) => {
			if (Array.isArray(value)) {
				_foreach(value, (v, _) => {
					formData.append(key + '[]', v)
				})
			} else {
				formData.append(key, value)
			}
		})

		axios({
			method: 'post',
			baseURL: this._config.url.api,
			url: endpoint,
			data: formData,
		})
			.then((response) => {
				callback(null, response.data.result, response.data.data)
			})
			.catch((error) => {
				if (error.response) {
					// 406 "need refresh a token" の場合にトークンをリフレッシュする
					if (error.response.status == 406) {
						this._refreshToken((err, message) => {
							if (err) {
								callback(error.response.status, error.response.data.result, error.response.data.data)
								return
							}
							this.post(endpoint, params, (error, message, data) => {
								callback(error, message, data)
							})
						})
						return
					}
					callback(error.response.status, error.response.data.result, error.response.data.data)
					return
				}
				// 503: Service Unavailable
				callback(503, error.message, null)
			})
			.finally(() => {})
	}

	patch(endpoint, params, callback) {

		let sendParams = (params == null) ? {} : params
		const formData = new FormData()

		if (cookie.get('token')) {
			formData.append('accessToken', cookie.get('token'))
		}

		_foreach(sendParams, (value, key) => {
			if (Array.isArray(value)) {
				_foreach(value, (v, _) => {
					formData.append(key + '[]', v)
				})
			} else {
				formData.append(key, value)
			}
		})

		axios({
			method: 'patch',
			baseURL: this._config.url.api,
			url: endpoint,
			data: formData,
		})
		.then((response) => {
			callback(null, response.data.result, response.data.data)
		})
		.catch((error) => {
			if (error.response) {
				if (error.response.status == 406) {
					this._refreshToken((err, message) => {
						if (err) {
							callback(error.response.status, error.response.data.result, error.response.data.data)
							return
						}
						this.post(endpoint, params, (error, message, data) => {
							callback(error, message, data)
						})
					})
					return
				}
				callback(error.response.status, error.response.data.result, error.response.data.data)
				return
			}
			callback(503, errorMessage, null)
		})
		.finally(() => {})
	}

	_refreshToken(callback) {

		const refreshToken = (cookie.get('refreshToken')) ? cookie.get('refreshToken') : ''

		this.post('/tokens/refresh', { refreshToken: cookie.get('refreshToken') }, (error, message, data) => {
			if (!error) {
				cookie.set('token', data.token)
				cookie.set('tokenExpireAt', data.tokenExpireAt)
				cookie.set('refreshToken', data.refreshToken)
				cookie.set('refreshTokenExpireAt', data.refreshTokenExpireAt)
			}
			callback(error, message)
		})
	}
}

export default Api
