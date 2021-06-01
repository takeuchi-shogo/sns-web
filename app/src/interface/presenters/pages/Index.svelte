<script>
	import User from '/src/interface/gateways/database/UserRepository.js'

	const _user = new User

	let initialized = false

	let user = null

	function init() {
		_user.get((error, message, data) => {
			if (!error) {
				window.location.href = '/dashboard'
			}
			user = data
			initialized = true
		})
	}

	init()
</script>

{ #if initialized }
<a href="/signin">Sign in</a>
<a href="/signup">Sign Up</a>
{ /if }
