let money = +prompt("Ваш бюджет на месяц?", "100");
let time = prompt ("Введите дату в формате YYYY-MM-DD", "2023-09-29");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    saving:false
}


console.log(appData.budget/30);

for (let i = 0; i < 2; i++) {
    
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = prompt("Во сколько обойдется?");

    if( (typeof(a)) ==='string'  && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50){
        console.log('done');
        appData.expenses[a] = b;
    }
    else{
        alert('Write correct nubmer')
        i= i-1;
        console.log('done2');
    }
}

appData.moneyPerDay = appData.budget / 30;


