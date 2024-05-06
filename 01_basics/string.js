let name  = "Aref"
let age = 21
//console.log(name + " age is" + age); ///old ways of printing string!!

console.log(`My name is ${name} and my age is ${age}`);//This type is known as String Interpulation.

//another way to decler string 

let Nam = new String('Aref');
console.log(Nam);///Aref
console.log(typeof Nam);//object 
console.log(Nam[0]);//A
console.log(Nam.__proto__);// {} it means object!!
console.log(Nam.toUpperCase());//AREF
console.log(Nam.length);//4
console.log(Nam.charAt(2));//e    it gives char of that perticular index.
console.log(Nam.indexOf('e'));//2  it gives Index of that perticular char!

let str1 = Nam.substring(0,3); ///(Neg value not accepted!,  )
console.log(str1);///Are

let str2 = Nam.slice(-3,2);///Work same as substring but here we can put negative number. -4 means here it will start from backside or last of string

console.log(str2);


const str3 = "     tawsif      "
console.log(str3);///      tawsif      
console.log(str3.trim());///tawsif ....here trim function cut the unnecessery space.

const url= "https://aref_104/dashboard%20home"

console.log(url.replace('%20',"_")); ///replace('want to replace', 'want to add')

console.log(url.includes("Aref"));///Boolean ans will provide.By using this we can find that any perticular word or name is present in the string or not.

let str4 = "aref-104-sajedullah"

console.log(str4.split("-"));