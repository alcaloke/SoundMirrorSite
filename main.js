let myHeading = document.querySelector('h2');
myHeading.textContent = 'by an electric dragon';
myHeading.onclick = function() {
  alert('you have been electrified!');
}

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
