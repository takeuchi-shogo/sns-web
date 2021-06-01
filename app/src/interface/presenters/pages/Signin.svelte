<script>
	import User from '/src/interface/gateways/database/UserRepository.js'

	import LoginForm from '/src/interface/presenters/organisms/login/LoginForm.svelte'

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

{ #if initialized}
<section>
	<div class="container-fuild">
		<LoginForm/>
	</div>
</section>
{ /if }
