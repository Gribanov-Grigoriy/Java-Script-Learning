'use strict';

console.log('arr' + ' - object'); // складывает строки
console.log(4 + '5'); //все еще складывает строки
console.log(4 + '5'); //складывает число и строку, преобразованную в число


let incr = 10,
    decr = 10; 

    // постфиксный способ
    incr++; // оператор инкремента, увеличение на 1  
    decr--; // оператор дикремента, уменьшение на 1  

     // префиксный способ
     ++incr; // оператор инкремента, увеличение на 1  
     --decr; // оператор дикремента, уменьшение на 1

    console.log(incr++); // внутри консоли постфиксная форма сначала возвращает значение, а потом увеличивает
    console.log(++decr);
    console.log(incr);

console.log(5%2); // % возвращает остаток от деления

console.log(2*4 == '8'); // двойное равно означает равенство, а не присваивание
console.log(2*4 === '8'); // тройное равно сравнивает форматы записи

const isChecked = true,
      isClose = false;
console.log(isChecked && isClose); // например, если оба действия на странице пользователя верны, то...
console.log(isChecked || isClose);  // например, только одно действие выполнено
console.log(isChecked && !isClose); // ! - это знак отрицания, то же самое != - не равен 
