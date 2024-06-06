const buttons  = document.querySelectorAll('.button');
const body  = document.querySelector("body")
//console.log(buttons);

buttons.forEach((button)=>{
    //console.log(button); in this button we get all the spans!
    button.addEventListener('click',(e)=>{
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.id)
        if(e.target.id ==='grey'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id ==='white'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id ==='blue'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id ==='yellow'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id ==='purple'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id ==='red'){
            body.style.backgroundColor = e.target.id;
        }
    })
})

