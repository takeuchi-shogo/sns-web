<script>
	import OAuth from '/src/components/OAuthCallback.svelte'
	import Profile from '/src/components/Profile.svelte'
	import Search from '/src/components/Search.svelte'
	import Tweets from '/src/components/Tweets.svelte'

	export let category = ''
	export let article = ''
	export let query = null
	export let id = ''

</script>

<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="main">
	<div>
		{ #if category == 'oauth' }
			{ #if article == 'google' }
				<OAuth
					state = { query.state }
					code = { query.code }
				/>
			{ /if }
		{ /if }
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
