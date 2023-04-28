<script>

	import DashboardHeader from '/src/features/dashboard/DashboardHeader.svelte'
	import SideMenu from '/src/features/dashboard/SideMenu.svelte'
	import MainContents from '/src/features/dashboard/MainContents.svelte'

	export let category = ''
	export let article = ''
	export let query = null
	export let id = ''

</script>


<DashboardHeader/>
<div class="container-fluid">
	<div class="row">
		<SideMenu/>
		<MainContents
			category={ category }
			article={ article }
			query = { query }
			id={ id }
		/>
	</div>
</div>
