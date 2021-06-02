<script>
	import User from '/src/interface/gateways/database/UserRepository.js'

	import DashboardHeader from '/src/interface/presenters/organisms/dashboard/DashboardHeader.svelte'
	import SideMenu from '/src/interface/presenters/organisms/dashboard/SideMenu.svelte'
	import MainContents from '/src/interface/presenters/organisms/dashboard/MainContents.svelte'

	const _user = new User

	export let category = ''
	export let article = ''
	//export let id = ''

	let initialized = false

	let user = null

	function init() {
		_user.get((error, message, data) => {
			if (error) {
			window.location.herf = '/signin'
			}
			user = data
			initialized = true
		})
	}

	init()
</script>

{#if initialized}
	<DashboardHeader/>
	<div class="container-fluid">
		<div class="row">
			<SideMenu/>
			<MainContents
				category={ category }
				article={ article }
			/>
		</div>
	</div>
{/if}
