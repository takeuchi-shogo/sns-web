<script>

	import _foreach from 'lodash.foreach'

	import Tweet from '/src/interface/gateways/database/TweetRepository.js'

	const _tweet = new Tweet

	let params = {
		id: 0,
		contents: '',
	}

	let tweet = {}

	let errorMessage = ''

	function init() {
		_tweet.get(tweetId, (error, message, data) => {
			if (error) {
				errorMessage = message
				return
			}
			tweet = data
		})
	}

	function saveTweet() {

		let sendParams = {}

		_foreach(params, (value, key) => {
			sendParams[key] = value
		})

		_tweet.save(sendParams, (error, message, data) => {
			errorMessage = ''
			if (error) {
				errorMessage = message
				alert(errorMessage)
				return
			}
			alert('変更しました')
			window.location.href = '/tweets'
		})
	}

	init()

</script>


<div class="tweet-single-form">
	<div class="tweet-single-form-card card col-6 offset-md-1">
		<div class="card-body">
			<h5 class="card-title">つぶやく</h5>
				<form d-flex text-muted pt-3>
					<div class="pb-3 mb-0 small lh-sm border-bottom" style="width: 30rem">
						<p>
							<strong class="d-block text-gray-dark">{ list.id }</strong>
							<textarea class="form-control" bind:value={params.contents} rows="3">{ params.contents }</textarea>
						</p>
					</div>
				</form>
			<button on:click={saveTweet} class="btn btn-primary">Edit Tweet</button>
		</div>
	</div>
</div>
