<script>
	import Dashboard from '/src/pages/dashboard/Dashboard.svelte'
	import LP from '/src/pages/_LP.svelte'

	import Me from '/src/database/MeRepository.js'

	// export let category = ''
	// export let article = ''

	const _me = new Me

	let initialized = false

	let user = null

	function init() {
		_me.get((error, message, data) => {
			if (!error) {
				initialized = false
				window.location.href = '/dashboard'
				return
			}
			user = data
			//initialized = true
		})
	}

	init()
</script>

{ #if !initialized }
	<LP />
{ :else if initialized }
	<Dashboard />
{ /if }
