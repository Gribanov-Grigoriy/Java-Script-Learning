'use strict';

let num = 20;                          // глобальная переменная

function showFirstMessage(text) {      //функция Название -глагол + то, над чем выполняется действие и (аргументы)
    console.log(text);
    let num = 10;                      // локальная переменная

    console.log(num);
}

showFirstMessage("Hello world");       // Ф-я берет это значение, подставляет в функцию вверху и прогоняет
console.log(num);

function calc(a, b) {
    return (a + b);                    // После Return ничего не выполняется!!!
}

console.log(calc(4, 3));
console.log(calc(5, 3));
console.log(calc(4, 7));

function ret() {
    num = 50;
    return(num);                       // return возвращает значение из локального мира в глобальный
}

const anothernum = ret();
console.log(anothernum);

const logger = function() {            // данную функцию можно вызывать только после объявления
    console.log("Hello");
};

logger();


const calcc = (a, b) => { return a + b }; 

