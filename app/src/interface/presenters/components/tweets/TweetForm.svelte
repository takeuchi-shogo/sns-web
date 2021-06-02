<script>
	import _foreach from 'lodash.foreach'
	//import { init } from '/src/interface/presenters/components/organisms/tweets/TweetsList.svelte';

	import Tweet from '/src/interface/gateways/database/TweetRepository.js'

	const _tweet = new Tweet
	//export let didCreate = (tweet) => {}

	export let showModal = false;

	let i = 0;

	let params = {
		contents: '',
	}

	let errorMessage = ''

	export function createTweet() {

		let sendParams = {}

		_foreach(params, (value, key) => {
			sendParams[key] = value
		})

		_tweet.create(sendParams, (error, message, data) => {
			errorMessage = ''
			if (error) {
				errorMessage = message
				return
			}
		})

		showModal = false

		//didCreate(data)
	}

</script>

<style>
	.tweet-form {
		width: 100%;
		height: 100%;
		position: fixed;
		background: rgba(0, 0, 0, 0.3);
	}
	.tweet-form-card {
		background: white;
		margin-top: 50px;
	}
</style>

{#if showModal}
	<div on:click|self class="tweet-form">
		<div class="tweet-form-card card col-6 offset-md-1">
			<div class="card-body">
				<h5 class="card-title">つぶやく</h5>
					<form>
						<!-- <InputTextArea/> -->
						<div class="mb10">
							<textarea class="form-control" bind:value={params.contents} rows="3"></textarea>
						</div>
					</form>
				<button on:click={createTweet} class="btn btn-primary">Create Tweet</button>
			</div>
		</div>
	</div>
{/if}
