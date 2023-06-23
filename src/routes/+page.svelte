<script>
	import Footer from '$lib/Footer.svelte';
	import Questions from '$lib/Questions.svelte';
</script>

<main>
	<Questions />
	<Footer />
</main>

<style>
	main {
		padding: 20px;
		max-width: var(--content-width);
		margin: auto;
	}
</style>
