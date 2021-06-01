
//import Tweets from '/src/interface/presenters/components/Tweets.svelte';
//import Single from '/src/interface/presenters/components/TweetSingle.svelte';
import Dashboard from '/src/interface/presenters/pages/dashboard.svelte';

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
