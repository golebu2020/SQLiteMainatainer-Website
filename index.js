var vid = document.getElementById("myVideo");
var play_icon = document.getElementById("play-video");
var isPaused = true;

function playVid() {
  if (isPaused) {
    vid.play();
    play_icon.src = "images/pause-fill.svg";
    isPaused = false;
  } else {
    vid.pause();
    play_icon.src = "images/play-fill.svg";
    isPaused = true;
  }
}
