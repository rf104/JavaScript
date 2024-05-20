/// for of

let arr = [1,2,3,4,5,56,6,7,7]

for (const num of arr) {
    //console.log(num);/// it will print all the values of arr array!!
}

let greetings = "Hello Aref"
for (const greet of greetings) {
    if(greet!==' '){
    //console.log(`Each char of strings is ${greet}`);
    }
}


///MAP

const map = new Map();

map.set("BAN", "Bangladesh");
map.set("IN", "INDIA");
map.set("ARG", "Argentina");

/*
for (const key of map) {
    console.log(key);/// for this key hold the whole values of map <key,Val>
}*/

for (const [key,val] of map) {
    //console.log(`key =>${key}  Value =>${val}`);
}

///For of is not work in objects!!

let myClass = {
    'Name' : "Aref",
    'Age' : 21,
    'ID' : 202214056,
}

for (const key of myClass) {
    //console.log(key); /// output : is not iterable
    // But for object forin will work!!
}