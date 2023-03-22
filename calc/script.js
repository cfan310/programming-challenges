// operand (number) btns by id
let sevenBtn = document.getElementById('btn-7')
let eightBtn = document.getElementById('btn-8')
let nineBtn = document.getElementById('btn-9')
let fourBtn = document.getElementById('btn-4')
let fiveBtn = document.getElementById('btn-5')
let sixBtn = document.getElementById('btn-6')
let oneBtn = document.getElementById('btn-1')
let twoBtn = document.getElementById('btn-2')
let threeBtn = document.getElementById('btn-3')
let zeroBtn = document.getElementById('btn-0')

// operator btns by id
let timesBtn = document.getElementById('btn-times');
let divideBtn = document.getElementById('btn-divide');
let plusBtn = document.getElementById('btn-plus');
let minusBtn = document.getElementById('btn-minus');
let equalBtn = document.getElementById('btn-equal');

// itneger values assigned to operand buttons 
sevenValue = 7;
eightValue = 8;
nineValue = 9;
fouValue = 4;
fiveValue = 5;
sixValue = 6;
oneValue = 1; 
twoValue = 2;
threeValue = 3;
zeroValue = 0;

let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 


// first, let's click 9 and display it somewhere on the page 

nineBtn.addEventListener('click', function displayNine(){
    output.innerHTML = nineValue;
});   


let operand1 = document.getElementById('operand1'); 
let operand2 = document.getElementById('operand2'); 
let operator = document.getElementById('operator'); 
let equalsOutput = document.getElementById('equalsOutput'); 



function addTwoandThree() {
    // display 2 in the "operand1" div
    twoBtn.addEventListener('click', function() {
        operand1.innerHTML = twoValue;
    })
    // display + in the "operator" div
    plusBtn.addEventListener('click', function() {
        operator.innerHTML = "+"; 
    })
    // display 3 in the "operator2" div
    threeBtn.addEventListener('click', function() {
        operand2.innerHTML = threeValue;
    })
    // display = in the "equalsOutput" div, do the math, AND display answer in "output" div
    equalBtn.addEventListener('click', function() {
        equalsOutput.innerHTML = "="; 
        // math is hard coded below
        output.innerHTML = 2 + 3;
        // add dynamic math based on function inputs and tie-in with click events
    })
   
    
}


// find way to ${} inline code and dynamically add inputs to the function as they are clicked on-screen

addTwoandThree();

