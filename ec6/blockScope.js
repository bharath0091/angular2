
(function () {
    for(var i = 1; i < 2; i++) {
        var a = 2;
    }
    console.log(a); // a will be printed as it is in the function scope.

    if(true) {
        var b = 20;
    }
    console.log(b); // b will be printed as it is in the function scope.
})();

(function () {
    for(var i = 1; i < 2; i++) {
        let a = 2;
    }
    console.log(a); // runtime error : Uncaught ReferenceError: a is not defined

    if(true) {
        let b = 20;
    }
    console.log(b); // runtime error : Uncaught ReferenceError: b is not defined
})();