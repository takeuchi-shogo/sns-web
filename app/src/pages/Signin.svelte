<script>
	import Me from '/src/database/MeRepository.js'

	import LoginForm from '/src/features/login/LoginForm.svelte'

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
