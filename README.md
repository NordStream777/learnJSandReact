# learnJSandReact

## Первое задание 

Подготавливаем проект к дальнейшим урокам

1) Создать HTML страницу и подключить к ней файл скрипта

2) В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:

·      Первая будет спрашивать "Ваш бюджет на месяц?"

·      Вторая "Введите дату в формате YYYY-MM-DD"

3) Создать объект appData, который будет содержать такие данные:

·      бюджет (передаем сюда переменную из п.2)

·      данные времени - timeData (передаем сюда переменную из п.2)

·      объект с обязательными расходами - expenses (смотри пункт 4)

·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)

·      массив данных с доп. доходом - income (оставляем пока пустым)

·      свойство savings (выставляем его как false)

4) Задать пользователю по 2 раза вопросы:

    “Введите обязательную статью расходов в этом месяце”

    “Во сколько обойдется?”

    Записать ответы в объект expenses в формате: 

    expenses: {
    “ответ на первый вопрос” : “ответ на второй вопрос”
    }
5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)

6) Проверить, чтобы все работало без ошибок в консоли

7) Создать свой репозиторий на GitHub и поместить туда папку с первым заданием

Вопросы к этому заданию
Сколько типов данных существует в JS?

В Js существует 7 типов данных 
1) String - строка
2) Number - число 
3) [] - объекты 
4) false/true - буленивый типо
5) undefined - переменная есть, но не задано значение
6) null
7) Symbol

Как вывести информацию в консоль?

Необходимо написать console.log (и вставить сюда данные)

Какая функция операторов || и &&?

|| - логическое "или", true,если один из операндов true
&& - логическое "и", true, если все операнды true



## Второе задание 

Задачи на понимание основ JS (с реальных собеседований)

Ответьте на вопросы. Если возникают затруднения - воспользуйтесь выводом в консоль (console.log())

Вопросы к этому заданию
Какое будет выведено значение: let x = 5; alert( x++ );  6

Чему равно такое выражение: [ ] + false - null + true ? NaN

Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? 2

Чему равна сумма [ ] + 1 + 2? 12

Что выведет этот код: alert( "1"[0] )? 1

Чему равно 2 && 1 && null && 0 && undefined ? null

Есть ли разница между выражениями? !!( a && b ) и (a && b)? Да, так как первое варажение подтвердит false или true. Второе выражение выведет отрицательное знаниче операнда 

Что выведет этот код: alert( null || 2 && 3 || 4 ); ? 3

a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? false

Что выведет этот код: alert( +"Infinity" ); ? Infinity

Верно ли сравнение: "ёжик" > "яблоко"? Да
Чему равно 0 || "" || 2 || undefined || true || falsе ? 2