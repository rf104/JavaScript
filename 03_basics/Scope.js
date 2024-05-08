/*
if(1){
    let a = 10;
    const b = 20;
    var c = 30;
}
//console.log(c); /// 30      This the problem of var. Cause In this Global Scope we don't have any c ....but in local Scope we have c which is under var that's why we can print c in global scope

let a = 10 ;
if(true){
    let a = 20;
    console.log("Local Scope : ",a); // 20
}

console.log("Global Scope : ",a);//10
*/

function one(){
    const username = "aref"

    function two(){
        const web = "facebook"
        console.log(username);
    }

    //console.log(web);// this is out of the scope thats why it will give error

    two()
}

//one()

//// Hoisting 

console.log(addOne(4)); /// This will work though its before its function
function addOne(num1){
    return num1 + 1 ;
}

//console.log(addOne(4)); /// this will also work


///console.log(addTwo(3)); // this will not work 
const addTwo = function(num1){
    return num1+2;
}

console.log(addTwo(3)); ///5    this will work 