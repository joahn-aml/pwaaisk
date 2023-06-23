import { error, json } from '@sveltejs/kit';

/** @type {import("$lib/types/question").Answer[]} */
const ANSWERS = [
	{ answer: 'Okay', color: '#d14ceb' },
	{ answer: 'I understand', color: '#77b8ef' },
	{ answer: 'Sure, why not?', color: '#e6b378' },
	{ answer: 'Thanks for coming', color: '#7b4bec' },
	{ answer: 'Sounds good', color: '#ce5379' }
];

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { question } = await request.json();

	if (typeof question !== 'string' || question === '') {
		throw error(400, 'question must be a non-empty string');
	}

	const answer = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];

	return json({ question, answer });
}
