const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body")
h1=document.querySelector("h1")

buttons.forEach( (button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.id=='purple'){
            body.style.backgroundColor="purple"
        }
        if(e.target.id=='aqua'){
            body.style.backgroundColor="aqua"
        }
        if(e.target.id=='pink'){
            body.style.backgroundColor="pink"
        }
        if(e.target.id=='blue'){
            body.style.backgroundColor="blue"
        }
    })

})