import test from 'ava';

import {from, iter} from '#module';

test('readme', (t) => {
	const stack = from('abc');
	const values = [...iter(stack)].join('');
	t.is(values, 'cba');
});
