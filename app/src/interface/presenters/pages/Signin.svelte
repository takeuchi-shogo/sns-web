<script>
	import Me from '/src/interface/gateways/database/MeRepository.js'

	import LoginForm from '/src/interface/presenters/organisms/login/LoginForm.svelte'

	const _me = new Me

	let initialized = false

	let user = null

	function init() {
		_me.get((error, message, data) => {
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
