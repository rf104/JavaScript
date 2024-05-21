    // const coding  = ['Java', 'Javascript','CPP','Swift']

    // const iteam = coding.forEach( (val)=>{
    //     //console.log(val);
    //     return val;
    // } )

    // console.log(iteam); // Undefined!!

    const myNum = [1,2,3,4,5,6,7,8,9,10];
    const NewNum = myNum.filter((val)=>val > 4)  /// single line a likchi ty return use kora lage nai!!
    console.log(NewNum);
    // Another way to store 
    const Number = [1,3,45,5,766,5,7,7,5,4];
    const New = Number.filter((val)=>{
        return val>4
    })

    console.log(New);