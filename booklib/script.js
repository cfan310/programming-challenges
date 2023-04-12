// object constructor function
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

const book1 = new Book('The Castle', 'Franz Kafka', 1924);
const book2 = new Book('Beyond Good and Evil', 'Friedrich Nietzsche', 1884);
const book3 = new Book('Permutation City', 'Greg Egan', 1994);

// we will store book objects in an array
let myLibrary = [];

const displayBtn = document.getElementById('displayCoverBtn');


const kafkaCover = document.getElementById('kafkaImage');
const nietzscheCover = document.getElementById('nietzscheImage');
const eganCover = document.getElementById('eganImage');


// now that we have these covers, let's create a function to display simply in the browser
// we will store onclick=displayCover in the displayCover html button tag
function displayCover() {
    // if displayCover btn is clicked
    // display kafka cover
    // first let's automatically the image in css and change the hidden in this function
    displayBtn.addEventListener('click', function() {
        kafkaCover.style.visibility = 'visible';
        nietzscheCover.style.visibility = 'visible';
        eganCover.style.visibility = 'visible';
        // now let's create a close window button w/ dynamimc DOM manipulation
        let closeWindowBtn = document.createElement('button');
        closeWindowBtn.innerHTML = 'close window';
        document.getElementById('coverHolder').appendChild(closeWindowBtn);
        closeWindowBtn.addEventListener('click', function() {
            kafkaCover.style.visibility = 'hidden';
            nietzscheCover.style.visibility = 'hidden';
            eganCover.style.visibility = 'hidden';
            closeWindowBtn.style.visibility = 'hidden';
        })
    })
}
//displayCover();

// form functionality
// after clicking the submit form button, the title, author, and year inputs will be
// stores as objects. Those objects will then be pushed to the myLibrary array. 

// store form element as a variable
const form = document.querySelector('form'); 

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents the default html behavior from trying to submit the form itself (which involves a page refresh)
    const bookData = new FormData(form); 
    console.log(bookData);
    // creates an object from the key value pairs ( ['bookTitle', 'the castle']) of form submission input data
    const bookObj = Object.fromEntries(bookData);
    console.log(bookObj);
    // outputs {bookTitle: 'the casle', bookAuthor: 'franz kafka', bookYear: '1924'};
    console.log(bookObj.bookTitle); // outputs the castle (or whatever was submitted in the 'title' input)

    // to pass info to server or to pass data onto another page (in which we can display cards)
    const jsonData = JSON.stringify(bookObj); 
    console.log(jsonData); 
    // outputs JSON code: {"bookTitle":"the castle","bookAuthor":"kafka","bookYear":"1924"}

    // let's push this into our myLibrary array, since it's now an object
    myLibrary.push(bookObj);
    console.log(myLibrary);  // should output the form input as an object


    localStorage.setItem('form', jsonData);

    // takes us to new page where we can retireve this data
    //window.location.href = 'confirm.html'




/*
    for (item of bookData) {
        console.log(item);
    }
    // returns
    ['bookTitle', 'the castle']     key: value
    ['bookAuthor', 'franz kafka']   key: value 
    ['bookYear', '1924']            key: value
    */

})

const castleObj = new Map([
    ['foo', 'bar'], 
    ['baz', 42]
  ]);
   
  const obj = Object.fromEntries(castleObj);
  
  console.log(obj);
  // Expected output: Object { foo: "bar", baz: 42 }
  