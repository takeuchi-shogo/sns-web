
<script>

	import { Popover } from "bootstrap/dist/js/bootstrap.esm"
	import { onMount } from "svelte"

	export let index = 0

	let popover

	function init() {
		let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
		popover = popoverTriggerList.map(function (popoverTriggerEl) {
			popoverTriggerEl.addEventListener('mouseleave', (e) => {
				hide()
			})
			return new Popover(popoverTriggerEl, {
				html: true,
				delay: { "show": 500, "hide": 10 },
				// title: '<b>Example popover</b> - title',
				trigger: 'manual',
				content: `
				<div on:mouseleave={ hide }>
					<div class="popover-content-header">
						Hello
					</div>
					<div class="popover-content">
						<div class="popover-content-title">
							title title
						</div>
						<div class="popover-content-body">
							<a href='/dashboard'>
								<b>Geoff</b> - content
							</a>
						</div>
						<div class="">
							<b>Hilary</b> - content
						</div>
					</div>
				</div>`,
			})
		})
	}

	function show() {
		popover[index].show()
	}

	function hide() {
		popover[index].hide()
	}

	onMount(() => {
		init()
	})

</script>

<div>
	<div
		class="popover-trigger"
		data-bs-container="body"
		data-bs-toggle="popover"
		data-bs-placement="bottom"
		on:mouseenter={ show }
	>
			<slot></slot>
	</div>
</div>
