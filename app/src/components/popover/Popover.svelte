
<script>

	import { Popover } from "bootstrap/dist/js/bootstrap.esm"
	import { onMount } from "svelte"

	export let index = 0

	let popover
	let content

	let isOpen = false
	let isHovering = false


	function init() {
		let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
		popover = popoverTriggerList.map(function (popoverTriggerEl) {
			popoverTriggerEl.addEventListener('mouseleave', (e) => {
				if (!isOpen && !isHovering) {
					hide()
				}
			})
			return new Popover(popoverTriggerEl, {
				container: 'body',
				html: true,
				delay: { "show": 50, "hide": 10 },
				trigger: 'manual',
				content: content,
				placement: 'auto',
			})
		})
	}

	function showPopover() {
		popover[index].show()
		isOpen = true
		let el = document.querySelectorAll('.popover')
		el.forEach((ll) => {
			ll.addEventListener('mouseenter', () => {
				isHovering = true
			})
			ll.addEventListener('mouseleave', () => {
				isHovering = false
				setTimeout(() => {
					if (!isOpen) {
						popover[index].hide()
					}
				}, 10)
			})
		})
	}

	function hovering() {
		isOpen = false
	}

	function hide() {
		popover[index].hide()
	}

	onMount(() => {
		init()
	})

</script>

<div
	class="popover-trigger text-nowrap"
	data-bs-toggle="popover"
	on:mouseover={ showPopover }
	on:mouseout={ hovering }
>
	<div class="d-inline">
		<slot></slot>
		<div hidden>
			<div bind:this={ content }>
				<slot name="content"></slot>
			</div>
		</div>
	</div>
</div>
