const userMail = "rf@gmail.com";
if(userMail){ /// Here we don't need to check whether is true or false... userMail ==="rf@gmail.com"
    console.log("User Mail Found!");
}else{
    console.log("User Not Found!");
}

const Email = "" /// Empty String is considered as False.....but [] is considered as True!! 
if(Email){
    console.log("Email Found!");
}else{
    console.log("Not Found!!");
}

/*
Falsy Values : false, 0, -0, BigInt 0n, "", NaN, null, undefined

Truthy Valued : "0", 'false', " ", [], {}, function(){}
*/

    const arr = [];
    if(arr.length===0){
        console.log('Array Is Empty!');
    }
    const EmptyObject = {}
    if(Object.keys(EmptyObject).length === 0)
        {
            console.log("Object is Empty!!");
        }

    /**
     * false == 0 // true
     * 0 = false // true
     * false == "" // true
     * 0 == ''  // true 
     * false == '' /// true
     */


    // Nullish Coalescing Operator(??) .... null undefined;

    let val1 ;
    val1 = 5 ?? 10;
    console.log(val1);///5
    let val2 =null ?? 10;
    console.log(val2);///10

    let c
    c = null ?? 3 ?? 10  /// 1st a j value pabe setai store hobe (without null and undefined!)


    /// Ternery Operator : condition ? true : false
