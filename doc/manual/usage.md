# Usage

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

First, require the polyfill at the entry point of your application
```js
await import( 'regenerator-runtime/runtime.js' );
// or
import 'regenerator-runtime/runtime.js' ;
```

Then, import the library where needed
```js
const persistentstack = await import( '@functional-data-structure/persistent-stack' ) ;
// or
import * as persistentstack from '@functional-data-structure/persistent-stack' ;
```
