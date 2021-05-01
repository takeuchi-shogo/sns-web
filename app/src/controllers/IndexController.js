import Index from './../views/Index.svelte';

class IndexController {

	constructor() {

	}


	index(_context) {
		document.getElementById('app').innerText = ''
		const app = new Index({
			target: document.getElementById('app'),
		})
	}

}


export default IndexController;