
//import Tweets from '/src/components/Tweets.svelte';
//import Single from '/src/components/TweetSingle.svelte';
import Dashboard from '/src/pages/Dashboard.svelte';

class TweetsController {

	constructor() {

	}

	index(context) {
		document.getElementById('app').innerText = ''
		const app = new Dashboard ({
			target: document.getElementById('app'),
			props: {
				category: 'tweets',
				article: 'index',
			}
		})
	}

	// single(context) {
	// 	document.getElementById('app').innerText = ''
	// 	const app = new Single({
	// 		target: document.getElementById('app'),
	// 		props: {
	// 			tweetId: context.params.id,
	// 		},
	// 	})
	// }

}

export default TweetsController;
