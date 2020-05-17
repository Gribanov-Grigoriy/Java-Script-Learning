'use strict';

// Необходимо задать пользователю 2 вопроса и занести его ответы в переменные

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
//console.log(numberOfFilms); ''

const personalMovieDB = {
    coint: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
b = prompt('На сколько вы его оцените?',''),
c = prompt('Один из последних просмотренных фильмов?',''),
d = prompt('На сколько вы его оцените?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
