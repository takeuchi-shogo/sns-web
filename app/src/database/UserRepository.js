import _foreach from 'lodash.foreach'

import Api from '/src/infrastructure/Api.js'
import User from '/src/domain/User.js'

class UserRepository {

	constructor() {
		this._api = new Api
	}

	get(userId, callback) {
		this._api.get('/users/' + userId, null, (error, message, data) => {
			if (error) {
				callback(error, message, new User)
				return
			}
			callback(error, message, new User(data))
		})
	}

	getList(callback) {
		let lists = []
		this._api.get('/users', null, (error, message, data) => {
			if (error) {
				callback(error, message, new User)
				return
			}
			_foreach(data.lists, (list) => {
				lists.push(new User(list))
			})
			callback(error, message, {
				lists: lists
			})
		})
	}
}

export default UserRepository