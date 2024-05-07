const std1 = ["aref","tawsif","hemal"]
const std2 = ["hafsa","taqi","tahsan"]
/*
std1.push(std2) // Here we enter an array to an array as specific index.

console.log(std1); /// [ 'aref', 'tawsif', 'hemal', [ 'hafsa', 'taqi', 'tahsan' ] ]

console.log(std1[3]); /// [ 'hafsa', 'taqi', 'tahsan' ]

console.log(std1[3][1]); /// taqi
*/


const allstd = std1.concat(std2); // Concat returns a new array whcih is merge of both array

console.log(allstd); ///[ 'aref', 'tawsif', 'hemal', 'hafsa', 'taqi', 'tahsan' ]

// Sprade operator 
// in concat mehtod we can use atmost 2 arrays but in sprade method we use all we want
const all_new_std = [...std1,...std2]; // [ 'aref', 'tawsif', 'hemal', 'hafsa', 'taqi', 'tahsan' ]

console.log(all_new_std);


/// flat 

const arr = [1,2,3,[4,5,6],7,[8,9,[10,11]]] /// depth of this array is 3
const newArr = arr.flat(Infinity) /// this function make all elements of subarray or array in a singel array. In parameters we have to give the depth of our desire op
console.log(newArr);

console.log(Array.isArray("aref")); /// false
console.log(Array.from("aref")); /// convert it to a array // [ 'a', 'r', 'e', 'f' ]
console.log(Array.from({name : "Aref"})); // [] cause when it can not convert it will return empty string 


const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3)); // instead of from we can use .of function whcih also convert multiple things into a string
