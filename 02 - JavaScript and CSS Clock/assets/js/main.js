const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Initialize all clock hands with unique props

secHand.style.background = 'red';
secHand.style.transformOrigin = '80%';
secHand.style.marginLeft = '2.5%';
secHand.style.width = '60%';
secHand.style.transform = 'rotate(90deg)';

minHand.style.background = '#4788ef';
minHand.style.transformOrigin = '80%';
minHand.style.marginLeft = '10%';
minHand.style.transform = 'rotate(45deg)';

hourHand.style.background = '#000';
hourHand.style.transformOrigin = '80%';
hourHand.style.marginLeft = '17.5%';
hourHand.style.width = '40%'
hourHand.style.transform = 'rotate(30deg)';