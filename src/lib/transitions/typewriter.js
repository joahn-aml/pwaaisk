/**  @type {(node: Element ) => {duration: number, tick: (t: number) => void}} */
export function typewriter(node) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent ?? '';
	const duration = text.length / (1 * 0.01);

	return {
		duration,
		/** @type {(t: number) => void} */
		tick: (t) => {
			const i = Math.trunc(text.length * t) + 1;
			node.textContent = text.slice(0, i);
		}
	};
}
