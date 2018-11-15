const currentTime = new Date();
let seconds = currentTime.getSeconds();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();

updateDate = () => {
  const secHand = document.querySelector('.sec-hand');
  const minHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  let secondsDegrees = 0;
  let minutesDegrees = 0;
  let hourDegrees = 0;

  seconds++;
  secondsDegrees += (seconds / 60) * 360 + 90;
  minutes = seconds % 60 == 0 ? minutes + 1 : minutes;
  minutesDegrees += (minutes / 60) * 360 + 90;
  hours = minutes % 60 == 0 ? hours + 1 : hours;
  hourDegrees += (hours / 12) * 360 + 90;

  secHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

};
setInterval(updateDate, 1000);
// initial update
updateDate();
