
import Index from '/src/interface/presenters/pages/Index.svelte';
import Signin from '/src/interface/presenters/pages/Signin.svelte';
import Signup from '/src/interface/presenters/pages/Signup.svelte';
import Signout from '/src/interface/presenters/pages/Signout.svelte';


class IndexController {

	constructor() {

	}

	index(context) {
		document.getElementById('app').innerText = ''
		const app = new Index({
			target: document.getElementById('app'),
			props: {
				category: 'index',
				article: 'index',
			}
		})
	}

	report(context) {
		document.getElementById('app').innerText = ''
		const app = new Index({
			target: document.getElementById('app'),
			props: {
				category: 'index',
				article: 'report',
			}
		})
	}


	login(context) {
		document.getElementById('app').innerText = ''
		const app = new Signin({
			target: document.getElementById('app'),
		})
	}


	loginByGoogleCallback(context) {
		document.getElementById('app').innerText = ''
		const app = new Signin({
			target: document.getElementById('app'),
		})
	}

	signup(context) {
		document.getElementById('app').innerText = ''
		const app = new Signup({
			target: document.getElementById('app'),
		})
	}

	signout(context) {
		document.getElementById('app').innerText = ''
		const app = new Signout({
			target: document.getElementById('app'),
		})
	}

}


export default IndexController;
