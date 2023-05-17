/*
// container of the 16X16 grid  
const gridContainer = document.getElementById('grid');  

let divRow = document.createElement('div');

let gridBox = document.createElement('div');  

divRow.setAttribute('id', 'divRow');
divRow.setAttribute('style', 'display: flex; flex-direction: row');

//gridContainer.appendChild(divRow);
//divRow.appendChild(gridBox); 
  


// loop through and display 16 in a single row
// then create the 

let gridArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 1; i <= gridArray.length - 1; i++) {

    
    let newSquare = document.createElement('div');
    let squarePositionInRow = gridArray[i]; 
    newSquare.style.background = 'green';
    newSquare.style.height = '50px';
    newSquare.style.width = '50px'; 
    // append 16 to divRow
    divRow.appendChild(newSquare); 

}




// we want to loop thru 10 numbers and append each one as a div (making
// them siblings) to letterContainer

for ( let i = 0; i < 16; i++) {
    
    let newLetter = document.createElement('div');
    newLetter.innerHTML = 'A'; 
    letterContainer.appendChild(newLetter);
    
    
    let newBox = document.createElement('div'); 
    newBox.innerHTML = 'div';
    newBox.setAttribute('style','height: 50px; width: 50px; background-color: purple; border: solid 1px;');
    newRow.appendChild(newBox);  

}



// jquery test

$(document).ready(function() {
    alert("jquery loaded"); 
})
*/

// with nested loop 

const gridContainer = document.getElementById('gridContainer');

for (i = 0; i <= 15; i++) {

    let newRow = document.createElement('div');
    newRow.setAttribute('id', 'newRowRemove');
    //newRow.innerHTML = 'row div';
    gridContainer.appendChild(newRow);

    for ( let i = 0; i < 16; i++) {

        let newBox = document.createElement('div'); 
        newBox.setAttribute('class', 'newBox');
        newBox.setAttribute('id', 'newBoxId');
        /*newBox.innerHTML = 'div';*/
        newBox.setAttribute('style','height: 50px; width: 50px; border: solid 1px;');
        newRow.appendChild(newBox); 
    
    }

}

// for the elements of the newBox class (every individual div in the grid),
// we want to change the color to orange when we :hover over it, AND 
// ensure the boxes stay the changed color so we have a pixelated trail. 

// right now they are all given the:hover class in css. 
// but how can we ensure it stays the color it changes to whe hover is activated? 


// jquery to keep the color at orange forever 
$(document).ready(function() {
    // grabs the individual grid div and creates a function when .hover is activated
    // adds a hover class to each newBox class (each square)
    // .hover in css changes the background (permanently) to orange. 
    $('.newBox').hover(function() {
        $(this).addClass('hover'); 
    })
})

let newRowRemove = document.getElementById('newRowRemove'); 
let newBoxRemove = document.getElementById('newBoxId');

// activated when button of id "popupBtn" is clicked
function createNewGrid() {
    // sends user a POPUP asking for number of squares per side for the new grid
    let squaresPerSide = prompt("How many squares per side for the new grid?");

    // removes original grid boxes (but gridContainer remains and we will append to that)
    newRowRemove.removeChild(newBoxRemove);    

    // now use loop to create a new grid using squaresPerSide as response
    // this must first remove the existing grid (once prompt response is entered)
    // and replace new one
 
    //const gridContainer = document.getElementById('gridContainer');

    let newGridContainer = document.createElement('div'); 
    newGridContainer.setAttribute('id', 'newGridContainer'); 

        for (i = 0; i <= 9; i++) {

            let newRow = document.createElement('div');
            newGridContainer.appendChild(newRow);

            for ( let i = 0; i < 10; i++) {

                let newBox = document.createElement('div'); 
                newBox.setAttribute('class', 'newBox');
                /*newBox.innerHTML = 'div';*/
                newBox.setAttribute('style','height: 50px; width: 50px; border: solid 1px;');
                newRow.appendChild(newBox); 
            
            }

        }

}


// remove child div functionality 

let parentDiv = document.getElementById('parentDiv'); 
let childDiv = document.getElementById('childDiv'); 

function remChild() {

    parentDiv.removeChild(childDiv); 



}



// let's summarize what we have thus far
// we ideally want a blank grid that can automaticlaly adjust  depending on how many ___x____ the user inputs
// thus every square, in a fixed container, re-adjusts automatically

// so let's work backwards and start with a blank square, and try to populate it dynamically with a grid form a user input
// to break it down into something smaller, we will start with a functin that inputs (rom an argument) the amount of squares.


// 1. build a blank grid  

//grid built in css

// 2. how can we auto-fill this square with a grid?
// let's first try to fill it with DOM manipulation, through a function 

// can we do something other than a loop?
// let's just create a 16x16 grid to start, inside of the square, with blank squares and gray lines. 
// from here we an use a function to adjust the values inside the DOM manipulation function
// the key is to AUTOFIT the grid divs insid of the square so they re-adjust based on whichever number is selected for the grid dimensions. 

// here let's use DOM manipulation to fill the grid. 

// make one grid row of 9

// create grid Row div



function createRow() {

    let gridBox = document.createElement('div'); 
    gridBox.innerHTML = 'div'; 

    let mainSquare = document.getElementById('mainSquare'); 

    mainSquare.appendChild(gridBox);

}

createRow();
createRow();                
createRow();                
createRow();
createRow(); 
createRow();
createRow();
createRow();
createRow();

// can we now get 9 across and 9 down to fill the box
// then can we get the sizes of the squares to automatically adjust?
// we should try grabbing css variables

// we will use 9 as an example
function changeGridDimensions(num) {

    // create 9 rows of 9 squares (for a 9 by 9 grid) with an input of nine
    // first we can just run our create row function 9 times



    // when clicked, the style.display.height / width of the individual grid squares will change and fill the square
    // the difficult part will be autofitting the square, although if we have a fixed square, we can
    // change the height and width based purely on the input size 



}