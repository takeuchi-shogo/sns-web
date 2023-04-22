
import page from 'page'

import IndexController from '/src/controllers/IndexController.js'
import OAuthController from '/src/controllers/OAuthController.js'
import DashboardController from '/src/controllers/DashboardController.js'
import ProfileController from '/src/controllers/ProfileController.js'
import SearchController from '/src/controllers/SearchController.js'
import TweetsController from '/src/controllers/TweetsController'

const index = new IndexController
const oauth = new OAuthController
const dashboard = new DashboardController
const prof = new ProfileController
const search = new SearchController
const tweets = new TweetsController


page('/', index.index)
page('/report', index.report)

page('/oauth/google/callback', oauth.googleCallback)

page('/signin', index.login)
page('/signup', index.signup)
page('/signout', index.signout)

page('/dashboard', dashboard.index)

page('/prof', prof.index)
page('/search', search.index)
page('/tweets', tweets.index)
//page('/tweets/:id', tweets.single)

page()
