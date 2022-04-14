import cookie from 'js-cookie'

import Api from '/src/infrastructure/Api.js'
import Me from '/src/domain/Me.js'

class MeRepository {

	constructor() {
		this._api = new Api
	}

	get(callback) {
		this._api.get('/me', null, (error, message, data) => {
			if (error) {
				callback(error, message, new Me)
				return
			}
			callback(error, message, new Me(data))
		})
	}

	create(me, callback) {
		const sendParams = {
			userName: me.userName,
			sex: me.sex,
			age: me.age,
			prefecture: me.prefecture,
			city: me.city,
			tel: me.tel,
			email: me.email,
			password: me.password,
		}
		this._api.post('/me', sendParams, (error, message, data) => {
			if (error) {
				callback(error, message, new Me)
				return
			}
			callback(error, message, new Me(data))
		})
	}

	signin(id, password, callback) {
		this._api.post('/tokens', {id: id, password: password}, (error, message, data) => {
			if (!error) {
				// cookie.set(key, value) <= cookie を保存
				cookie.set('token', data.token)
				cookie.set('tokenExpireAt', data.tokenExpireAt)
				cookie.set('refreshToken', data.refreshToken)
				cookie.set('refreshTokenExpireAt', data.refreshTokenExpireAt)
			}
			callback(error, message)
		})
	}

	signout(callback) {
		cookie.remove('token')
		cookie.remove('tokenExpireAt')
		cookie.remove('refreshToken')
		cookie.remove('refreshTokenExpireAt')
		callback(null, 'success')
	}
}

export default MeRepository