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
let myLibrary = [book1, book2, book3];

console.log(myLibrary[1].author);

// bookCover object constructor function
function BookCover(cover) {
    this.cover = cover;
}

// storing 3 covers as objects
const kafkaCover = new BookCover(); 
kafkaCover.src = './book-images/kafka-cover.jpg';
const nietzscheCover = new BookCover();
nietzscheCover.src = './book-images/nietzsche-cover.jpg';
const eganCover = new BookCover();
nietzscheCover.src = './book-images/egan-cover.jpg';

const displayBtn = document.getElementById('displayCoverBtn');

// now that we have these covers, let's create a function to display simply in the browser
// we will store onclick=displayCover in the displayCover html button tag
function displayCover() {
    // if displayCover btn is clicked
    // display kafka cover
    // first let's automatically the image in css and change the hidden in this function
    


}
