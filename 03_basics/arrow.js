const user = {
    name : "Aref",
    roll : "202214056",

    welcomeMessage: function(){
        console.log(`${this.name} is a stundent and his roll number is ${this.roll}`);
        //console.log(this);
    }
}

user.welcomeMessage()
user.name = "Sajedullah"
user.welcomeMessage()

//console.log(this) // when we try this at any global scope it will return {} empty object. But if we try it on browser then it will return a window object

// function chai(){
//     let username = "sajedullah_aref";
//     console.log(this.username); /// undefined 
// }

// chai()
// Another way

const chai = function(){
    let username = "sajedullah_aref"
    //console.log(this.username); ///undefined
    console.log(this); // here in 'this' have lot of functionality 
}

// chai()

/// Another Way !!

const cha = () =>{  // this is call arrow function
    let username = "sajedullah"
    console.log(this.username); // undefined
    console.log(this); // {}
}
//cha()


const add = (num1 , num2)=>{
    return num1 + num2
}
//console.log(add(2,5)); // 7

// Same Function can be written as which is known as Implecit Return

const addTwo = (num1 , num2) => num1 + num2 /// this is known as Implecit return 

// console.log(addTwo(3,4)); // 7
