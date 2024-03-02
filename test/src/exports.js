import test from 'ava';

import {empty, from, isEmpty, push, pop, peek, iter} from '#module';

test('can import empty', (t) => {
	t.true(empty !== undefined);
});
test('can import from', (t) => {
	t.true(from !== undefined);
});
test('can import isEmpty', (t) => {
	t.true(isEmpty !== undefined);
});
test('can import push', (t) => {
	t.true(push !== undefined);
});
test('can import pop', (t) => {
	t.true(pop !== undefined);
});
test('can import peek', (t) => {
	t.true(peek !== undefined);
});
test('can import iter', (t) => {
	t.true(iter !== undefined);
});
