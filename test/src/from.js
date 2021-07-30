import test from 'ava';

import {product} from '@set-theory/cartesian-product';
import {range} from '@iterable-iterator/range';
import {list} from '@iterable-iterator/list';
import {reversed} from '@iterable-iterator/reversed';

import {withMethods, withoutMethods} from '../../src';

function macro(t, {from, iter, isEmpty}, n) {
	const stack = from(range(n));
	if (n === 0) t.true(isEmpty(stack), 'The stack is empty.');
	else t.false(isEmpty(stack), 'The stack is not empty.');

	t.deepEqual(
		list(reversed(range(n))),
		list(iter(stack)),
		'All items are in the stack in order.',
	);
	t.deepEqual(
		list(reversed(range(n))),
		list(iter(stack)),
		'Can be iterated two times.',
	);
}

const implementations = [withMethods, withoutMethods];
const sizes = [0, 1, 2, 10, 42, 100, 121, 197, 1024, 2500];

for (const [implementation, n] of product([implementations, sizes])) {
	test(`from: ${implementation.name} <${n}>`, macro, implementation, n);
}
