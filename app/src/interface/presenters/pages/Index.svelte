<script>
	import Dashboard from '/src/interface/presenters/pages/Dashboard.svelte'
	import LP from '/src/interface/presenters/pages/LP.svelte'

	import Me from '/src/interface/gateways/database/MeRepository.js'

	export let category = ''
	export let article = ''

	const _me = new Me

	let initialized = false

	let user = null
	$: console.log(initialized)

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
	<LP
		category={ category }
		article={ article }
	/>
{ :else if initialized }
	<Dashboard
		category={ category }
		article={ article }
	/>
{ /if }
