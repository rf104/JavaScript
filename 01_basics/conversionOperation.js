let score  = null//if it is null then it will convert it 0 and if it is undefined then it will show NaN
//console.log(typeof score);
//console.log(typeof(score));

let num = Number(score);//If this is pure string like abc.. then it will not work It will give output NaN(Not a Number)
console.log(num);
console.log(typeof num);

/*
"33" => 33
"33abc" => NaN
true => 1, false => 0
*/

let isLogedIn = 1
let booleanLog  = Boolean(isLogedIn);
console.log(booleanLog);

let isLogedIn1 = 0
let booleanLog1 = Boolean(isLogedIn1)
console.log(booleanLog1);

/**
1 => true, 0=> false
"" => false, "addjfsk"=> true
*/

//------------------Operation----------------------------

let value = 10;
let negVal = -value
/*
console.log(negVal);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);// double ** means to the power...ig: it will show output 8
console.log(2/3);
*/

let str1 = "Hello"
let str2 = " Aref"
let str3 = str1+str2;

console.log(str3);

console.log("1" + 2);//12
console.log(1 + "2");//12
console.log(1 + 2 + "2");//32
console.log("1" + 2 + 2);//122

console.log( 3 + 5 * 4 % 2); // its not a good way to written this. But as far concern here first multiplication is done and the sum and then mod operation

let count = 100
count++;
console.log(count);
