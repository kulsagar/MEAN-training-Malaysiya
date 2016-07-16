/**
 * Created by sagakulk on 7/16/2016.
 */

function foo(){
    var x=50;
    return function bar(){
        console.log(x);
    }
}
var f = foo();
f();
console.log(f);
