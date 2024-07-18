let songIndex = 0;
let songItems = Array.from(document.getElementsByClassName("card"));
let audioElement = new Audio('/songs/1.mp3')

let songs = [
  {songName : "",
    filePath : "./songs/1.mp3"
  },
  {songName : "",
    filePath : "./songs/2.mp3"
  },
  {songName : "",
    filePath : "./songs/3.mp3"
  },
  {songName : "",
    filePath : "./songs/4.mp3"
  },
  {songName : "",
    filePath : "./songs/5.mp3"
  },
  {songName : "",
    filePath : "./songs/6.mp3"
  },
  {songName : "",
    filePath : "./songs/7.mp3"
  }
];

const playSong = () => {
  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime = 0;
  audioElement.play();
};

const initializeSongItems = () => {
  songItems.forEach((element, i) => {
    element
      .getElementsByClassName("play")[0]
      .addEventListener("click", (e) => {
        songIndex = i;
        playSong();
      });
  });
};

initializeSongItems();