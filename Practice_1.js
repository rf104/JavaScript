let accountID = 1234454;
var accoutnName = "Aref";
let City = "Chittagong";
const Pass = 123456

console.table([accountID,accoutnName,City,Pass]);




console.table([accountID,accoutnName,City,Pass]);

//** Constant can not change ....Let should be used instead of var cause var have scope issues...

// In the below Example Var is used but here we can see that i can be called or used outside of its scope which is a great issues on security of informations 

function add()
{
    for(var i = 0;i<5;i++){
        console.log(i);
    }
    console.log(i);
}

add()

//In that example let is used and we clearly see that k is trying to access in outside of its range but it can not ... it gives a error..THats why let should be used!!

function sum()
{
    for(let k=0; k<5; k++)
    {
        console.log(k);
    }
    console.log(k);
}

sum();