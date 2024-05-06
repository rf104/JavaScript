/*
Datatypes are basically two types 1. Primitive 2. Non Primitive (Reference) . This classification is based on how a data is stored and call 
Primitives(call by values) : 7 catagories : string , Number, null, undefined, BigInt, Symbol,Boolean 
Reference(call by reference) : Array , Object, Functions 

when you check the typeof All non primitives then you will get output functions . But for function we call the type object function .
*/

let id = 283484985739343n //by putting n in the last of a number it represent BigInt Number.
//console.log(typeof id);

let yt = Symbol('1234');
let anotherYt  = Symbol('1234');

console.log(yt===anotherYt);///false casue symbol it means unique even though we put same value on symbol.

let heros=["Batman","SpiderMan","SpuerMan"];
console.log(typeof heros); //Object

let myFunc = function(){
    console.log("Hello World");
}

console.log(typeof myFunc); //Function

/*
Return type of variables in JavaScript
1) Primitive Datatypes
    Number => number
    String  => string
    Boolean  => boolean
    null  => object
    undefined  =>  undefined
    Symbol  =>  symbol
    BigInt  =>  bigint

2) Non-primitive Datatypes
    Arrays  =>  object
    Function  =>  function
    Object  =>  object
*/