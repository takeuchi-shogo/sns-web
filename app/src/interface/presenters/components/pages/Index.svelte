<script>
	import User from '/src/interface/gateways/database/UserRepository.js'

	const _user = new User

	let initialized = false

	let user = null

	function init() {
		_user.get((error, message, data) => {
			if (!error) {
				window.location.href = '/home'
			}
			user = data
			initialized = true
		})
	}

	init()
</script>

{ #if initialized }
<Header/>
<Contents/>
<Footer/>
<a href="/signin">Sign in</a>
<a href="/signup">Sign Up</a>
{ /if }
