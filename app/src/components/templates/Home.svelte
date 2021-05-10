<script>
    import Router from 'svelte-spa-router'
    import {push} from 'svelte-spa-router'
    import Diarys from './Diarys.svelte';
    import Tweets from './tweets.svelte';

    const prefix = '/hm'
    const routes = {
        '/tweets': Tweets,
        '/diarys': Diarys,
    }
</script>

<div class="container-fluid">
    <div class="row">
        <div class="col-4">
            ここはホームです
            <ul>
                <li><a href="/#/hm">ホーム</a></li>
                <li><div on:click="{() => push('/hm/tweets')}">Tweet</div></li>
                <li><a href="/#/hm/diarys">Diary</a></li>
                <li><a href="/">戻る</a></li>
            </ul>
        </div>
        <div class="col-8">
            <Router {routes} {prefix}/>
        </div>
    </div>
</div>