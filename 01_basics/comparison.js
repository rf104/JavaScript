console.log(null > 0);//false
console.log(null == 0);//false 
console.log(null >= 0);//true 
/*
the reason is that the equaty check(==) and comparison check (>,<,>=,=<) works differently.comparison convert null into number and it treat null as 0. Thats why null>=0 is true and null>0 is false.
*/

console.log("2"==2); //true.. cause string convert into Number then it check 
// === It means strictly check . It also check the datatypes.

console.log("2" === 2); //false ...


console.log(undefined == 0);//false 
console.log(undefined > 0);//false
console.log(undefined < 0);//false
console.log(undefined >= 0);//false