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
    //newRow.innerHTML = 'row div';
    gridContainer.appendChild(newRow);

    for ( let i = 0; i < 16; i++) {

        let newBox = document.createElement('div'); 
        newBox.setAttribute('class', 'newBox');
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

// activated when button of id "popupBtn" is clicked
function btnPopUp() {
    // sends user a POPUP asking for number of squares per side for the new grid
    alert("How many squares per side are in the grid?");
}