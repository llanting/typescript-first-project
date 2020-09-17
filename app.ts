// import fetch from 'node-fetch';
// global.fetch = fetch;

type ConversionTime = number | string;

//#region typeSet
let hour: ConversionTime;
let min: ConversionTime;
let sec: ConversionTime;
//#endregion typeSet

window.onload = function() {
  let saveBtn = document.getElementById('saveBtn');
  saveBtn.onclick = onSave;
  let animalBtn = document.getElementById('animalBtn');
  animalBtn.onclick = saveAnimal;
  nameValue = localStorage.getItem('name');
  getImage(localStorage.getItem('animal'));
}

function updateTime(k: number){
  return k < 10 ? '0' + k : k;
}

function currentTime() {
  const date = new Date();
  hour = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

  let clock: HTMLElement = document.querySelector('.clock');
  clock.innerText = `${hour.toString()}:${min.toString()}:${sec.toString()}`

  checkTime(hour);
  setTimeout(() => {
    currentTime()
  }, 1000)
}

let animalImg: HTMLImageElement = document.querySelector('#animalImg');
let timeDiv: HTMLElement = document.querySelector('.time');
let img: HTMLElement = document.querySelector('img');
let greeting = document.createElement('p');
timeDiv.insertBefore(greeting, img);

let nameValue: string = '';
let animal: string = 'frog';

function checkTime(time: ConversionTime) {
  let timeOfDay = '';
  if (+time < 12) {
    timeOfDay = 'morning';
  } else if (+time > 12 && +time < 18) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'night'
  }
  greeting.innerText = (nameValue === '' ? 'Loading...' :  `Good ${timeOfDay}, ${nameValue}!`);
}

function onSave() {
  let nameInput: HTMLInputElement = document.querySelector('.name');
  nameValue = nameInput.value;
  window.localStorage.setItem('name', nameValue);
}

function saveAnimal() {
  let animalInput: HTMLInputElement = document.querySelector('.animal');
  animal = animalInput.value;
  window.localStorage.setItem('animal', animal);
  getImage(animal);
}

function getImage(animalInput: string) {
  fetch(`https://source.unsplash.com/1600x900/?${animalInput}`)
  .then((response)=> {
    animalImg.src = `${response.url}`
  })
}

currentTime();
