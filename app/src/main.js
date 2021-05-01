import page from 'page'
import style from './../sass/style.scss' //import を使って style.scss(sass)を読み込む

import IndexController from './controllers/IndexController.js'

const index = new IndexController

page('/', index.index)

page()