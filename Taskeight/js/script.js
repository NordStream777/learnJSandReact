window.addEventListener("DOMContentLoaded", function(){

    'use scrict'
// Табы
    let container = document.querySelector(".info-header");
    let tabs = document.querySelectorAll (".info-header-tab");
    let dscr = document.querySelectorAll (".info-tabcontent")

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
let countDownDate = Date.parse('2023-10-14');

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
});
