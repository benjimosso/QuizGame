var Ulist = document.getElementById('HighScoreTable');
var liE1 = document.createElement('li');

var UserScore = localStorage.getItem('username');
liE1.innerText = UserScore;
Ulist.appendChild(liE1);