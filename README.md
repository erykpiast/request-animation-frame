# request-animation-frame-shim

This shim doesn't implement any fallback for old browsers. Polyfilling features
are limited to support prefixes (module exports `requestAnimationFrame`,
`webkitRequestAnimationFrame` or `mozRequestAnimationFrame`, depending which one
is available). The key concept of using this shim is to use those functions
not directly from global context and be able to mock them during testing
(see [request-animation-frame-mock](https://github.com/erykpiast/request-animation-frame-mock)).

You can use it with ES6 transpilers like [Babel](https://babeljs.io/).

```javascript
import { requestAnimationFrame, cancelAnimationFrame } from 'request-animation-frame-shim';

let frameRequest = requestAnimationFrame(function frameHandler(time) {
    // do your animation step or whatever you want to

    frameRequest = requestAnimationFrame(frameHandler);
});

cancelAnimationFrame(frameRequest);
```

As well as with standard JavaScript.

```javascript
var requestAnimationFrame = require('request-animation-frame-shim').requestAnimationFrame;
var cancelAnimationFrame = require('request-animation-frame-shim').cancelAnimationFrame;

var frameRequest = requestAnimationFrame(function frameHandler(time) {
    // do your animation step or whatever you want to

    frameRequest = requestAnimationFrame(frameHandler);
});

cancelAnimationFrame(frameRequest);
```
