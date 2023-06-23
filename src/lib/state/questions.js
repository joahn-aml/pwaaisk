import { writable } from 'svelte/store';

/** @typedef {import("$lib/types/question").Question} Question */

const createQuestionsStore = () => {
	/** @type {import("svelte/store").Writable<Question[]>} */
	const { subscribe, update } = writable([]);

	/** @type {(question: string) => Promise<void>} */
	const ask = async (input) => {
		/** @type {Question} */
		const answer = await (
			await fetch('/api/ask', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({ question: input })
			})
		).json();

		update((questions) => [...questions, answer]);
	};

	return {
		subscribe,
		ask
	};
};

export const questions = createQuestionsStore();
