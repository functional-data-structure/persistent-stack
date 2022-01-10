import test from 'ava';

import {withMethods, withoutMethods} from '../../src/index.js';

function macro(t, {empty, peek, pop}) {
	t.throws(() => peek(empty()), undefined, 'Cannot peek empty.');
	t.throws(() => pop(empty()), undefined, 'Cannot pop empty.');
}

const implementations = [withMethods, withoutMethods];

for (const implementation of implementations) {
	test(`errors: ${implementation.name}`, macro, implementation);
}
