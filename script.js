let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", "100"),
    time = prompt ("Введите дату в формате YYYY-MM-DD", "2023-09-29");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", "100");
    }
}
start()


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    saving: true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++) {
    
            let a = prompt("Введите обязательную статью расходов в этом месяце");
            let b = prompt("Во сколько обойдется?");
        
            if( (typeof(a)) ==='string'  && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50){
                appData.expenses[a] = b;
            }
            else{
                alert('Write correct nubmer')
                i= i-1;
            }
        }
    },
    detectDayBudget: function(){
        let = appData.moneyPerDay = (appData.budget / 30).toFixed()
        alert( "Your day budget " + appData.moneyPerDay );
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100){
            alert("It's minimal level of prosperity")
        }
        else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            alert("It's average level of prosperity")
        }
        else if (appData.moneyPerDay > 2000){
            alert("It's high level of prosperity")
        }
        else {
            alert("Error")
        }
    },
    checkSaving:function(){
        if (appData.saving == true){
            let save = +prompt ("What is sum of deposit?"),
            percent = +prompt("What procent do you want?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Your everymonth income " +  appData.monthIncome)
        }
    },
    chooseOptExpenses:function(){
        for (let i = 0; i < 3; i++) {
    
            let a = prompt("Статья необязательных расходов?");
        
            if( (typeof(a)) ==='string'  && (typeof(a)) != null &&
            a != '' && a.length < 50){
                appData.optionalExpenses[i] = a;
            }
            else{
                alert('Write correct nubmer')
                i= i-1;
            }
        }
    },
    chooseIncome: function(){
        let items
        do {
            items = prompt("Какие у вас источники дохода? (Перечислите через запятую)", 'горячие, собаки, очень, горячо');
        } while (!items || !isNaN(items));
        appData.income = items.split(', ');
        appData.income.push(prompt("may me something else?"));
        appData.income.sort();
        appData.income.forEach(function(item, i){
            alert("Способы доп. заработка: " + (i+1) + " : " + item)
        })
    }
}

function showAppdata(){
    for (let key in appData){
        console.log("Наша программа включает в себя данные " + key)
    }
}





