    // const coding  = ['Java', 'Javascript','CPP','Swift']

    // const iteam = coding.forEach( (val)=>{
    //     //console.log(val);
    //     return val;
    // } )

    // console.log(iteam); // Undefined!!

    const myNum = [1,2,3,4,5,6,7,8,9,10];
    const NewNum = myNum.filter((val)=>val > 4)  /// single line a likchi ty return use kora lage nai!!
    //console.log(NewNum); ///[ 5, 6, 7, 8, 9, 10 ]
    // Another way to store 
    const myNumber = [1,3,45,56,7,5,4];
    // const New = Number.filter((val)=>{
    //     return val>4
    // })
    //But we want to do that same thing using foreach method then sytanx should be like this 
    const New = [];
    myNumber.forEach( (val)=>{
        if(val>4)
            {
                New.push(val)
            }
    })
    console.log(New);//[ 45, 56, 7, 5 ]