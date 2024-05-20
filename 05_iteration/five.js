/// Higher Order function

const coding = ['Java', 'JavaScript', 'Ruby', "CPP"]

    coding.forEach( (val,indx,arr)=>{
        //console.log(val,indx,arr);
    })

    //coding.forEach( function(item){ // callback function thats why no name of for this function!
    //    console.log(item);
    //})

    coding.forEach((val)=>{
       // console.log(val);
    })


    /**another method 
     * function printMe(item){
     *      console.log(item);
     * }
     * coding.forEach(printMe);
     * 
     * coding.forEach( (value,index,array ) =>{} ) it gets three parameters !!
     * 
     */


    const myArray = [
        {
            languageName : "javascript",
            languageFile : "js",
        },
        {
            languageName : "java",
            languageFile : "java",
        },
        {
            languageName : "C++",
            languageFile : "cpp",
        },
    ]

    myArray.forEach( (item) => {
            console.log(item.languageName);
    } )