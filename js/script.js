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

for (let i = 0; i < 2; i++){
    const a = prompt("Один из последних простомтренных фильмов ?",""),
          b = prompt("На сколько оцените его ?","");
    if (a != null && b!=null && a !='' && b !='' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    }else{
        console.log('error');
        i--;
    }
}
/*
let i = 0;
while(i < 2){
    const a = prompt("Один из последних простомтренных фильмов ?",""),
          b = prompt("На сколько оцените его ?","");
    if (a != null && b!=null && a !='' && b !='' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    }else{
        console.log('error');
        i--;
    }
    i++;
}*/


if (personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
}else if (personalMovieDB.count >= 30){
    console.log("Вы киноман");
}else{
    console.log("Произошла ошибка");
}



//console.log(personalMovieDB[movies]);