//тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;
//тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэг тоог энэ хувьсагчид хадгална.
var dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('#score-0').textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector('#current-1').textContent = 0;

document.querySelector(".dice").style.display = 'none';

console.log(dice);