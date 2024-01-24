const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const muteButton = document.getElementById('mute');
const volumeSlider = document.getElementById('volume');
const speedSlider = document.getElementById('speed');
const songImg = document.getElementById('img');
const audioPlayer = document.getElementById('myAudio');

playButton.addEventListener('click', playAudio);
pauseButton.addEventListener('click', pauseAudio);
stopButton.addEventListener('click', stopAudio);
muteButton.addEventListener('click', toggleMute);
volumeSlider.addEventListener('input', adjustVolume);
speedSlider.addEventListener('input', adjustSpeed);

document.getElementById('sora1').addEventListener('click', () => playSora('036.mp3', 'ali-gaber-yassin.jpg'));
document.getElementById('sora2').addEventListener('click', () => playSora('067.mp3', 'ali-gaber-almolk.jpg'));
document.getElementById('sora3').addEventListener('click', () => playSora('055.mp3', 'ali-gaber-alrahman.jpg'));
document.getElementById('sora4').addEventListener('click', () => playSora('050.mp3', 'ali-gaber-qaff.jpg'));

function playSora(songSrc, imgSrc) {
  audioPlayer.src = songSrc;
  songImg.src = imgSrc;
}

function playAudio() {
  audioPlayer.play();
}

function pauseAudio() {
  audioPlayer.pause();
}

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

function toggleMute() {
  audioPlayer.muted = !audioPlayer.muted;
}

function adjustVolume() {
  const volume = volumeSlider.value / 100;
  audioPlayer.volume = volume;
}

function adjustSpeed() {
  const speed = speedSlider.value / 50;
  audioPlayer.playbackRate = speed;
}
