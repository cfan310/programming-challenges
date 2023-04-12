// build global array with myArray object constructor 
var myArray = new Array();
// declare our pushToArray function, which is called when we click the Submit button
function pushToArray() {
    // declare 
    var enteredTitle = document.getElementById('enteredTitle').value;
    var expenseItemList = document.getElementById('expenseItemList'); 
    if (!(typeof enteredTitle === 'undefined') && enteredTitle!=null && enteredTitle.trim()!='') {
        // dynamically create a new div under Expenses: and add the same data we've pushed to the array
        myArray.push(enteredTitle);
        // adds to the p div holding our titles, but we need to now create a new one once this is added
        // create new dynamic div under the expenseItemList div
        var dynamicDiv = document.createElement('div');
        dynamicDiv.style.height =  '40px';
        dynamicDiv.style.width = '300px'; 
        dynamicDiv.style.background = 'green'
        dynamicDiv.innerHTML = enteredTitle;

        document.getElementById('expenseItemList').appendChild(dynamicDiv);
    }
    console.log(myArray);
    document.getElementById('enteredTitle').value = '';

}

// store as an Object and THEN push that object to the myLibrary array
// ----take form input and save that data in a javascript object
// pushToArray function