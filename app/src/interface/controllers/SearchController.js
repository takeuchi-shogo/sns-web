
import Dashboard from '/src/interface/presenters/pages/Dashboard.svelte';


class SearchController {

	constructor() {

	}

	index(context) {
		document.getElementById('app').innerText = ''
		const app = new Dashboard({
			target: document.getElementById('app'),
			props: {
				category: 'search',
				article: 'index',
			}
		})
	}

}

export default SearchController;
