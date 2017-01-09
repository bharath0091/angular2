/**
 * Created by t937426 on 1/7/2017.
 */
/////////can be used to spread and receive the comma separated values, it also applies to property-value coma separated values
//TODO : note object spread not working // looks like it is ES7 feature
function add(a, b, c) {
    return a + b + c;
}

// same add function in new sytle using REST
function addNew(...args) {
    return args[0] + args[1] + args[2];
}


(function(){
    var a = [1, 2,3];
    //old style
    console.log(`add using old syle ${add(a[0], a[1], a[2])}`);
    //new style using spread
    console.log(`add using spread ${addNew(...a)}`);
})();

/////////
//not working, looks like it is ES7 feature
// var obj1 = {a:1, b:2};
// var obj2 = {...obj1, c:1}
// console.log(`obj2 ${JSON.stringify(obj2)}`)

var a = [1, 2,3];
var b = [...a, 4];
console.log(`b ${JSON.stringify(b)}`);

//...................
var arr = [1,2,3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);
console.log(`arr2 ${JSON.stringify(arr2)}`);
// arr2 becomes [1,2,3,4]
// arr remains unaffected
console.log(`arr ${JSON.stringify(arr)}`);