let ul = document.getElementsByClassName('menu')[0];
let body = document.querySelector('body');
let title = document.getElementById('title');
let adv =document.querySelector('.adv')
let div = document.getElementsByClassName('column')[1];
let promptEl = document.getElementById('prompt')
let li = document.createElement('li');


li.classList.add('menu-item');
li.innerHTML = 'Пятый элемент'
ul.appendChild(li);

body.style.background = 'url(../img/apple_true.jpg) center no-repeat';


title.textContent = 'Мы продаем только  подлинную технику Apple';

adv.remove()

let qw = prompt("Ваше отношение к технике Apple?");
promptEl.textContent = qw;




