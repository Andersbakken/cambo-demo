var img;
var audio = new Audio("Thisisatest4000.wav");
audio.addEventListener("play", onplay);
var playing = false;
var timer;

function start()
{
    img.src = "before.png";
    audio.play();
    playing = true;
}

function onplay()
{
    setTimeout(function() { img.src = "after.png"; }, 4000);
}

function initial()
{
    if (!img)
        img = document.getElementById("image");
    img.src = "praqo.png";
    if (playing) {
        audio.pause();
        audio.currentTime = 0;
        if (timer) {
            clearTimeout(timer);
            timer = undefined;
        }
        playing = false;
    }
}

function next()
{
    if (playing) {
        initial();
    } else {
        start();
    }
}

