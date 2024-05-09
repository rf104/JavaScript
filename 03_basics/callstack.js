function one(){
    two()
    console.log("one");
}
function two(){
    three()
    console.log("two");
}
function three(){
    console.log("three");
}

one()

// Call Stack is basically a stack so Here LIFO applied
/*
    |               |
    |   three       |
    |   two         |
    |   on          |
    |___Global______|
*/
