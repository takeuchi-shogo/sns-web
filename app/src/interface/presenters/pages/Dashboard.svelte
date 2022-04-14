<script>

	import DashboardHeader from '/src/interface/presenters/organisms/dashboard/DashboardHeader.svelte'
	import SideMenu from '/src/interface/presenters/organisms/dashboard/SideMenu.svelte'
	import MainContents from '/src/interface/presenters/organisms/dashboard/MainContents.svelte'

	export let category = ''
	export let article = ''
	export let id = ''

</script>


<DashboardHeader/>
<div class="container-fluid">
	<div class="row">
		<SideMenu/>
		<MainContents
			category={ category }
			article={ article }
			id={ id }
		/>
	</div>
</div>
