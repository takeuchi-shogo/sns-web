<script>
	import { onMount } from 'svelte'

	//import TweetForm from './TweetForm.svelte';
	import Tweets from '/src/interface/gateways/database/TweetRepository.js';

	export let p = null

	const _tweets = new Tweets

	let lists = []
	let _cursor = ''

	export function init() {
		if (p) {
			_cursor = p
		}
		_tweets.getList(_cursor, (error, message, data) => {
			lists = data.lists
		})
	}

	onMount(() => {
		init()
	})

</script>


<ul class="list-group list-group-flush">
	{ #each lists as list }
	<a href="/tweets/{ list.id }">
		<li class="d-flex text-muted pt-3">
			<div class="pb-3 mb-0 small lh-sm border-bottom" style="width: 30rem">
				<p>
					<strong class="d-block text-gray-dark">{ list.id }</strong>
					{ list.contents }
				</p>
			</div>
		</li>
	</a>
	{ /each }
</ul>
