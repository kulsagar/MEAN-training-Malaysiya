/**
 * Created by sagakulk on 7/16/2016.
 */
/*

function foo(baz){
    baz();
}

foo(function(){
    console.log('Call me back!!');
});*/


function foo(x){
    console.log(x);
    x();
}

foo(5);
foo("hello");
foo(false);
foo(function(){});










