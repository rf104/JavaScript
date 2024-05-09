/// Immediate Invoked Function Expression 
(function Tea(){
    // named IFFE 
    console.log(`Database Connected!`);
}) () ; /// This type of function calling is known as IIFE But We have to make sure that in the end ; must be put casue it doesn't know where the funtion stop

(()=>{
    ///Simple Iffe
    console.log("Welcome Aref");
}) ();


((parameters)=>{
    console.log(`Parameters Passing through ${parameters}`);
}) ("arguemts");