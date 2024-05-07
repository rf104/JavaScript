///Arrays

let myArray = [12,3,4,5,56,23] /// its 0 indexing 
console.log(myArray[0]); /// 12
let newArray = new Array(12,4,5,6,4,5,5,5); // Another way of declering an array
console.log(newArray[2]); /// 5

let arr = [1, "aref", 23, 'a']; // multiple datatypes can be added in a single array. Even Object,(array itself ) also added to the array. 

console.log(arr[1]); ///aref
console.log(arr[2]); ///23
console.log(arr[3]); ///a

///Array Methods
myArray.push(10);/// Value inserted in the last of array 
myArray.pop(); /// Delete the last value of array
myArray.unshift(9); // It will add 9 to the first of array and rest of the value will be shifted.No enough efficient
myArray.shift(); /// Dlt the first value

console.log(myArray.includes(56)); // return boolean value. It check if the value exist in the array or not
console.log(myArray.indexOf(56)); // return the index ... if the value is not exist then it return -1

const newArr = myArray.join(); /// convert the array to a string. 
console.log(myArray);
console.log(typeof newArr); // String 


///slice , Splice 

const arr1 = [10,12,14, 5 , 3 , 5];
//   index    0  1  2   3   4   5             
console.log("A=> "+arr1);
const arr2 = arr1.slice(1,3); /// 12,14
console.log(arr2); 
console.log("B=>" + arr1);

const arr3 = arr1.splice(1,3); /// ei part main array theke dlt hoye jabe.
console.log(arr1); // 10 , 3 , 5 
console.log(arr3); // 12, 14, 5