
let submit=document.getElementById('butn')
let viewDta=document.getElementById('View')
submit.addEventListener('click',function(){
    let Name=document.getElementById('userName').value
    let Age=document.getElementById('userAge').value
    
    localStorage.setItem("Name",Name)
    localStorage.setItem("Age",Age)

    alert('Your Detail has been saved Thank You')
    
   
})

viewDta.addEventListener('click',function(){
    let output=document.getElementById('display')
    output.style.padding="5px"
    let name=localStorage.getItem("Name")
    let age=localStorage.getItem("Age")
   output.innerHTML=`Your Name is ${name} Age is ${age}`
})