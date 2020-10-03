// background colors array

const colors = [
  {
    name: 'red',
    motto: 'Rose Red',
  },
  {
    name: 'blue',
    motto: 'Ocean Blue',
  },
  {
    name: 'gray',
    motto: 'Smoke Gray',
  },
  {
    name: 'green',
    motto: 'Grass Green',
  },
  {
    name: 'purple',
    motto: 'Deep Purple',
  }
];

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
  let userInput = document.querySelector('.colorInput');

  if (colors.indexOf(userInput.value) === -1) {
    //change background color to new color
    document.querySelector('body').style.backgroundColor = userInput.value;

    //add new color to colors list
    colors.push(userInput.value);

    //clear user input value

    userInput.value = '';
    userInput.focus();

    //input cannot be empty
  } else if (userInput.value === '') {
    alert('Pleae add a color');
  } else {
    alert(userInputValue + ' is already exist');
  }
}
