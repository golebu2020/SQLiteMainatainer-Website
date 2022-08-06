var vid = document.getElementById("myVideo");
var play_icon = document.getElementById("play-video");
var hamburger = document.getElementById("ham");
var links = document.getElementById("linksm");
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

function revealMenu() {
  links.style.display = "block";
  hamburger.style.display = "none";
}

function closeMenu() {
  links.style.display = "none";
  hamburger.style.display = "block";
}
