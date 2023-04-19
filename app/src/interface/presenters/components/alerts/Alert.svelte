
<script>

	import { onMount } from 'svelte'
	import { Alert } from 'bootstrap/dist/js/bootstrap.esm.js'

	export let variant = 'primary'

	let alert = null
	let isOpen = false

	let variants = {
		primary: "alert alert-primary",
	}

	function init() {
		alert = new Alert(document.getElementById('modal'))
	}

	function showAlert() {
		isOpen = !isOpen
	}

	onMount(() => {
		init()
	})

</script>


<style lang="scss">

</style>


{ #if isOpen }
<div class={ variants[variant] } id="alert" role="alert">
	Alert Sample
</div>
{ /if }

<button on:click|preventDefault={ showAlert }>show Alert</button>
