"use strict";

alert('Hello'); // выводится сообщение с вариантом "ОК"

const result = confirm('Are you here?'); // выводится сообщение с вариантами "ДА", "НЕТ"
console.log(result);

const answer = prompt('Вам есть 18?', '18'); // выводится сообщение с пользовательским вариантом ответа
console.log(typeof(answer)); 


const answers = [];  // задается пустой массив

answers[0] = prompt ('Как имя?', '');
answers[1] = prompt ('Как ваша фамилия?', '');
answers[2] = prompt ('Сколько вам лет?', '');

console.log(answers); // выводятся пользовательские ответы