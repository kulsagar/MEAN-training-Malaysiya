/**
 * Created by sagakulk on 7/16/2016.
 */

function foo(){
   console.log("x :: "+x);
    function bar(){
        x=30;
        console.log("x :: "+x);
    }
    bar();
}
function baz(){
    x=55;
    console.log("x :: "+x);
}
baz();
foo();
var z;
console.log("x :: "+x);
console.log("z :: "+z);




