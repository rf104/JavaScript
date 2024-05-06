let score  = null//if it is null then it will convert it 0 and if it is undefined then it will show NaN
console.log(typeof score);
console.log(typeof(score));

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