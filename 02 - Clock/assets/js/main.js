const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const analogClock = document.querySelector('.analog-clock');
const digitalClock = document.querySelector('.digital-clock');
const switcher = document.querySelector('#switcher');
const clockSwitcher = document.querySelector('#clock-switcher');
const currentTimeDisplay = document.querySelector('#current-time');
const timeDisplay = document.querySelector('#time');
let currentTime = new Date();
let seconds = currentTime.getSeconds();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();
let isAnalog = true;

switcher.addEventListener('click', () => {
  if (isAnalog) {
    analogClock.style.display = 'none';
    currentTimeDisplay.style.display = 'none';
    digitalClock.style.display = 'table';
    digitalClock.classList.add('fade-in');
    clockSwitcher.classList.add('slide-in-bottom');
    switcher.textContent = 'Switch to Analog Clock';
  } else {
    currentTimeDisplay.style.display = 'inherit';
    digitalClock.style.display = 'none';
    analogClock.style.display = 'inherit';
    analogClock.classList.add('fade-in');
    clockSwitcher.classList.remove('slide-in-bottom');
    switcher.textContent = 'Switch to Digital Clock';
  }
  isAnalog = !isAnalog;
});

updateDate = () => {
  currentTime = new Date();
  currentTimeDisplay.textContent = currentTime.toLocaleTimeString();
  timeDisplay.textContent = currentTimeDisplay.textContent;

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hourDegrees = (hours / 12) * 360 + 90;

  secHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  seconds++;
  minutes = seconds % 60 == 0 ? minutes + 1 : minutes;
  hours = minutes % 60 == 0 && seconds % 60 == 0 ? hours + 1 : hours;
};

// initial update
updateDate();

setInterval(updateDate, 1000);
