
import Dashboard from '/src/pages/dashboard/Dashboard.svelte';


class DashboardController {

	constructor() {

	}

	index(context) {
		document.getElementById('app').innerText = ''
		const app = new Dashboard({
			target: document.getElementById('app'),
			props: {
				category: 'dashboard',
				article: 'index',
			}
		})
	}

}

export default DashboardController;
