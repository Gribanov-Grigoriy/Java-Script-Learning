'use strict';

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

//  const num = 50;

// if (num<49) {
//     console.log('Err');
// } else if (num>100) {
//     console.log('Too Much');
// } else {
//     console.log('Okey');
// }

// (num === 50) ? console.log('Ok!'):  console.log('Error'); // ? и : равны по смыслу "то" и "иначе" - тринарный аргумент
 
const num = 50;

switch (num) {               //оператор для множественного разветвления
    case 49:                 //строгое сравнение
        console.log('Err');  //то, вывести ...
        break;               //оператор для прекращения выполнения, если условие соблюдено
    case 100:
        console.log('Too');
        break;
    case 51:
        console.log('ОК');
        break;
    default:                 //на случай, если никакое условие не подошло
        console.log('Oops');
        break;
}