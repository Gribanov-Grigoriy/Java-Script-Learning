'use strict';

const str = "teSt"; 
const arr = [1, 2, 5]; 

// console.log(str[2]);

// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some good fruits";

console.log(fruit.indexOf("q"));                // На (С) какой позиции находится буква/слово

const logg = "Hello world";

console.log(logg.slice(6, 11));                 // Вырезает кусок, начиная с (первая буква, (не включая) последняя буква)
console.log(logg.substring(6, 11));             // То же, что и slice
console.log(logg.substr(6, 11));                // То же, но второй аргумент - длина


const num = 12.2;
console.log(Math.round(num));                  // Округление до ближайшего

const test = "12.2px";
console.log(parseInt(test));                   // Превращает строку в число
console.log(parseFloat(test));                 // Возвращает с точкой


