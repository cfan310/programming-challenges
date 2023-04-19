

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

createAccountBtn.addEventListener('click', function() {

    // ensure no refresh
    form.addEventListener('submit', (e) {
        // prevent default 
        e.preventDefault(); 
        // create new object from constructor, the inputs being the form data
        const newData = new LoginInfo(form);
        
    })



}








// create const newData = new LoginInfo(input names/values)
// then push to an array
// then from this array, loop thru and dynamically add new table rows with table data form input forms 

