<script>
	import Profile from '/src/interface/presenters/components/Profile.svelte'
	import Search from '/src/interface/presenters/components/Search.svelte'
	import Tweets from '/src/interface/presenters/components/Tweets.svelte'

	export let category = ''
	export let article = ''
	//export let id = ''
</script>

<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="main">
	<div>
		{ #if category == 'profile' }
			{ #if article == 'index' }
				<Profile/>
			{ /if }
		{ /if }
		{ #if category == 'search' }
			{ #if article == 'index' }
				<Search/>
			{ /if }
		{ /if }
		{ #if category == 'tweets' }
			{ #if article == 'index' }
				<Tweets/>
			{ /if }
		{ /if }
	</div>
</main>
