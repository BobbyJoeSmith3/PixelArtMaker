// Select color input
// Select size input
let canvasHeight;
let canvasWidth;

// When size is submitted by the user, call makeGrid()

document.getElementById('submitButton').onclick = makeGrid;

function getGridHeight() {
  canvasHeight = document.getElementById('inputHeight').value;
  return canvasHeight;
}

function getGridWidth() {
  canvasWidth = document.getElementById('inputWidth').value;
  return canvasWidth;
}

function makeGrid() {

// Your code goes here!
  getGridHeight();
  getGridWidth();
  console.log('height: ' + canvasHeight + ', width: ' + canvasWidth);
}
