import _foreach from 'lodash.foreach'

class Tweet {
	constructor(obj) {

		this.id = 0
		this.userId = 0
		this.contents = ''
	

		if (obj) {
			_foreach(this, (value, key) => {
				if (obj.hasOwnProperty(key)) {
					this[key] = obj[key]
				
				}
			})
		}
	}
}

export default Tweet;
