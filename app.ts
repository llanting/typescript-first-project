let clock: HTMLElement = document.querySelector('.clock');

type ConversionTime = number | string;

let hour: ConversionTime;
let min: ConversionTime;
let sec: ConversionTime;

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

  clock.innerText = `${hour.toString()}:${min.toString()}:${sec.toString()}`

  setTimeout(() => {
    currentTime()
  }, 1000)
}

currentTime();