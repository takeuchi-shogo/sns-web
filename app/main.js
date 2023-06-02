import '/sass/style.scss' //import を使って style.scss(sass)を読み込む
import 'bootstrap'

import HMR from '@roxi/routify/hmr'
import App from '/App.svelte'


const app = HMR(App, { target: document.body }, "routify-app")

export default app
