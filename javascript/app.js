// background colors array

const colors = ['red', 'blue', 'green', 'gray', 'purple'];

//reach buttons

const buttonElement = document.querySelector('#randomColorButton');

const addColorButton = document.querySelector('#setColorButton');

//event listeners

buttonElement.addEventListener('click', changeColors);

addColorButton.addEventListener('click', addColor);

//change color function

function changeColors() {
  //get colors randomly

  const randomIndex = Math.floor(Math.random() * colors.length);

  // get color colorName

  document.querySelector('#colorName').textContent = colors[randomIndex];

  //change colors randomly

  document.querySelector('body').style.backgroundColor = colors[randomIndex];
}

//add colors

function addColor() {
  const userInputValue = document.querySelector('.colorInput').value;
  document.querySelector('body').style.backgroundColor = userInputValue;
}
