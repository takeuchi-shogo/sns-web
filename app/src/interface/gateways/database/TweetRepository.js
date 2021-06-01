import _foreach from 'lodash.foreach'

import Api from '/src/infrastructure/Api.js'
import Config from '/src/infrastructure/Config.js'
import Tweet from '/src/domain/Tweet.js'

class TweetRepository {

	constructor() {
		this._api = new Api
		this._config = new Config
		this.url = this._config.url.web
	}

	get(id, callback) {
		if (id <= 0) {
			callback(true, 'id is required', new Tweet)
			return
		}
		this._api.get('/tweets' + id, null, (error, message, data) => {
			if (error) {
				callback(error, message, new Tweet)
				return
			}
			callback(error, message, new Tweet(data))
		})
	}

	getList(cursor, callback) {
		this._api.get('/tweets', { cursor: cursor }, (error, message, data) => {
			let lists = []
			if (error) {
				callback(error, message, { cursor: '', lists: lists })
				return
			}
			// list を一つづつ取り出す
			_foreach(data.lists, (list) => {
				// push で配列 lists に要素を追加する
				lists.push(new Tweet(list))
			})
			callback(error, message, {
				cursor: data.cursor,
				lists: lists
			})

		})
	}

	create(tweet, callback) {
		const sendParams = {
			contents: tweet.contents,
		}
		this._api.post('/tweets', sendParams, (error, message, data) => {
			if (error) {
				callback(error, message, new Tweet)
				return
			}
			callback(error, message, new Tweet(data))
		})
	}

	save(tweetId, tweet, callback) {
		this._api.patch('/tweets/' + tweetId, tweet, (error, message, data) => {
			if (error) {
				callback(error, message, new Tweet)
				return
			}
			callback(error, message, new Tweet(data))
		})
	}
}

export default TweetRepository
