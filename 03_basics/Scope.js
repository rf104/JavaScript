
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