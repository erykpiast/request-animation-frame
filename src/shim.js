export let requestAnimationFrame = 'function' === typeof global.requestAnimationFrame ?
        (...args) => global.requestAnimationFrame(...args) :
    'function' === typeof global.webkitRequestAnimationFrame ?
        (...args) => global.webkitRequestAnimationFrame(...args) :
    'function' === typeof global.mozRequestAnimationFrame ?
        (...args) => global.mozRequestAnimationFrame(...args) :
    undefined;

export let cancelAnimationFrame = 'function' === typeof global.cancelAnimationFrame ?
        (...args) => global.cancelAnimationFrame(...args) :
    'function' === typeof global.webkitCancelAnimationFrame ?
        (...args) => global.webkitCancelAnimationFrame(...args) :
    'function' === typeof global.webkitCancelRequestAnimationFrame ?
        (...args) => global.webkitCancelRequestAnimationFrame(...args) :
    'function' === typeof global.mozCancelAnimationFrame ?
        (...args) => global.mozCancelAnimationFrame(...args) :
    undefined;
