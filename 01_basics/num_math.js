const score  = 400;
console.log(score);//400
const bal = new Number(400);
console.log(bal); /// [Number : 400] both can be used.But this type of decler explicitly use Number and show it to output.

console.log(bal.toString()); /// Make this Number value into string.
console.log(bal.toString().length);// it will give the length of converting string.
console.log(bal.toFixed(2)); /// It fixed the precision value (dhosomik er por koto ghor nibo)..this function take a number as parameter to precision of particular num

const anotherNum = 23.8964
console.log(anotherNum.toPrecision(2));

const hundereds = 10000000
console.log(hundereds.toLocaleString('en-IN')); // If we don't give any parameters to that function it gives us the std version of USA...if 'en-IN' then it gives the std of Indian style of written a number
/*
toLocalString() => 10,000,000
toLocalString('en-IN') => 1,00,00,000
*/

//---------------------------------MATH---------------------------------------------------

console.log(Math.abs(-4));///4
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2)); /// 5
console.log(Math.floor(4.9)); //4
console.log(Math.min(4,9,1,3,5,30,5)); //1
console.log(Math.max(4,9,1,3,5,30,5)); //30


console.log(Math.random()); /// it will give you a value always between 0 to 1

console.log(Math.random()*10 + 1 );// it will always give value 1 to up
console.log(Math.floor(Math.random()*10 + 1 ));//  give decimal number not dosomik

/*
But we need a specific range value then we have a formulae to do this
Math.floor(Math.random * (max-min+1) + min)
*/

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min + 1) + min)); //always give a value between value min to max!