
import page from 'page'

import IndexController from '/src/interface/controllers/IndexController.js'
import DashboardController from '/src/interface/controllers/DashboardController.js'
import ProfileController from '/src/interface/controllers/ProfileController.js'
import SearchController from '/src/interface/controllers/SearchController.js'
import TweetsController from '../interface/controllers/TweetsController'

const index = new IndexController
const dashboard = new DashboardController
const prof = new ProfileController
const search = new SearchController
const tweets = new TweetsController


page('/', index.index)

page('/signin', index.signin)
page('/signup', index.signup)
page('/signout', index.signout)

page('/dashboard', dashboard.index)

page('/prof', prof.index)
page('/search', search.index)
page('/tweets', tweets.index)
//page('/tweets/:id', tweets.single)

page()
