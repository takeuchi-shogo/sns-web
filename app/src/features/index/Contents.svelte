<script>
	import MainVisual from '/src/components/index/MainVisual.svelte'
	import TopHappy from '/src/components/index/TopHappy.svelte'
	import Step from '/src/components/index/Step.svelte'
	import Select from '/src/components/index/Select.svelte'
	import StartWrap from '/src/components/index/StartWrap.svelte'
	import Safe from '/src/components/index/Safe.svelte'
	import Media from '/src/components/index/Media.svelte'
	import AppContents from '/src/components/index/AppContents.svelte'

	import Report from '/src/components/index/Report.svelte'

	export let category = ''
	export let article = ''
</script>



{ #if category == 'index' }
	{ #if article == 'index' }
		<MainVisual/>
		<TopHappy/>
		<Step/>
		<Select/>
		<StartWrap/>
		<Safe/>
		<Media/>
		<AppContents/>
	{ /if }
{ /if }
{ #if category == 'index' }
	{ #if article == 'report' }
		<Report/>
	{ /if }
{ /if }


<!-- 	{ #if category == 'index' }
		{ #if article == 'index' }
		{ /if }
	{ /if }-->
