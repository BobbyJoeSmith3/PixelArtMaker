// Select color input
// Select size input
let canvasHeight;
let canvasWidth;
let currentColor;
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

function clearCanvas() {
  let numberOfRows = canvas.rows.length;
  while (numberOfRows > 0) {
    canvas.deleteRow(0)
    numberOfRows--;
  }
}

function getColor() {
  currentColor = document.getElementById('colorPicker').value;
  console.log("The current color is: " + currentColor);
}

function colorCell(e) {
  getColor();
  // Only apply color if table cell is clicked, not table or table row
  if (e.target.nodeName === 'TD') {
    e.target.style.backgroundColor = currentColor;
  }
}

function makeGrid() {
  // Restructure canvas everytime new dimensions are submitted
  clearCanvas();
  // Update canvasHeight and canvasWidth variables
  getGridHeight();
  getGridWidth();
  // Log new dimensions to console
  // console.log('height: ' + canvasHeight + ', width: ' + canvasWidth);

  // Create table
  for (let i = 0; i < canvasHeight; i++) {
    let tableRow = document.createElement('tr');
    canvas.append(tableRow);
    for (let j = 0; j < canvasWidth; j++) {
      let tableCell = document.createElement('td');
      tableRow.appendChild(tableCell);
    }
  }
}

canvas.addEventListener('click', colorCell);
