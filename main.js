'use strict'; 


let counter = 12;
let temp;

const btn = document.querySelector('.js-start');
let uvas = ['🎊','🎊','🎊','🎊','🎊','🎊','🎊','🎊','🎊','🎊','🎊','🎊']; 
const counterTime = document.querySelector('.time'); 
const grapesList =document.querySelector('.js-list');
const msg= document.querySelector('.js-msg');
const sectionCircle = document.querySelector('.circle');
const sectionFw =document.querySelector ('.msg_section');
const main = document.querySelector ('.main');

const renderList = ()=> {
    let container = '';
      uvas
      .map((item)=> {container+=`<li> ${item} </li>`})
      .reverse("")
      grapesList.innerHTML= container;
      return container;
  }
renderList();

const handleClick = () =>{
    const decrementAndShowTime = () => {
        counter--;
        counterTime.innerHTML = counter; 
        if (counter >= 0) {
            counterTime.innerHTML= counter;
            uvas.shift();
            renderList();
            }else{
            clearInterval(temp);
            counter = 12;
            counterTime.innerHTML=counter;
            uvas = ['🎊','🎊','🎊','🎊','🎊','🎊','🎊','🎊','🎊','🎊','🎊','🎊']; 
            renderList();
            msg.innerHTML = `<article class="msg_article">
            <h1 class= "title">Happy New Year!!!</h1>

            <button class="btn-msg">Take me back</button>
            </article>`; 
            msg.classList.remove('hidden');
            sectionCircle.classList.add ('hidden');
            main.classList.add('img-fire')
          }
    }
    
    temp = setInterval (decrementAndShowTime, 1000) 
    
}

function restorePage () {
  sectionCircle.classList.remove('hidden');
  msg.classList.add ('hidden');
  main.classList.remove('img-fire');
}


btn.addEventListener ('click', handleClick);
sectionFw.addEventListener ('click', restorePage);