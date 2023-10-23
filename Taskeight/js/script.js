window.addEventListener("DOMContentLoaded", function(){

    'use scrict'
// Табы
    let container = document.querySelector(".info-header");
    let tabs = document.querySelectorAll (".info-header-tab");
    let dscr = document.querySelectorAll (".info-tabcontent");
    let descrBtn = document.querySelectorAll('.description-btn');

    function tabContentHide(a){
        for (let i = a; i < dscr.length; i++){
            dscr[i].classList.remove('show');
            dscr[i].classList.add('hide');
        }
    }

    tabContentHide(1)

    function tabContentShow(b){
        if (dscr[b].classList.contains('hide')){
            dscr[b].classList.remove('hide');
            dscr[b].classList.add('show');
        }
    }

    container.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tabs.length; i++){
                if (tabs[i] == target){
                    tabContentHide(0)
                    tabContentShow(i)
                    break;
                }
            }
        }
    })


// Таймер
// Устанавливаем дату, до которой будет идти обратный отсчет (замените эту дату на нужную)
let countDownDate = Date.parse('2023-12-31');

let x = setInterval(function() {

    let now = Date.now();
    let t = countDownDate - now;
    let hours = Math.floor((t/(1000*3600)));
    let minutes = Math.floor((t/1000/60)%60);
    let seconds = Math.floor((t/1000)%60);

    document.querySelector(".hours").textContent = hours < 10 ? "0" + hours : hours;
    document.querySelector(".minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.querySelector(".seconds").textContent = seconds < 10 ? "0" + seconds : seconds;

    if (t < 0) {
    clearInterval(x);
    document.getElementById("timer").textContent = "Время истекло!";
    }
}, 1000);


// Модально окно

let btn = document.querySelector(".more");
let modalWindow = document.querySelector('.overlay');
let btnClose = document.querySelector('.popup-close');


descrBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        modalWindow.style.display = 'block';
        this.classList.add("more-splash");
        document.body.style.overflow = 'hidden';
    });
});

btnClose.addEventListener('click', function(){
    modalWindow.style.display = 'none';
    btn.classList.remove("more-splash");
    document.body.style.overflow = '';
})

class Options{
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createElem(text){
        this.div = document.createElement('div');
        this.div.textContent = text;
        this.div.style.cssText = `height : ${this.height}px; width : ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align : ${this.textAlign} `;

         return document.body.appendChild(this.div);
    }
}

let newDiv = new Options(100,300,'blue',14,'center')

console.log(newDiv.createElem("i'm new div"))
});


