var musicContainer = document.querySelector(".music-container");
var playBtn = document.querySelector("#play");
var prevBtn = document.querySelector("#prev");
var nexBtn = document.querySelector("#next");
var audio = document.querySelector("#audio");
var progress = document.querySelector(".progress");
var title = document.querySelector("#title");
var progressContainer = document.querySelector(".progress-container");
var cover = document.querySelector("#cover");

var songs = ["High-Rated-Gabru", "Kabhi-Kabhi-Aditi-Zindagi", "Saanson-Ko"];

var songIndex = 2;
var loadSong = (song) => {
  title.innerText = song;
  audio.src = `./song/${title.innerText}.mp3`;
  cover.src = `./images/${title.innerText}.PNG`;
  // console.log(cover.src);
};

loadSong(songs[songIndex]);

var playSong = () => {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
};
var pauseSong = () => {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
};
var prevSong = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
};
var nextSong = () => {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
};
//Event listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  isPlaying ? pauseSong() : playSong();
});

// change song events

prevBtn.addEventListener("click", prevSong);
nexBtn.addEventListener("click", nextSong);
