
import Dashboard from '/src/interface/presenters/pages/Dashboard.svelte';


class ProfileController {

	constructor() {

	}

	index(context) {
		document.getElementById('app').innerText = ''
		const app = new Dashboard({
			target: document.getElementById('app'),
			props: {
				category: 'profile',
				article: 'index',
			}
		})
	}

}

export default ProfileController;
