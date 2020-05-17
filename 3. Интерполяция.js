'use strict';

const category = 'toys';

console.log(`https://someurl.com/${category}/5`); //т.о. с помощью косых кавычек можно записывать длинную строку короче

const answers = [];  // задается пустой массив

answers[0] = prompt ('Как ваше имя?', '');
answers[1] = prompt ('Как ваша фамилия?', '');
answers[2] = prompt ('Сколько вам лет?', '');

alert(`Привет, ${answers[0]}, у тебя, ${answers[1]}, прекрасная фамилия`); 
