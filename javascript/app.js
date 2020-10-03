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

  document.querySelector('#colorName').textContent = colors[randomIndex].name;

  // get color descriptions

  document.querySelector('#colorDescription').textContent = colors[randomIndex].motto;


  //change colors randomly

  document.querySelector('body').style.backgroundColor = colors[randomIndex].name;
}

//add colors

function addColor() {
  let userInput = document.querySelector('.colorInput');

  // user input value from string to array
  //input = brown:coffe brown
  //output = ["brown", "coffe brown"]
 const colorData = userInput.value.split(":");

 // from array to object
 const colorObject = {
   name: colorData[0],
   motto: colorData[1],
 }



  if (colors.findIndex(color => color.name === colorObject.name) === -1) {
    //change background color and description to new color
    document.querySelector('body').style.backgroundColor = colorObject.name;
    document.querySelector('#colorName').textContent = colorObject.name;
    document.querySelector('#colorDescription').textContent = colorObject.motto;

    //add new color and description to colors list
    colors.push(colorObject)

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
