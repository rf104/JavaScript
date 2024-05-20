const myClass = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by Apple",
}

for (const key in myClass) {
    //console.log(`Key => ${key} && Val => ${myClass[key]}`);
}
// Get Array Value and Index Val using For in
const arr = [1,2,4,5,6];
for (const num in arr) {
    console.log(num);// index of array will print
    console.log(`Values of ${num} index is ${arr[num]}`);
}

/// using for in we can not fetch any value or key from a map!!

const map = new Map()
map.set('1',"Aref")
map.set('2',"MS")
map.set('3',"Sangakara")

for (const key in map) {
    console.log(key); /// there will be no output and no error also !! 
}