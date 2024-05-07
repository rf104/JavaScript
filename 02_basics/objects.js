/// Singleton => object with constructor

/// object literals

const mySym = Symbol("Key1");

const JsUser = {
    name : "Aref",
    [mySym] : "myKey1",
    age : 21,
    isLogedin : true,
    lastLogedIn : ["Mon", "Sat"],
    "full name" : "Sajedulla Aref",
}
console.log(JsUser.age); //21
console.log(JsUser["full name"]); // Sajedullah Aref
console.log(JsUser[mySym]); /// Symbol is access by this only!
/*
Here we see that we can access object value by dot and [] also... specifically we can't access any element of a object if this eleemt is declre under ""
*/

// Change the value of Object 

JsUser.age = 10 ; 
//Object.freeze(JsUser); // By doing this we can not change any element of obj further...
JsUser.age = 123; /// this will not change cause before line we freeze the object thats why it will not change!!
console.log(JsUser);
/*
{
    name: 'Aref',
    age: 10,
    isLogedin: true,
    lastLogedIn: [ 'Mon', 'Sat' ],
    'full name': 'Sajedulla Aref',
    [Symbol(Key1)]: 'myKey1' ///Nore :  here it represent as Symbol!!
}
*/

JsUser.greetings = function(){
    console.log("Hello World");
}
JsUser.greetingsTwo = function(){
    console.log(`Hello, ${this.name}`);
}
console.log(JsUser.greetings);//[Function (anonymous)] it accept it as function but anonymous
console.log(JsUser.greetings());// Hello World
console.log(JsUser.greetingsTwo()); // Hello, Aref
