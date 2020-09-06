import DONE_ITERATOR from './DONE_ITERATOR';
import withMethods from './withMethods';
import withoutMethods from './withoutMethods';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default withoutMethods;

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
