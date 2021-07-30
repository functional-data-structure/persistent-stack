:icecream:
[@functional-data-structure/persistent-stack](https://functional-data-structure.github.io/persistent-stack)
==

Persistent stack data structures for JavaScript.
See [docs](https://functional-data-structure.github.io/persistent-stack/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {empty, from, isEmpty, push, pop, peek, iter} from '@functional-data-structure/persistent-stack';
let stack = from('abc');
let values = [...iter(stack)].join(''); // cba
...
```

[![License](https://img.shields.io/github/license/functional-data-structure/persistent-stack.svg)](https://raw.githubusercontent.com/functional-data-structure/persistent-stack/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@functional-data-structure/persistent-stack.svg)](https://www.npmjs.org/package/@functional-data-structure/persistent-stack)
[![Tests](https://img.shields.io/github/workflow/status/functional-data-structure/persistent-stack/ci:test?event=push&label=tests)](https://github.com/functional-data-structure/persistent-stack/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/functional-data-structure/persistent-stack.svg)](https://david-dm.org/functional-data-structure/persistent-stack)
[![Dev dependencies](https://img.shields.io/david/dev/functional-data-structure/persistent-stack.svg)](https://david-dm.org/functional-data-structure/persistent-stack?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/functional-data-structure/persistent-stack.svg)](https://github.com/functional-data-structure/persistent-stack/issues)
[![Downloads](https://img.shields.io/npm/dm/@functional-data-structure/persistent-stack.svg)](https://www.npmjs.org/package/@functional-data-structure/persistent-stack)

[![Code issues](https://img.shields.io/codeclimate/issues/functional-data-structure/persistent-stack.svg)](https://codeclimate.com/github/functional-data-structure/persistent-stack/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/functional-data-structure/persistent-stack.svg)](https://codeclimate.com/github/functional-data-structure/persistent-stack/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/functional-data-structure/persistent-stack/main.svg)](https://codecov.io/gh/functional-data-structure/persistent-stack)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/functional-data-structure/persistent-stack.svg)](https://codeclimate.com/github/functional-data-structure/persistent-stack/trends/technical_debt)
[![Documentation](https://functional-data-structure.github.io/persistent-stack/badge.svg)](https://functional-data-structure.github.io/persistent-stack/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@functional-data-structure/persistent-stack)](https://bundlephobia.com/result?p=@functional-data-structure/persistent-stack)
