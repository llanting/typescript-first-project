// import fetch from 'node-fetch';
// global.fetch = fetch;
//#region typeSet
var hour;
var min;
var sec;
//#endregion typeSet
window.onload = function () {
    var saveBtn = document.getElementById('saveBtn');
    saveBtn.onclick = onSave;
    var animalBtn = document.getElementById('animalBtn');
    animalBtn.onclick = saveAnimal;
    nameValue = localStorage.getItem('name');
    getImage(localStorage.getItem('animal'));
};
function updateTime(k) {
    return k < 10 ? '0' + k : k;
}
function currentTime() {
    var date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    var clock = document.querySelector('.clock');
    clock.innerText = hour.toString() + ":" + min.toString() + ":" + sec.toString();
    checkTime(hour);
    setTimeout(function () {
        currentTime();
    }, 1000);
}
var animalImg = document.querySelector('#animalImg');
var timeDiv = document.querySelector('.time');
var img = document.querySelector('img');
var greeting = document.createElement('p');
timeDiv.insertBefore(greeting, img);
var nameValue = '';
var animal = 'frog';
function checkTime(time) {
    var timeOfDay = '';
    if (+time < 12) {
        timeOfDay = 'morning';
    }
    else if (+time > 12 && +time < 18) {
        timeOfDay = 'afternoon';
    }
    else {
        timeOfDay = 'night';
    }
    greeting.innerText = (nameValue === '' ? 'Loading...' : "Good " + timeOfDay + ", " + nameValue + "!");
}
function onSave() {
    var nameInput = document.querySelector('.name');
    nameValue = nameInput.value;
    window.localStorage.setItem('name', nameValue);
}
function saveAnimal() {
    var animalInput = document.querySelector('.animal');
    animal = animalInput.value;
    window.localStorage.setItem('animal', animal);
    getImage(animal);
}
function getImage(animalInput) {
    fetch("https://source.unsplash.com/1600x900/?" + animalInput)
        .then(function (response) {
        animalImg.src = "" + response.url;
    });
}
currentTime();
