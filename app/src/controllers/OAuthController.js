
import qs from 'qs'
import Dashboard from '/src/pages/dashboard/Dashboard.svelte';


class OAuthController {

	constructor() {

	}

	googleCallback(context) {
		document.getElementById('app').innerText = ''
		const query = qs.parse(context.querystring)
		const app = new Dashboard({
			target: document.getElementById('app'),
			props: {
				category: 'oauth',
				article: 'google',
				query: query,
			}
		})
	}

}

export default OAuthController;
