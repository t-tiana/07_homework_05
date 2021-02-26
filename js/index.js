'use strict';
// 1. Напишіть функцію, що повертає куб числа.

let task1 = function  (a){
    let result =  a ** 3;
    return alert(`${result}`);
}

const TASK1INPUT = +prompt(`X would be cubed\nEnter the value of X`);

if (TASK1INPUT === 0
    || TASK1INPUT === undefined
    || Number.isNaN(TASK1INPUT)){
    alert('Enter the values properly')
}else{
    task1(TASK1INPUT)
}

// 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

function  task2  (a, b, c){
    let result = (a+b)/c
    return alert(`${result}`);
}

const TASK2INPUTA = +prompt('Let\'s calculate with the formula (a+b)/c\nEnter the value of a');
const TASK2INPUTB = +prompt('(a+b)/c\nEnter the value of b');
const TASK2INPUTC = +prompt('(a+b)/c\nEnter the value of c');

if (TASK2INPUTA === 0
    || TASK2INPUTA === undefined
    || Number.isNaN(TASK2INPUTA)
    || TASK2INPUTB === 0
    || TASK2INPUTB  === undefined
    || Number.isNaN(TASK2INPUTB)
    || TASK2INPUTC === 0
    || TASK2INPUTC === undefined
    || Number.isNaN(TASK2INPUTC)) {
    alert('Enter the values properly');
}else{
    task2(TASK2INPUTA, TASK2INPUTB, TASK2INPUTC)
}

// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).

const TASK3 = (a) =>{

    switch (a){
        case 1 : alert('Monday');
        break
        case 2 : alert('Tuesday');
            break
        case 3 : alert('Wednesday');
            break
        case 4 : alert('Thursday');
            break
        case 5 : alert('Friday');
            break
        case 6 : alert('Saturday');
            break
        case 7 : alert('Sunday');
            break
        default : alert('Enter the number from 1 to 7');
    }
}

const TASK3INPUT = +prompt(`Enter the number of week day and see how it's called`);

if (TASK3INPUT === 0
    || TASK3INPUT === undefined
    || Number.isNaN(TASK3INPUT)){
    alert('Enter the values properly')
}else{
    TASK3(TASK3INPUT)
}

// 4. Реалізуйте функцію знаходження факторіала

const TASK4INPUT = +prompt(`Enter a number to calculate it\`s factorial`);

function factorial(n) {
    if(n === 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}

if (TASK4INPUT === undefined
    || Number.isNaN(TASK4INPUT)){
    alert('Enter the values properly')
}else{
    alert(factorial(TASK4INPUT));
}

// 5. Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

const INPUTHOURS = +prompt('Transform hours, minutes and seconds to seconds\nEnter the value of hours');
const INPUTMINUTES = +prompt('Enter the value of minutes');
const INPUTSECONDS = +prompt('Enter the value of seconds');

if (INPUTHOURS === undefined
    || Number.isNaN(INPUTHOURS)
    || INPUTMINUTES === undefined
    || Number.isNaN(INPUTMINUTES)
    || INPUTSECONDS === undefined
    || Number.isNaN(INPUTSECONDS)) {
    alert('Enter the values properly');
}else{
    processTime(INPUTHOURS, INPUTMINUTES, INPUTSECONDS)
}

function processTime(h, min, sec) {
   let result = (60 * ((60 * h) + min)) + sec;
   return alert(`${result} seconds`);
}

// 6. Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс».
// Якщо кількість годин більша за 23.59.59 - вивести повідомлення 'Більше одного дня'.

const INPUTSEC = +prompt('Transform seconds to hh:mm:sec\nEnter the value of seconds');

if (INPUTSEC === 0
    || INPUTSEC === undefined
    || Number.isNaN(INPUTSEC)) {
    alert('Enter the amount of seconds');
} else if (INPUTSEC > 0) {
    processSec()
}

function processSec() {
        let h = Math.floor(INPUTSEC / 60 / 60);
        let min = Math.floor(INPUTSEC / 60) - h * 60;
        let sec = INPUTSEC % 60;

        if (h > 23) {
            alert('More than one day!');
        } else {
            const HOURSRESULT = h.toString().padStart(2, '0');
            const MINUTESRESULT = min.toString().padStart(2, '0');
            const SECONDSRESULT = sec.toString().padStart(2, '0');
            const RESULT = `${HOURSRESULT} : ${MINUTESRESULT} : ${SECONDSRESULT}`;
            alert(RESULT);
        }
    return false;
}

// 7. 4 відмінності ерров фанкшина від звичайної функції.

// // 1. У стрелок нет своего «собственного» this. Стрелочная функция не может быть методом обьекта.
// //
// // Если мы используем this внутри стрелочной функции, то его значение берётся из внешней обычной функции.
// // В следующем примере функция myMethod() является внешней функцией стрелочной функции callback():
//
// const myObject = {
//     myMethod(items) {
//         console.log(this); // logs myObject
//         const callback = () => {
//             console.log(this); // logs myObject
//         };
//         items.forEach(callback);
//     }
// };
//
// myObject.myMethod([1, 2, 3]);
//
// // Значение внутри функции стрелки callback() равно значению внешней функции myMethod().
// // this разрешается лексически - одна из замечательных особенностей стрелочных функций.
// // При использовании колбэков внутри методов вы уверены, что стрелочная функция не определяет сама по себе this:
// // Таким образом не нужны обходные решения const self = this или callback.bind(this).
// // В отличие от обычной функции, косвенный вызов стрелочной функции с использованием myArrowFunc.call(thisVal)
// // или myArrowFunc.apply(thisVal) не меняет значения this: значение контекста всегда разрешается лексически.

// // // 2. Следствием лексического решения этой проблемы является то, что стрелочную функцию нельзя использовать
// // // в качестве конструктора.

// // const Car = (color) => {
// //     this.color = color;
// // };
// // const redCar = new Car('red'); // TypeError: Car is not a constructor

// // 3. Внутри стрелочной функции не определено специальное ключевое слово arguments (псевдомассив).
// //
// // Опять же (как и в случае с this) объект arguments разрешается лексически:
// // стрелочная функция получает доступ к аргументам из внешней функции.
// // Если мы попробуем получить доступ к аргументам внутри стрелочной функции:
//
// function myRegularFunction() {
//     const myArrowFunction = () => {
//         console.log(arguments);
//     }
//     myArrowFunction('c', 'd');
// }
//
// myRegularFunction('a', 'b'); // logs { 0: 'a', 1: 'b' }

// // // Стрелочная функция myArrowFunction () вызывается с аргументами 'c', 'd'.
// // // Тем не менее, внутри своего тела объект arguments совпадает с аргументами вызова myRegularFunction (): 'a', 'b'.
// // // Если вы хотите получить доступ к прямым аргументам функции стрелки, нужно использовать
// // //...args параметр, который собирает аргументы выполнения стрелочной функции: {0: 'c', 1: 'd'}.
// //
// // function myRegularFunction() {
// //     const myArrowFunction = (...args) => {
// //         console.log(args);
// //     }
// //     myArrowFunction('c', 'd');
// // }
// //
// // myRegularFunction('a', 'b'); // logs ['c', 'd']

// // 4. У стрелочной функции есть возможность неявного возврата (implicit return). У обычной - явный (explicit return)
// // Если стрелочная функция содержит одно выражение, только один return, то фигурные скобки функции могут быть опущены,
// // и тогда это выражение возвращается неявно.
//
// const increment = (num) => num + 1;
// increment(41); // => 42

