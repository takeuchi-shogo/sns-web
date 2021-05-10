<script>
    //import InputTextArea from "../atoms/InputTextArea.svelte";

    export let showModal = false;
    //export let message = "default message";

    export let tweets = [];
    export let contents = '';
    let i = 0;

    export function createTweet() {
		tweets = tweets.concat({ contents });
        console.log(tweets)
        contents = '';
        showModal = false
	}

</script>    

<style>
    .tweet-form {
      width: 100%;
      height: 100%;
      position: fixed;
      background: rgba(0, 0, 0, 0.3);
    }
    .tweet-form-card {
        background: white;
        margin-top: 50px;
    }
  </style>

{#if showModal}
    <div on:click|self class="tweet-form">
        <div class="tweet-form-card card col-6 offset-md-1">
            <div class="card-body">
                <h5 class="card-title">つぶやく</h5>
                <form>
                    <!-- <InputTextArea/> -->
                    <div class="mb10">
                        <textarea class="form-control" bind:value={contents} rows="3"></textarea>
                    </div>
                </form>
                <button on:click={createTweet} class="btn btn-primary">Create Tweet</button>
            </div>
        </div>
    </div>
{/if}