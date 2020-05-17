'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
//console.log(numberOfFilms); ''

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?',''),
// b = prompt('На сколько вы его оцените?',''),
// c = prompt('Один из последних просмотренных фильмов?',''),
// d = prompt('На сколько вы его оцените?','');

for (let i=1; i<3; i++) {
   const a = prompt('Один из последних просмотренных фильмов?','');
   const b = prompt('На сколько вы его оцените?','');

   if (a !=null && b !=null && a !='' && b !='' && a.length < 50) {    // a и b не равны null (отмене), и так далее. для И используем логическое И - &&
       personalMovieDB.movies[a] = b;
       console.log('done');
   } else {
       console.log('error');
       i--;
   }
}

if(personalMovieDB.count < 10) {
    console.log("Маловато");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Ошибка");
}


console.log(personalMovieDB);
