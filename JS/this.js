/**
 * Created by sagakulk on 7/16/2016.
 */

function foo(me){
    console.log('foo called by '+me);
    this.x=30;

}

foo('global');
console.log(x);


var obj1={
    f:foo
}

obj1.f('obj1');
console.log(obj1.x);

var obj2={
    ff:obj1.f
}

obj2.ff('obj2');
console.log(obj2.x);

var obj4 = new foo("new");
console.log(obj4.x);

var obj5 = new obj2.ff('obj5');
console.log(obj5.x);


var obj6={};

obj1.f.call(obj6);
console.log(obj6.x);
var obj7={};











