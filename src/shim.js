export let requestAnimationFrame = 'function' === typeof global.requestAnimationFrame ?
        (cb) => global.requestAnimationFrame(cb) :
    'function' === typeof global.webkitRequestAnimationFrame ?
        (cb) => global.webkitRequestAnimationFrame(cb) :
    'function' === typeof global.mozRequestAnimationFrame ?
        (cb) => global.mozRequestAnimationFrame(cb) :
    undefined;

export let cancelAnimationFrame = 'function' === typeof global.cancelAnimationFrame ?
        (cb) => global.cancelAnimationFrame(cb) :
    'function' === typeof global.webkitCancelAnimationFrame ?
        (cb) => global.webkitCancelAnimationFrame(cb) :
    'function' === typeof global.webkitCancelRequestAnimationFrame ?
        (cb) => global.webkitCancelRequestAnimationFrame(cb) :
    'function' === typeof global.mozCancelAnimationFrame ?
        (cb) => global.mozCancelAnimationFrame(cb) :
    undefined;
