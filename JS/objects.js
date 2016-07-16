/**
 * Created by sagakulk on 7/16/2016.
 */

/*
var Person1 = new Object()
    Person1.name='Sagar';

var Person2 = new Object();
    Person2.fname='Renu';

var Person3 = {
        name:'Anji'
}

var Person4 = {
    fname:'Sridhar'
}
*/

/*
function Person(fname,age){
    return {
        fname:fname,
        age:age
    };
}

var p1 = Person('Sagar',42);
var p2 = Person('Renu',12);
var p3 =  Person('Anji',37);

console.log(p1);
console.log(p2);
*/

function Person(name,age){
    this.name=name;
    this.age=age;
}

var p4 = new Person('Sagar',42);

var p5 = new Person('Anji',37);

console.log(p4);
console.log(p5);











