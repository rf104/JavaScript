///Function 

function sayMyName(){
    console.log('Aref');
}

//sayMyName()
/* 
sayMyName // This is reference 
sayMyName() // This means Execution
*/

function sum(num1,num2){ /// sum(parameters)
    console.log(num1+num2);
}

//sum(3,4);/// sum(arguments)

//sum(2,"a"); // 2a it converts into string cause we don't have any checking condition 

//sum("a",3); // a3

function addTwoNum(num1,num2){
    /**
     * let result = num1 + num2
     * return result
     */
    return num1 + num2;
}

const result = addTwoNum(2,5)
///console.log("Result : ",result);

function UserLogedIn (name = "Tawsif"){ /// default value if there is no parameter then it will work!
    if(name === undefined){
        console.log("Please Enter A Name");
        return 
    }
    return `${name} is loged in`
}

console.log(UserLogedIn("Aref")); // Aref is loged in

console.log(UserLogedIn()); // Undefined is loged in ....if we don't pass any arguments then it normally takes undefined as parameter


