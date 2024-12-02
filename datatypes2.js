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

// -------------------------Memory--------------------------

/*
Memory 2 types.... 1=> Stack (primitive) 2=> Heap(Non Primitive)
*/

console.log("Stack Examples!----->");

let Name = "Aref";
let anotherName = Name; ///In this line it made a copy of Name. 
anotherName = "Tawsif"///Then it will change to another name. Thus it is a copy version. so changes will not impact on main versions.

console.log(Name); //Aref
console.log(anotherName);//Tawsif

console.log("Heap Examples------------->");

let user1 = {
    email : "sajedullah@gmail.com",
    age : 21,
}

let user2 = user1 ///Here it give the reference of main version. So if any changes happpen in user2 or user1 then it will also change in user1 cause both are in same reference or address!!

user2.email = "sajedullah_aref_104@yahoo.com"

console.log(user1.email);//sajedullah_aref_104@yahoo.com
console.log(user2.email);//sajedullah_aref_104@yahoo.com