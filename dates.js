///Dates

const mydate = new Date();
console.log(mydate);//2024-05-07T15:23:57.044Z this output is difficult to read
console.log(mydate.toString()); ///Tue May 07 2024 21:24:49 GMT+0600 (Bangladesh Standard Time) this is quite good
console.log(mydate.toDateString());//Tue May 07 2024
console.log(mydate.toISOString());//2024-05-07T15:25:55.629Z
console.log(mydate.toJSON()); //2024-05-07T15:26:25.430Z
console.log(mydate.toLocaleDateString());///  5/7/2024
console.log(mydate.toLocaleString()); // 5/7/2024, 9:27:28 PM
console.log(mydate.toLocaleTimeString()); //9:28:00 PM
console.log(typeof mydate);

/// Create Date 

let createdDate = new Date(2024,4,23); // In JS Month is strat from 0 ...which means 0 means Jan , 1 means Feb
console.log(`The created date is ${createdDate.toDateString()}`);

///Another way to create a date 

let createdDate2 = new Date(2024,0,23,5,6) ////Date(year,month,date,hr,min,sec)
console.log(createdDate2.toLocaleString());


///Another way to create date

let createdDate3 = new Date("2002-01-03")
console.log(createdDate3.toLocaleString());

let createdDate4 = new Date("01-13-2003");
console.log(createdDate4.toLocaleString());


//-----------------Time-------------------

let mytime = Date.now()
console.log(mytime);/// the value is in milisec

console.log(typeof mytime); //Number

console.log(`The time from my specific date is ${createdDate4.getTime()}`); // this is also in milisec

///TO convert Milisec into Sec 

console.log(Math.floor(mytime/1000)); ///it will give sec value


let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMinutes());

/*newDate.toLocaleString('default'{
    weekday:'long',
})
*/
