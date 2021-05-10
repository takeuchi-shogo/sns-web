<script>
    import TweetForm from '/src/components/organisms/TweetForm.svelte';
    
    let showModal = false;
    let dropForm = () => {
        showModal = !showModal;
    };

    let tweets = [
        {contents: 'こんばんわ'}
    ]
</script>

<TweetForm {showModal} on:click={dropForm}/>
<div class="container-fluid">
    <div class="my-3 p-3 bg-light rounded shadow-sm">
        <div class="row border-bottom pb-2 mb-0 justify-content-between">
            <h6 class="col-4 pt-2">最近の呟き</h6>
            <div class="col-2 pt-0">
                <button on:click={dropForm} class="btn btn-primary">書く</button>
            </div>
        </div>
        <div class="d-flex text-muted pt-3">
            <div ></div>
            <p class="pb-3 mb-0 small lh-sm border-bottom">
                <strong class="d-block text-gray-dark">@user name</strong>
                'Cause ah, ah, I'm in the stars tonight<br>
                今夜僕は星の中にいるから<br>

                So watch me bring the fire and set the night alight<br>
                だから僕の火花で夜を照らすのを見ていて<br>

                Shining through the city with a little funk and soul<br>
                ファンクとソウルでこの街を照らす<br>

                So I'ma light it up like dynamite, woah<br>
                だから輝かせるよダイナマイトのように<br>
            </p>
        </div>
        <ul>
            {#each tweets as tweet}
            <li>
                <div class="d-flex text-muted pt-3">
                    <div></div>
                    <p class="pb-3 mb-0 small lh-sm border-bottom">
                        <strong class="d-block text-gray-dark">@user name</strong>
                        {tweet.contents}
                    </p>
                </div>
            </li>
            {/each}
        </ul>
    </div>
</div>