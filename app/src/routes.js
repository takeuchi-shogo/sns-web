import Index from "/src/components/templates/Index.svelte";
import Home from "./components/templates/Home.svelte";

import Login from '/src/components/templates/Login.svelte';
import Signup from '/src/components/templates/Signup.svelte';
//import Tweets from "./components/templates/tweets.svelte";
//import Diarys from "./components/templates/Diarys.svelte";

const routes = {
    '/': Index,
    '/login': Login,
    '/signup': Signup,
    '/hm': Home,
    '/hm/*': Home,
    
//    '/tweets': Tweets,
//    '/diarys': Diarys,
}

export default routes