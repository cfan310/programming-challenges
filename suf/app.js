

let dataBtn = document.getElementById('loginDataBtn');

// test onclick functinoality 

// we need to create an onclick function that, when the
// CREATE ACCOUNT button is clicked, sends the input data 
// including passwords to an organized HTML table on the
// accountinfo.html page. 


/*
    // converts Form Data to JSON with forEach loop
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);  */

// first, let's link the account.html page.

function changeColor() {
    dataBtn.style.background = 'red';
}

// object constructor function for LoginInfo

function LoginInfo(firstName, lastName, email, phoneNumber, password) {
    this.firstName = fname; 
    this.lastName = lname;
    this.email = email;
    this.phoneNumber = phone;
    this.password = password;
}

// ADD loginfo to main page

// now let's create a function that sends the input form data to an OBJECT from the input names and the constructor function

// on Create Account Click
// make sure it does not refresh and instead collect data
// so let's begin with an addEventListener
// create Create Account Button variable 
const createAccountBtn = document.getElementById('createAccountBtn');


const formSubmitBtn = document.getElementById('formSubmitBtn');

/*
formSubmitBtn.addEventListener('click', function() {

    // ensure no refresh
    form.addEventListener('submit', (e) => {
        // prevent default 
        e.preventDefault(); 
        // create new object from constructor, the inputs being the form data
        const newData = new LoginInfo(form);
        console.log(newData);

    })



}); */


// create const newData = new LoginInfo(input names/values)
// then push to an array
// then from this array, loop thru and dynamically add new table rows with table data form input forms 

// example FormData Table 

const form = document.getElementById('contact-form');
form.addEventListener('submit', callbackFunction); 

// we must define the fuinction that will handle the submit event
function callbackFunction(event) {
    // preventDefault to prevent the page from reloading after the submit button is clicked (which is default behavior)
    event.preventDefault();
    // create new object w/o constructor that includes form Data
    let myFormData = new FormData(event.target);   
    console.log(myFormData); 

    // converts formData to JSON with Object.fromEntries 
    let formDataObj2 = Object.fromEntries(myFormData.entries());
    console.log(formDataObj2);     
    // we can use JSON.stringify() to convert object to a JSON string
    // we can then send JSON encoded data to APIs

    // we need the add to table functionality to take place inside this function.

    // array can be created inside the function but as a global variable
    var formArray = []; 
    formArray.push(formDataObj2); 
    console.log(formArray);
    console.log(formArray[0].fullname);


    let messageTable = document.getElementById('messageTable');
    let topRow = document.getElementById('topRow'); 

    // now we have the array and we can loop through and append the data to the
    // table over in accountinfo.html

    for (let i = 0; i <= formArray.length; i++) {

        // create a new table row element
        let newRow = document.createElement('TR');
        // append the newly created row to the topRow 
        messageTable.append(newRow); 
        // create a new table data element for name, email, and message 
        let fullnameData = document.createElement('TD');
        let emailaddyData = document.createElement('TD');
        let messageData = document.createElement('TD');
        // fullnameData = formArray[0].fullname
        fullnameData.innerHTML = `${formArray[i].fullname}`;
        // emailaddyData = formArray[0].emailaddy
        emailaddyData.innerHTML = `${formArray[i].emailaddy}`; 
        // messgaeData = formArray[0].message
        messageData.innerHTML = `${formArray[i].message}`;  

        newRow.append(fullnameData, emailaddyData, messageData);
    }
}


// NEXT STEPS:

// 1. Push the data to both the index.html table AND the accout.html table
// 2. ensure that the data stays displayed on the table even in the event of a page refresh (such as clicking oer to account.html and back)




let objArray = [];

//objArray.push(callbackFunction()); 


function Philosophers(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

const phil1 = new Philosophers('Friedrich', 'Nietzsche'); 
console.log(phil1);  

let philArray = []; 

philArray.push(phil1);
console.log(philArray); 
 






