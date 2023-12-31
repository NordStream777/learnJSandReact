window.addEventListener("DOMContentLoaded", function(){

    'use strict'
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

btn.addEventListener('click', function () {
    modalWindow.style.display = 'block';
    this.classList.add("more-splash");
    document.body.style.overflow = 'hidden';
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

// Отправка данных с формы 

let message = {
    loading : "Loading",
    success : "All good",
    error: "Something wrong"
}

let form = document.querySelector('.main-form'),
    form2 = document.getElementById('form'),
    input = document.getElementsByTagName('input'),
    statusMessage = document.createElement('div')
    statusMessage.classList.add('status');

function sendForm(elem) {
    elem.addEventListener('submit', function(e){
        e.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);
            let obj = {};
                formData.forEach(function(value,key){
                obj[key] = value;

                });

            function postData(data){
                return new Promise(function(resolve,reject){
                    let request = new XMLHttpRequest();

                    request.open("POST", "server.php");

                    request.setRequestHeader ('Content-Type', "application/json");

                    request.onreadystatechange = function() {
                        if (request.readyState === 4) {
                            if (request.status === 200) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };

                let json = JSON.stringify(obj);
                request.send(json);
                })
            }       


        function clearInput(){
            for (let i = 0; i < input.length; i++){
                input[i].value = '';
            }
        }
        postData(formData)
            .then(()=> statusMessage.innerHTML = message.loading)
            .then(()=>{
                statusMessage.innerHTML = message.success;
            })
            .catch(()=> statusMessage.innerHTML = message.error)
            .then(clearInput)
    });
}

sendForm(form)
sendForm(form2)


// Слайдер

let slideIndex = 2;
let slides = document.querySelectorAll('.slider-item'),
    next = document.querySelector('.next'),
    prev = document.querySelector('.prev'),
    dots = document.querySelectorAll ('.dot'),
    dotsWrap = document.querySelector('.slider-dots');

showSlides(slideIndex)
    
function showSlides(n){
    if (n>slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length
    }

    slides.forEach((item)=> item.style.display = 'none')

    dots.forEach((item)=> item.classList.remove('dot-active'));

    slides[slideIndex-1].style.display = 'block'
    dots[slideIndex-1].classList.add('dot-active')
}   

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

prev.addEventListener('click', function(){
    plusSlides(-1)
});

next.addEventListener('click', function(){
    plusSlides(1)
});

dotsWrap.addEventListener('click', function(event){
    for (let i = 0; i < dots.length +1; i++){
        if (event.target.classList.contains('dot')&& event.target == dots[i-1]){
            currentSlide(i);
        }
    }
})

// Calculator

let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    daysSum = 0,
    personsSum = 0,
    total = 0; 

totalValue.innerHTML = 0;

function calculateTotal() {
    total = (daysSum + personsSum) * 4000;

    if (daysSum == '' || personsSum == '') {
        totalValue.innerHTML = 'Введите числовые значения';
    } else {
        totalValue.innerHTML = total;
    }
}

persons.addEventListener('change', function(){
    personsSum = +this.value;
    calculateTotal();
});

restDays.addEventListener('change', function(){
    daysSum = +this.value;
    calculateTotal();
});

place.addEventListener('change', function(){
    if (restDays.value == '' || persons.value == ''){
        totalValue.innerHTML = 0 
    } else {
        calculateTotal();
        let a = total;
        totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
} )

});



