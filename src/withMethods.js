import {TypeError} from '@failure-abstraction/error';
import {_reduce} from '@iterable-iterator/reduce';

export default function PersistentStack() {}
PersistentStack.prototype.push = function (value) {
	return new Pushed(value, this);
};

PersistentStack.prototype[Symbol.iterator] = function* () {
	// eslint-disable-next-line unicorn/no-this-assignment
	let current = this;
	while (!current.isEmpty()) {
		yield current.peek();
		current = current.pop();
	}
};

function Empty() {}
Empty.prototype = new PersistentStack();

Empty.prototype.isEmpty = function () {
	return true;
};

Empty.prototype.pop = function () {
	throw new TypeError('Cannot call pop on empty stack.');
};

Empty.prototype.peek = function () {
	throw new TypeError('Cannot call peek on empty stack.');
};

function Pushed(value, next) {
	this.value = value;
	this.next = next;
}

Pushed.prototype = new PersistentStack();
Pushed.prototype.isEmpty = function () {
	return false;
};

Pushed.prototype.pop = function () {
	return this.next;
};

Pushed.prototype.peek = function () {
	return this.value;
};

const EMPTY = new Empty();
PersistentStack.empty = () => EMPTY;
PersistentStack.push = (stack, value) => new Pushed(value, stack);
PersistentStack.isEmpty = (stack) => stack.isEmpty();
PersistentStack.pop = (stack) => stack.pop();
PersistentStack.peek = (stack) => stack.peek();
PersistentStack.iter = (stack) => stack[Symbol.iterator]();
PersistentStack.from = (iterable) =>
	_reduce(PersistentStack.push, iterable, EMPTY);
