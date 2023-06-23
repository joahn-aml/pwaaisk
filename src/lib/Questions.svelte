<script>
	import { questions } from '$lib/state/questions.js';
	import { typewriter } from '$lib/transitions/typewriter.js';
	import { fade } from 'svelte/transition';
	import { afterUpdate } from 'svelte';

	afterUpdate(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});
</script>

<section>
	{#each $questions as { question, answer: { answer, color } }}
		<article>
			<em transition:fade class="question">{question}</em>
			<div transition:typewriter class="answer" style:color>{answer}</div>
		</article>
	{/each}
</section>

<style>
	article {
		margin-bottom: 80px;
	}

	.answer {
		text-align: right;
		font-size: 2rem;
		font-family: 'Acme', sans-serif;
	}
</style>
