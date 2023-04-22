
<script>

	import { Modal } from 'bootstrap/dist/js/bootstrap.esm.min.js'
	import { onMount } from 'svelte'

	let modal = null

	function init() {
		modal = new Modal(document.getElementById('modal'))
	}

	function openModal() {
		modal.show()
	}

	onMount(() => {
		init()
	})

</script>


<div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Title</h5>
			</div>
			<div class="modal-body">
				Body
			</div>
			<div class="modal-footer">
				Footer
			</div>
		</div>
	</div>
</div>

<div>
	<button class="btn btn-primary" on:click|preventDefault={ openModal }>モーダルを表示</button>
</div>


<style lang="scss">

</style>
