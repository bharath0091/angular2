//const a; //this line gives error

const a = 20;
//a=10; //this line gives error

const p = {f1:1, f2:2};
p.f1 = 10; // it works;  marking an object reference const does not make properties inside the object const.
//p = null; // gives error
