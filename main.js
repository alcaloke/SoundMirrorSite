// onlclick; ALERT
// let myHeading = document.querySelector('h2');
// myHeading.textContent = 'by an electric dragon';
// myHeading.onclick = function() {
//   alert('you have been electrified!');
// }

// change images
let myImage = document.querySelector('img');
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'assets/color.jpg') {
    myImage.setAttribute('src', 'assets/organ.jpg')
  } else {
    myImage.setAttribute('src', 'assets/color.jpg')
  }
}

// using prompt to enter, store & display data
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter you name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello there, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello there, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

// p5 canvas
function setup(){
  createCanvas(600, 300);
}

let x = 0;

function draw(){
  background('#e6ffff');
  noStroke();
  fill(255, 125, 0);
  ellipse(x, height/2, 50);
  x += 10;

  if (x > width) {
    x = 0;
  }
}
