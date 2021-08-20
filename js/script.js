"use strict";

const numberOfFilm = +prompt("Сколько фильмов вы уже посмотрели ?","");
console.log(numberOfFilm);

let personalMovieDB = {
    count: numberOfFilm,
    movies: {
        /*nameFilm: '',
        rating: ''*/
    },
    actors: {},
    genres: [],
    privat: false
};


        const a = prompt("Один из последних простомтренных фильмов ?",""),
              b = prompt("На сколько оцените его ?",""),
              c = prompt("Один из последних простомтренных фильмов ?",""),
              d = prompt("На сколько оцените его ?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


//console.log(personalMovieDB[movies]);