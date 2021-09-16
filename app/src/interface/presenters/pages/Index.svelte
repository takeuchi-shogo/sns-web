<script>
	import Dashboard from '/src/interface/presenters/pages/Dashboard.svelte'
	import LP from '/src/interface/presenters/pages/LP.svelte'

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

{ #if !initialized }
	<LP/>
{ :else if initialized }
	<Dashboard/>
{ /if }
