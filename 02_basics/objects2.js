///const stdUser = new Object() ///Singleton Object Decler

const stdUser  = {} //Literal type of Obj decler
stdUser.id = "123abc"
stdUser.name = "Aref"
stdUser.isLogedIn = false

console.log(stdUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userName : {
            firstName : "Sajedullah",
            lastName : "Aref",
        }
    }
}

console.log(regularUser.fullname.userName.lastName); // We can access at most depth of the obj inside and obj by using dot 

const user1 = {
    1 : "A",
    2 : "R",
}

const user2 = {
    3 : "E",
    4 : "F"
}

// If we try to marge the two object like bellow 

//const user3 = {user1, user2} /// THis have a problem casue in User3 it have two elements 1 is user1 , 2 is user2 cause it take object under a object
//const user3 = Object.assign({},user1,user2); // it gives our desire output.... here as a parameter we should send a empty object which good written std.  without it ans will be same
/*
its not compulsory to give an empty object .... by given this we try to assume that in this empty objct will fullfilled by other object!!
*/

//Sprade Method

const user3 = {...user1,...user2};


console.log(user3);

const user = [
    {
        id : 1,
        email : "rf@gmail.com",
    },
    {
        id : 2,
        email : "rfff@yahoo.com",
    },
    {
        id : 3,
        email : "sajdullah@google.com"
    }
]

//console.log(user[1].email); /// This is how we access the value of an object if it is in array of obj

console.log(Object.keys(stdUser)); /// by this we can find the all keys of obj ....** The output is in array!**

console.log(Object.values(stdUser)); // by this we can find all the values of obj .... ** the o/p is in array!!**
console.log(Object.entries(stdUser)); //  ** the o/p is in array of an array!!**

/// to check a property exist or not 

console.log(stdUser.hasOwnProperty('isLogedIn')); // return boolean values!!
