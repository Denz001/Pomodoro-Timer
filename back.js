var circle = document.getElementById('circle');
var timer = document.getElementById('timer');
var little = document.getElementById('little');

const startingMinutes = 25;
let time = startingMinutes * 60;
var fresh;

// function for the main button
circle.addEventListener('click', function() {
    clearInterval(fresh);
    fresh = setInterval(pomodoro,1000);
})

// function for the pause button
little.addEventListener('click', function (){
    clearInterval(fresh);
}
)

// the timer
function pomodoro() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 25 ? '0' + seconds : seconds;
    timer.innerHTML = `${minutes}: ${seconds}`;
    time--;

    if(time<0){
        clearInterval(fresh);
    }
}