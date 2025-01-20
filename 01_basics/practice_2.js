// const balance = 12.353;
// // console.log(balance.toPrecision(3)); // it allows how many char we want to show in output and it also round up the value
// // console.log(balance.toFixed(2)); // it allows us to show how many char after the point 

// const Hundreds = 10000000;

// // console.log(Hundreds.toLocaleString('en-IN'));// it will put comma in Indian/Bnagladehsi Style
// // console.log(Hundreds.toLocaleString()); // it will show USA style number delcration 

// let min = 10;
// let max = 20

// //console.log(Math.round(Math.random()*(max-min+1)+min));

// ///array

// // const myArr = [1,234,5,6,78,9,5,3,2]
// // console.log(myArr.sort((a,b)=>a-b));

// // console.log(myArr.slice(1,4));
// // console.log(myArr);

// // console.log(myArr.splice(1,4))
// // console.log(`New array is : ${myArr}`)

// const favAnime  = ["Naruto",'SpyXFamily',"FullMetal"]
// const GoodAnime = ["AOT","DemonSlayers","DeathNote"]
// //favAnime.push(GoodAnime);
// //console.log(favAnime);

// //const newList = favAnime.concat(GoodAnime)
// const newList = [...favAnime,...GoodAnime]
// //console.log(newList)

// let newArr = [10,21,4,5,[3,5,66,7],4,6,7,[3,4,56,7,6,[99,92,293]]]
// //console.log(newArr.flat(Infinity));

// ///Object

// const tinderuser = new Object({
//     id : "OX1245",
//     Name : "Aref",
//     age : 21,
// })
// // tinderuser.id = 123;
// // tinderuser.name = "Sam"
// // tinderuser.email = "sajedullah_aref_21@gmail.com"

// // console.log(tinderuser)

// const obj1 = {
//     id:'OX2022',
//     Name:'rf_104',
//     email:'rf@gmail.com',
// }
// const obj2 = {
//     isLogedIn:false,
//     LastActive : "2025-01-12",
// }

// // const obj3 = Object.assign({},obj1,obj2);

// const obj3 = {...obj1,...obj2}
// console.log(obj3);

// const course = {
//     courseName:"Software Dev",
//     price: 999,
//     courseInstructor:"Aref",
// }

// const {courseInstructor:Instructor} = course

// console.log(Instructor);

///Function

// function addTwoNumber(number1,number2){
//     return number1+number2;
// }
// const two = addTwoNumber(4,5);
// console.log(two);

// function showLoggedIn(username = "Kargil"){
    
//     return `${username} just logged In`
// }

// const Notification = showLoggedIn()
// console.log(Notification);

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(112,224,456,45));

function handleObject(anyObj){
    //console.log(`Username is ${anyObj.name} and age is ${anyObj.age}!`);
}

const user = {
    name : 'Aref',
    age : 21,
}

handleObject({
    name:'Sajedullah Aref',
    age : 25,
})

let a  = 123;
if(true){
    let a = 10; //it will treat as a diff a and it will work as its own value under the scope but when its outside the scope then a will be the previous value!!
    const b = 20;
    c = 30; /// if you don't delclare it under any let or const it assume that its a var type!! which is a big problem!!
}
// console.log(a);

///Concept of Scope
function one(){
    const userName = 'Sajedullah Aref';

    function two(){
        const handle = 'rf_104';
        console.log(userName);
    }

    // console.log(handle); // handle con't be access due to scope!!
    two()
}

//one()

//++++++++++++++++++++++++++++++++++++Exprestion+++++++++++++++++++++++++++++++++

const addTwo = function(num){  ///this is called as a Expression!! In this type of declaration we can not access the function before the code section!
    return num+2
}

//console.log(addTwo(3));

const userDetails = {
    username:"Sajedullah Aref",
    age: 22,
    welcomeMessage:function(){
        console.log(`${this.username} , Welcome to our website!!`);
        console.log(this); // in this Scope it carry the whole object !!
    }
}

// userDetails.welcomeMessage();
// userDetails.username = 'Tawsif';
// userDetails.welcomeMessage();

//console.log(this); ///globally it have empty object {}

function chai()
{
    let username  = 'Aref'
    // console.log(this); //'this' have lot of information !! but me ignorant about info
    console.log(this.userName);     //undefined
    // from this we got to know that 'this' only work in object but here its not working as we expect!!
}

// chai()

const Chai =()=>{
    console.log(this); /// {} cause In Arrow function this is inherits from surrounding scope!!
}

//chai();

(function Welcome(){
//console.log(`Welcome to the blog!`);    
})() // this is the way of IIFE (Immediatly Invoked Function Expression)

///test Empty Object!

const emptyObject = {}

if(Object.keys(emptyObject).length ===0) //thats how we can check the size of object!!
{
    //console.log("Object is Empty");
}

let val1;
val1 = null ?? 10 /// this means if the val1 is encouter any null assign then it inderectly assign with 10 normally in complex code insetead of value(10) there might be a function
console.log(val1); // 10
