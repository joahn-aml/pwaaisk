<script>
	import { questions } from '$lib/state/questions.js';

	let question = '';

	const submit = async () => {
		if (question === '') {
			return;
		}

		await questions.ask(question);

		question = '';
	};
</script>

<footer>
	<form on:submit|preventDefault={submit}>
		<input bind:value={question} />
		<button>?</button>
	</form>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;
		padding: 10px;
	}

	form {
		display: flex;
		align-items: center;
		gap: 10px;
		width: 100%;
		max-width: var(--content-width);
	}

	input {
		flex-grow: 1;
		padding: 10px;
		background-color: black;
		color: white;
		border: 1px solid white;
		font-size: 1.25rem;
		outline: none;
	}

	button {
		height: 100%;
		padding: 10px 20px;
		background-color: black;
		color: white;
		border: 1px solid white;
		font-size: 1.25rem;
		font-weight: bolder;
		outline: none;
		cursor: pointer;
	}
</style>
