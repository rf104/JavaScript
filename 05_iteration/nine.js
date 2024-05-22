///Reduce Funcction

const myNum = [1,2,3,4,5] 

let initial_val =0;

const total_sum = myNum.reduce((accumulator,current_val)=>{ //accumulator er value first time initial value or 0 hoi then er por theke accumulator+currentVal hoi
    console.log(`Accumulator = ${accumulator} and Current Value = ${current_val}`);
    return accumulator+current_val;
},initial_val)

console.log(total_sum); /// 15