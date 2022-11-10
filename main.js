/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 50;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-8';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

let brushBackground = document.querySelector(".current-brush");
let colorsButton = document.querySelectorAll(".palette div");

let greatCanvas = document.querySelector(".canvas");
let millionCanvas = document.querySelectorAll(".canvas div");

let app = document.querySelector(".app");

let isMouseDown = false;


for (let i = 0; i < colorsButton.length; i++) {
  
  colorsButton[i].addEventListener("click", function(){

    brushBackground.classList.replace(`${brushBackground.classList[1]}`,`${colorsButton[i].classList[1]}`);

  })
  
}

console.log(millionCanvas[1].classList[1])

//mousedown checks if user icks and holds
//mouseup checks for when releases and holds

for (let i = 0; i < millionCanvas.length; i++) {

  millionCanvas[i].addEventListener('click', function(){

    isMouseDown = false;

    millionCanvas[i].classList.replace(`${millionCanvas[i].classList[1]}`, `${brushBackground.classList[1]}`)
  })
      
  

  millionCanvas[i].addEventListener('mouseover', function(){

    if (isMouseDown === true){

      millionCanvas[i].classList.replace(`${millionCanvas[i].classList[1]}`, `${brushBackground.classList[1]}`)
    }
      
    })
  
}

app.addEventListener("mousedown", function(){

  if( isMouseDown === false){
    isMouseDown = true;
  }

  
  console.log("Mouse is down " + isMouseDown)
    
  })

app.addEventListener("mouseup", function(){
  isMouseDown = false;
    
  console.log("Mouse is up " + isMouseDown)

})

// if (brushBackground.classList[1] === `color-${i+1}`){

  // brushBackground.classList.replace(`${colorsButton[i].classList[1]}`, `color-${i+1}`);
  
// }

// console.log(millionCanvas);
// console.log(colorsButton);
// console.log(redColor.classList[1]);
// console.log(brushBackground.classList[1]);
// console.log(colorsButton[0].classList[1]);
//colorsButton[i].classList[1];

/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
