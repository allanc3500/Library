function Book(title, author, pages, readOrNot) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot = readOrNot;
}

/*Prototype function*/
Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readOrNot}`;
};

const mainSection = document.querySelector("main");

const myLibrary = [];

let book1 = new Book("1984", "George Orwell", 328, "Read");
let book2 = new Book("The Hobbit", "J.R.R. Tolkien", 310, "Not Read");
let book3 = new Book("Pride and Prejudice", "Jane Austen", 279, "Read");

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBookOnPage(book) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-div');
    
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;
    
    const bookAuthor = document.createElement('h4');
    bookAuthor.textContent = `Author: ${book.author}`;
    
    const bookPages = document.createElement('p');
    bookPages.textContent = `Pages: ${book.pages}`;
    
    const readOrNotDiv = document.createElement('div');
    const bookReadOrNot = document.createElement('input');
    bookReadOrNot.type = 'checkbox';
    bookReadOrNot.checked = book.readOrNot === 'Read';
    
    const label = document.createElement('label');
    label.textContent = 'Read';
    readOrNotDiv.appendChild(bookReadOrNot);
    readOrNotDiv.appendChild(label);
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    
    removeButton.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        bookDiv.remove();
        for(i = 0; i < myLibrary.length; i++){
            console.log(myLibrary[i].title);
        }
    });
    
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(readOrNotDiv);
    bookDiv.appendChild(removeButton);
    mainSection.appendChild(bookDiv);
}

/* For each book call the displayBookOnPage on it*/
function displayAllBooks() {
    myLibrary.forEach(displayBookOnPage);
}

/*Call the function*/
displayAllBooks();

const addBookButton = document.querySelector('.addBook');
const dialog = document.querySelector('#myDialog');
const cancelButton = document.querySelector('.cancelButton');
const submitButton = document.querySelector('.submitButton');

addBookButton.addEventListener('click', () => {
    dialog.showModal();
});

cancelButton.addEventListener('click', () => {
    dialog.close();
});

submitButton.addEventListener('click', () => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked ? "Read" : "Not Read";
    
    if (title && author && pages) {
        const newBook = new Book(title, author, pages, read);
        addBookToLibrary(newBook);
        displayBookOnPage(newBook);
        dialog.close();
    }
});


addBookToLibrary(book1);
displayBookOnPage(book1);
addBookToLibrary(book2);
displayBookOnPage(book2);
addBookToLibrary(book3);
displayBookOnPage(book3);