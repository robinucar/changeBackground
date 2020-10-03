// background colors array

const colors = ["red", "blue", "green", "gray", "purple"];

//reach button

const buttonElement = document.querySelector("#randomColorButton");

//event listeners

buttonElement.addEventListener("click", changeColors);


//change color function

function changeColors() {
  //get colors randomly

  const randomIndex = Math.floor((Math.random() * colors.length));

  //change colors randomly

  document.querySelector("body").style.backgroundColor = colors[randomIndex];
}