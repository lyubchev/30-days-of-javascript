const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
// Initialize clock hands with unique props

secHand.style.background = 'red';
secHand.style.transformOrigin = '80%';
secHand.style.marginLeft = '2%';
secHand.style.marginTop = '0%';
secHand.style.width = '60%';
secHand.style.height = '3px';
secHand.style.zIndex = '100';
secHand.style.transform = 'rotate(90deg)';

minHand.style.background = '#4788ef';
minHand.style.transformOrigin = '80%';
minHand.style.marginLeft = '10%';
minHand.style.marginTop = '0%';
minHand.style.transform = 'rotate(90deg)';

hourHand.style.background = '#000';
hourHand.style.transformOrigin = '80%';
hourHand.style.marginLeft = '18%';
hourHand.style.marginTop = '0%';
hourHand.style.width = '40%';
hourHand.style.transform = 'rotate(90deg)';
