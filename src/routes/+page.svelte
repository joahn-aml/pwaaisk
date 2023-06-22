<script>
	import { version } from '$lib/version.js';
</script>

<main>
	<div>Hello {version}</div>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	main {
		padding: 20px;
	}
</style>
