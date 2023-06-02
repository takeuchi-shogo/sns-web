<script>
	import MainVisual from '/src/features/index/components/MainVisual.svelte'
	import TopHappy from '/src/features/index/components/TopHappy.svelte'
	import Step from '/src/features/index/components/Step.svelte'
	import Select from '/src/features/index/components/Select.svelte'
	import StartWrap from '/src/features/index/components/StartWrap.svelte'
	import Safe from '/src/features/index/components/Safe.svelte'
	import Media from '/src/features/index/components/Media.svelte'
	import AppContents from '/src/features/index/components/AppContents.svelte'

	import Report from '/src/features/index/components/Report.svelte'

	// export let category = ''
	// export let article = ''
</script>



<!-- { #if category == 'index' }
	{ #if article == 'index' } -->
		<MainVisual/>
		<TopHappy/>
		<Step/>
		<Select/>
		<StartWrap/>
		<Safe/>
		<Media/>
		<AppContents/>
	<!-- { /if }
{ /if } -->
<!-- { #if category == 'index' }
	{ #if article == 'report' } -->
		<Report/>
	<!-- { /if } -->
<!-- { /if } -->


<!-- 	{ #if category == 'index' }
		{ #if article == 'index' }
		{ /if }
	{ /if }-->
