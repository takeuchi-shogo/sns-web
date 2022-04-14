import _foreach from 'lodash.foreach'

class Me {
	constructor(obj) {

		this.id = 0
		this.screenName = ''
		this.userName = ''
		this.sex = ''
		this.age = ''
		this.prefecture = ''
		this.city = ''
		this.tel = ''
		this.email = ''
		this.password = ''

		if (obj) {
			_foreach(this, (value, key) => {
				if (obj.hasOwnProperty(key)) {
					this[key] = obj[key]
				}
			})
		}
	}
}

export default Me
