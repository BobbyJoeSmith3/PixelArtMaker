// Select color input
// Select size input
let canvasHeight;
let canvasWidth;
const canvas = document.getElementById("pixelCanvas");


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
  for (let i = 0; i < getGridHeight(); i++) {
    let tableRow = document.createElement('tr');
    canvas.append(tableRow);
  }

}
