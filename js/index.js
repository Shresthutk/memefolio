console.log('Welcome to Utkarsh\'s portfolio');
let burger=document.getElementById('burger');
let ul=document.getElementById('ul');
let li1=document.getElementById('li1');
let li2=document.getElementById('li2');
let li3=document.getElementById('li3');
let li4=document.getElementById('li4');
burger.addEventListener('click',hamBurger);
function hamBurger(){
    console.log('button clicked');
    ul.classList.toggle('hamul');
    li1.classList.toggle('hamli');
    li2.classList.toggle('hamli');
    li3.classList.toggle('hamli');
    li4.classList.toggle('hamli');
}