/**
 * Created by t937426 on 1/7/2017.
 */

//Destructuring is a way to quickly extract data out of an {} or [] without having to write much code.

var a, b, rest;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({a, b} = {a:1, b:2});
console.log(a); // 1
console.log(b); // 2


({c, b} = {a:1, b:2});
console.log(c); // undefined
console.log(b); // 2


// ES7 - not implemented in Firefox 47a01
//({a, b, ...rest} = {a:1, b:2, c:3, d:4});