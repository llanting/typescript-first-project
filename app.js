var clock = document.querySelector('.clock');
var hour;
var min;
var sec;
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
    clock.innerText = hour.toString() + ":" + min.toString() + ":" + sec.toString();
    setTimeout(function () {
        currentTime();
    }, 1000);
}
currentTime();
