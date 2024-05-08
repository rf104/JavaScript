function calculatorCart(...num1){ /// this (...) is called rest operator 
    return num1 
}
//console.log(calculatorCart(12,3,45,6,7)); /// [ 12, 3, 45, 6, 7 ] output is an Array!

function calc(va1,val2,...num1){
    return num1;
}

//console.log(calc(1,2,3,4,5,5));  ////[ 3, 4, 5, 5 ] output cause here val1 = 1 , val2 = 2

const user = {
    name : "Aref",
    roll : 202214056,
}

function handleObject(anyObject){
    console.log(`Name of user is ${anyObject.name} and his roll num is ${anyObject.roll}`);
}

handleObject(user)

handleObject({
    name : "Tawsif",
    roll : 202014056,
})


// Array Part

const arr = [12,20,15,99,56];

function returnSecondVal(getArray){
    return getArray[1];
}

console.log(returnSecondVal(arr)); // 20 

console.log(returnSecondVal([0,56,86,98,99,104])); //56