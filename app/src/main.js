import style from './../sass/style.scss' //import を使って style.scss(sass)を読み込む
import 'bootstrap'

import App from '/src/App.svelte';

const app = new App({
	target: document.body,
});

export default app;