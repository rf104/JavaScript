const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value) // int a convert kortesi
    const weight = parseInt(document.querySelector('#weight').value) // 
    const result = document.querySelector('#results')
    
    if(height<0 || height===''|| isNaN(height)){
        result.innerHTML = "Please Enter A Valid Height!"
    }
    if(weight<0 || weight===''|| isNaN(weight)){
        result.innerHTML = "Please Enter A Valid weight!"
    }
    else{
        const ht = height/100;
        const rst = (weight/(ht*ht)).toFixed(2);
        result.innerHTML = `<span>BMI is ${rst}</span>`;
        if(rst<18.6){
            result.innerHTML= `<span>BMI is ${rst}</span><br><p>under weight</p>`
        }
        else if(rst>=18.6 && rst<=24.9){
            result.innerHTML= `<span>BMI is ${rst}</span><br><p>Normal weight</p>`
        }
        else if(rst>24.9){
            result.innerHTML= `<span>BMI is ${rst}</span><br><p>Overweight</p>`
        }
    }
})