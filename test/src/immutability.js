import test from 'ava';

import {product, enumerate, list, zip} from '@aureooms/js-itertools';

import {withMethods, withoutMethods} from '../../src';

function macro(t, {empty, push, pop, iter}, n) {
	const array = [];
	let stack = empty();

	const pushed = [stack];
	for (let i = 0; i < n; ++i) {
		const r = Math.random();
		stack = push(stack, r);
		pushed.push(stack);
		array.push(r);
	}

	const popped = [stack];
	for (let i = 0; i < n; ++i) {
		stack = pop(stack);
		popped.push(stack);
	}

	popped.reverse();

	for (const [i, [A, B]] of enumerate(zip(pushed, popped))) {
		const values = array.slice(0, i).reverse();

		t.deepEqual(
			values,
			list(iter(A)),
			'All items are in order in the pushed stack.',
		);

		t.deepEqual(
			values,
			list(iter(B)),
			'All items are in order in the popped stack.',
		);
	}
}

const implementations = [withMethods, withoutMethods];
const sizes = [0, 1, 2, 10, 42, 100, 121, 197, 1024, 2500];

for (const [implementation, n] of product([implementations, sizes])) {
	test(`immutability: ${implementation.name} <${n}>`, macro, implementation, n);
}
