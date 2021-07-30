import test from 'ava';

import {TypeError} from '@failure-abstraction/error';
import {product} from '@set-theory/cartesian-product';

import {withMethods} from '../../src';

function macro(t, {empty}, n) {
	const array = [];

	let stack = empty();
	t.true(stack.isEmpty(), 'At the begining, stack is empty.');
	t.throws(
		() => stack.peek(),
		{instanceOf: TypeError},
		'At the beginning, calling peek on empty stack throws type error.',
	);
	t.throws(
		() => stack.pop(),
		{instanceOf: TypeError},
		'At the beginning, calling pop on empty stack throws type error.',
	);

	for (let i = 0; i < n; ++i) {
		const r = Math.random();

		stack = stack.push(r);
		array.push(r);

		t.false(stack.isEmpty(), i + 'The stack is not empty.');

		t.deepEqual(stack.peek(), r, i + ' Peek returns the last value.');
	}

	for (let i = 0; i < n; ++i) {
		t.false(stack.isEmpty(), i + 'The stack is not empty.');

		t.deepEqual(stack.peek(), array.pop(), i + ' Pop works.');
		stack = stack.pop();
	}

	t.true(stack.isEmpty(), 'At the end, stack is empty.');

	t.throws(
		() => stack.peek(),
		{instanceOf: TypeError},
		'At the end, calling peek on empty stack throws type error.',
	);
	t.throws(
		() => stack.pop(),
		{instanceOf: TypeError},
		'At the end, calling pop on empty throws type error.',
	);
}

const implementations = [withMethods];
const sizes = [0, 1, 2, 10, 42, 100, 121, 197, 1024, 2500];

for (const [implementation, n] of product([implementations, sizes])) {
	test(`methods: ${implementation.name} <${n}>`, macro, implementation, n);
}
