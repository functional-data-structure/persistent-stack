import test from 'ava';

import {product} from '@aureooms/js-itertools';

import {withMethods, withoutMethods} from '../../src';

function macro(t, {empty, isEmpty, push, pop, peek}, n) {
	const array = [];

	let stack = empty();
	t.true(isEmpty(stack), 'At the begining, stack is empty.');
	t.throws(
		() => peek(stack),
		null,
		'At the beginning, calling peek on empty stack throws.',
	);
	t.throws(
		() => pop(stack),
		null,
		'At the beginning, calling pop on empty stack throws.',
	);

	for (let i = 0; i < n; ++i) {
		const r = Math.random();

		stack = push(stack, r);
		array.push(r);

		t.false(isEmpty(stack), i + 'The stack is not empty.');

		t.deepEqual(peek(stack), r, i + ' Peek returns the last value.');
	}

	for (let i = 0; i < n; ++i) {
		t.false(isEmpty(stack), i + 'The stack is not empty.');

		t.deepEqual(peek(stack), array.pop(), i + ' Pop works.');
		stack = pop(stack);
	}

	t.true(isEmpty(stack), 'At the end, stack is empty.');
	t.throws(
		() => peek(stack),
		null,
		'At the end, calling peek on empty stack throws.',
	);
	t.throws(
		() => pop(stack),
		null,
		'At the end, calling pop on empty stack throws.',
	);
}

const implementations = [withMethods, withoutMethods];
const sizes = [0, 1, 2, 10, 42, 100, 121, 197, 1024, 2500];

for (const [implementation, n] of product([implementations, sizes])) {
	test(`api: ${implementation.name} <${n}>`, macro, implementation, n);
}
