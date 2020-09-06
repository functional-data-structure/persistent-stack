[@aureooms/js-persistent-stack](https://aureooms.github.io/js-persistent-stack)
==

Persistent stack data structures for JavaScript.
See [docs](https://aureooms.github.io/js-persistent-stack/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {empty, from, isEmpty, push, pop, peek, iter} from '@aureooms/js-persistent-stack';
let stack = from('abc');
let values = [...iter(stack)].join(''); // cba
...
```

[![License](https://img.shields.io/github/license/aureooms/js-persistent-stack.svg)](https://raw.githubusercontent.com/aureooms/js-persistent-stack/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-persistent-stack.svg)](https://www.npmjs.org/package/@aureooms/js-persistent-stack)
[![Build](https://img.shields.io/travis/aureooms/js-persistent-stack/master.svg)](https://travis-ci.org/aureooms/js-persistent-stack/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-persistent-stack.svg)](https://david-dm.org/aureooms/js-persistent-stack)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-persistent-stack.svg)](https://david-dm.org/aureooms/js-persistent-stack?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-persistent-stack.svg)](https://github.com/aureooms/js-persistent-stack/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-persistent-stack.svg)](https://www.npmjs.org/package/@aureooms/js-persistent-stack)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-persistent-stack.svg)](https://codeclimate.com/github/aureooms/js-persistent-stack/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-persistent-stack.svg)](https://codeclimate.com/github/aureooms/js-persistent-stack/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-persistent-stack/master.svg)](https://codecov.io/gh/aureooms/js-persistent-stack)
<!--[![Code coverage (alls)](https://img.shields.io/coveralls/github/aureooms/js-persistent-stack/master.svg)](https://coveralls.io/r/aureooms/js-persistent-stack)-->
<!--[![Code coverage (clim)](https://img.shields.io/codeclimate/coverage/aureooms/js-persistent-stack.svg)](https://codeclimate.com/github/aureooms/js-persistent-stack/trends/test_coverage_new_code)-->
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-persistent-stack.svg)](https://codeclimate.com/github/aureooms/js-persistent-stack/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-persistent-stack/badge.svg)](https://aureooms.github.io/js-persistent-stack/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-persistent-stack)](https://bundlephobia.com/result?p=@aureooms/js-persistent-stack)
