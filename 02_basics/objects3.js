
/// De Structure 

const course = {
    course_name : "Compiler",
    course_price : 100,
    course_instructor : "Alex",
}

// By calling elements of an object we know two ways one is dot method another is [] method.

const {course_instructor} = course

console.log(course_instructor); /// By this sytanx we also access the value of an obj

const {course_name : name} = course // {given_name : change_name} .... we can also change the name of any element!
console.log(name);