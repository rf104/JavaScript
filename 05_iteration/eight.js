const myNum = [1,2,3,4,5,6,7,8,9,10];

//const newNum = myNum.map( (num)=>{return num+10})

///Chainning 

const newNum = myNum
                    .map((num)=> num * 10) //atfirst 10 diye multiply hoye ekta array te store hobe then array ta 2nd command a pass hobe not newNum a
                    .map((num)=> num + 1)
                    .filter((val)=> val>40)
console.log(newNum);