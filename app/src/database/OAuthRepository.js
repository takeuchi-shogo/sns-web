import _foreach from 'lodash.foreach'

import Api from '/src/infrastructure/Api.js'
import Config from '/src/infrastructure/Config.js'

class OAuthRepository {

	constructor() {
		this._api = new Api
		this._config = new Config
		this.url = this._config.url.web
	}

	getLoginURLByGoogle(callback) {
		this._api.post('/oauth/google', null, (error, message, data) => {
			if (error) {
				callback(error, message, null)
				return
			}
			callback(error, message, data)
		})
	}
}

export default OAuthRepository