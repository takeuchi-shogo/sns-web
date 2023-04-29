<script>
	import { onMount } from 'svelte'

	//import TweetForm from './TweetForm.svelte';
	import Tweets from '/src/database/TweetRepository.js'
	import Popover from '../popover/Popover.svelte'

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
	{ #each lists as list, i }
	<a href="/tweets/{ list.id }">
		<li class="d-flex text-muted pt-3">
			<div class="pb-3 mb-0 small lh-sm border-bottom" style="width: 30rem">
				<p>
					<strong class="d-block text-gray-dark">{ list.id }</strong>
					<Popover index={ i }>
						{ list.contents }
						<div slot="content">
							<div class="popover-content">
								<div class="popover-content-header">
									{ list.userId }
								</div>
								<div class="popover-content-body">
									{ list.contents }
								</div>
							</div>
						</div>
					</Popover>
				</p>
			</div>
		</li>
	</a>
	{ /each }
</ul>
