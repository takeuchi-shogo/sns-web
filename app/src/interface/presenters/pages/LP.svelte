<script>
	import Header from '/src/interface/presenters/organisms/index/Header.svelte'
	import Contents from "/src/interface/presenters/organisms/index/Contents.svelte";
	import Footer from '/src/interface/presenters/organisms/index/Footer.svelte'

	export let category = ''
	export let article = ''
</script>

<Header/>
<Contents
	category={ category }
	article={ article }
/>
<Footer/>