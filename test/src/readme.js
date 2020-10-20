import test from 'ava';

import {from, iter} from '../../src';

test('readme', (t) => {
	const stack = from('abc');
	const values = [...iter(stack)].join('');
	t.is(values, 'cba');
});
