<script>
	import Header from '/src/features/index/Header.svelte'
	import Contents from "/src/features/index/Contents.svelte";
	import Footer from '/src/features/index/Footer.svelte'

	export let category = ''
	export let article = ''
</script>

<Header/>
<Contents
	category={ category }
	article={ article }
/>
<Footer/>
