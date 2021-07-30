import DONE_ITERATOR from './DONE_ITERATOR.js';
import withMethods from './withMethods.js';
import withoutMethods from './withoutMethods.js';

const {empty, from, isEmpty, push, peek, pop, iter} = withoutMethods;

export {
	DONE_ITERATOR,
	withMethods,
	withoutMethods,
	empty,
	from,
	isEmpty,
	push,
	peek,
	pop,
	iter,
};
