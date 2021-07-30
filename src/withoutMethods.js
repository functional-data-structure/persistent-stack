import {_reduce} from '@iterable-iterator/reduce';
import DONE_ITERATOR from './DONE_ITERATOR.js';

function Node(value, next) {
	this.value = value;
	this.next = next;
}

Node.prototype[Symbol.iterator] = function* () {
	// eslint-disable-next-line unicorn/no-this-assignment
	let current = this;
	while (current !== null) {
		yield current.value;
		current = current.next;
	}
};

const empty = () => null;
const from = (iterable) => _reduce(push, iterable, null);
const isEmpty = (stack) => stack === null;
const push = (stack, value) => new Node(value, stack);
const pop = (stack) => stack.next;
const peek = (stack) => stack.value;
const iter = (stack) =>
	stack === null ? DONE_ITERATOR : stack[Symbol.iterator]();

const withoutMethods = {
	name: 'withoutMethods',
	empty,
	from,
	isEmpty,
	push,
	pop,
	peek,
	iter,
};

export default withoutMethods;
