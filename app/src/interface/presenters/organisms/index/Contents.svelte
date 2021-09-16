<script>
	import MainVisual from '/src/interface/presenters/components/index/MainVisual.svelte'
	import TopHappy from '/src/interface/presenters/components/index/TopHappy.svelte'
	import Step from '/src/interface/presenters/components/index/Step.svelte'
	import Select from '/src/interface/presenters/components/index/Select.svelte'
	import StartWrap from '/src/interface/presenters/components/index/StartWrap.svelte'
	import Safe from '/src/interface/presenters/components/index/Safe.svelte'
	import Media from '/src/interface/presenters/components/index/Media.svelte'
	import AppContents from '/src/interface/presenters/components/index/AppContents.svelte'

	import Report from '/src/interface/presenters/components/index/Report.svelte'

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