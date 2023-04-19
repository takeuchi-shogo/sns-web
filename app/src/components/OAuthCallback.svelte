<script>
	import { onMount } from 'svelte';
	
	import Me from '/src/database/MeRepository.js'

	const _me = new Me

	export let state = ''
	export let code = ''

	function post() {
		_me.post(state, code, (error, message) => {
			if (error) {
				return
			}
		})
	}

	onMount(() => {
		post()
	})
	
</script>


<style></style>


<div>コールバックします</div>
