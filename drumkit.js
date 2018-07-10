function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip if it's not a transform
  // 'this' is the key (whatever calls this function)
  this.classList.remove('playing');
}
// can't use arrow function here because then 'this' will become window instead of key

const playSound = e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // this will stop the function instead of returning null 
  audio.currentTime = 0; // sets the playback position to 0 seconds
  audio.play();
  key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);