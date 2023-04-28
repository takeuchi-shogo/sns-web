
<script>
	import { onMount } from "svelte";
	import { Toast } from "bootstrap/dist/js/bootstrap.esm.min.js";

	let toast = null

	onMount(() => {
		toast = new Toast(document.getElementById('toast'))
		toast.show()
	})

</script>


<!-- <div class="position-fixed bottom-0 end-0 p-3"> -->
	<div class="toast bg-primary text-white" id="toast" data-bs-delay="3000" role="alert" aria-live="assertive" aria-atomic="true">
		<div class="toast-header">
			sample
		</div>
		<div class="toast-body">
			Body
		</div>
	</div>
<!-- </div> -->
<div class="toast align-items-center text-white bg-primary border-0" id="toast" role="alert" aria-live="assertive" aria-atomic="true">
	<div class="d-flex">
	  <div class="toast-body">
		Hello, world! This is a toast message.
	  </div>
	  <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
	</div>
  </div>
