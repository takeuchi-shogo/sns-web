import cookie from 'js-cookie'

import Api from '/src/infrastructure/Api.js'
import User from '/src/domain/User.js'

class UserRepository {

	constructor() {
		this._api = new Api
	}

	get(callback) {
		this._api.get('/users', null, (error, message, data) => {
			if (error) {
				callback(error, message, new User)
				return
			}
			callback(error, message, new User(data))
		})
	}

	create(user, callback) {
		const sendParams = {
			userName: user.userName,
			sex: user.sex,
			age: user.age,
			prefecture: user.prefecture,
			city: user.city,
			tel: user.tel,
			email: user.email,
			password: user.password,
		}
		this._api.post('/users', sendParams, (error, message, data) => {
			if (error) {
				callback(error, message, new User)
				return
			}
			callback(error, message, new User(data))
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

export default UserRepository