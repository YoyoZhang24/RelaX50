const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
}


const manageAudio = (audio) => {
  const playButton = audio.nextElementSibling;
  const controls = playButton.nextElementSibling;
  const slider = controls.querySelector('input');
  const time = slider.nextElementSibling;

  // playButton
  let isPlaying = false;
  audio.onplaying = function () {
    isPlaying = true;
  };
  audio.onpause = function () {
    isPlaying = false;
  };
  playButton.addEventListener("click", function () {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  })
  $(playButton).click(function () {
    $(playButton).toggleClass("paused");
  });

  //audioSlider

  slider.addEventListener('input', (event) => {
    audio.currentTime = slider.value
    slider.style.setProperty('--seek-before-width', `${event.target.value / event.target.max * 100}%`)
    time.innerHTML = calculateTime(audio.currentTime)
  })

  audio.addEventListener('timeupdate', function () {
    slider.max = audio.duration
    slider.value = Math.floor(audio.currentTime)
    time.innerHTML = calculateTime(audio.currentTime)
  });
}

$(document).ready(function () {
  for (const audio of $('audio')) {
    manageAudio(audio);
  }
  // var links = document.getElementsByTagName("a");
  //   for (var i = 0; i < links.length; i++) {
  //       (function () {
  //           var ln = links[i];
  //           var location = ln.href;
  //           ln.onclick = function () {
  //               chrome.tabs.create({active: true, url: location});
  //           };
  //       });
  //   }
});


// document.addEventListener('DOMContentLoaded', function () {
//     var links = document.querySelector("a");
//     for (var i = 0; i < links.length; i++) {
//         (function () {
//             var ln = links[i];
//             var location = ln.href;
//             ln.onclick = function () {
//                 chrome.tabs.create({active: true, url: location});
//             };
//         });
//     }
// });