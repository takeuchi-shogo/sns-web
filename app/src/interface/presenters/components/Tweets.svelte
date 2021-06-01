<script>
	import TweetForm from '/src/interface/presenters/components/tweets/TweetForm.svelte';
	import TweetsList from '/src/interface/presenters/components/tweets/TweetsList.svelte';

	let showModal = false;
	let dropForm = () => {
		showModal = !showModal;
	};

</script>

<TweetForm {showModal} on:click={dropForm}/>
<div class="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-3">
	<div class="border-bottom pb-2 mb-0 justify-content-between">
		<h6 class="">最近の呟き</h6>
		<div class="">
			<button on:click={dropForm} class="btn btn-primary">書く</button>
		</div>
	</div>
	<TweetsList/>
</div>
