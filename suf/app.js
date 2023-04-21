

let dataBtn = document.getElementById('loginDataBtn');

// test onclick functinoality 

// we need to create an onclick function that, when the
// CREATE ACCOUNT button is clicked, sends the input data 
// including passwords to an organized HTML table on the
// accountinfo.html page. 

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
    const myFormData = new FormData(event.target);   
    console.log(myFormData); 

    // converts formData to JSON with Object.fromEntries 
    const formDataObj2 = Object.fromEntries(myFormData.entries());
    console.log(formDataObj2);     
    // we can use JSON.stringify() to convert object to a JSON string
    // we can then send JSON encoded data to APIs

    /*
    // converts Form Data to JSON with forEach loop
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);  */
    //return formDataObj2; 

}

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






