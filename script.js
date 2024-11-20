function Book(title, author, pages, readOrNot){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot = readOrNot;
    this.info = (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.readOrNot);
}

const mainSection = document.querySelector("main");

const myLibrary = [];


/* Create with new or you'll get: Uncaught TypeError: Cannot read properties of undefined (reading 'author')*/
let book1 = new Book("1984", "George Orwell", 328, "Read");
let book2 = new Book("The Hobbit", "J.R.R. Tolkien", 310, "Not");
let book3 = new Book("Pride and Prejudice", "Jane Austen", 279, "Read");


function addBookToLibrary(book){
    myLibrary.push(book);
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


function displayBookOnPage (){
    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.id = "bookDiv";
        const bookTitle = document.createElement('h3');
        const bookAuthor = document.createElement('h4');
        const bookPages = document.createElement('p');
        const readOrNotDiv = document.createElement('div');
        
        const bookReadOrNot = document.createElement('input');
        bookReadOrNot.type = 'checkbox';
        bookReadOrNot.id = 'checkbox';

        const label = document.createElement('label');
        label.for = 'checkbox;'
        label.textContent = 'Read';

        readOrNotDiv.appendChild(bookReadOrNot);
        readOrNotDiv.appendChild(label);

        const remove = document.createElement('button')
        remove.style.width = "80px";
        remove.style.height = "40px";
        remove.textContent = "Remove";
        remove.style.borderRadius = "8px";
        remove.id = "removeButton";

        bookTitle.textContent = book.title;
        bookAuthor.textContent = "Author: " + book.author;
        bookPages.textContent = "Pages: " + book.pages;

        if(book.readOrNot === 'Read'){
            bookReadOrNot.checked = true;
        }
        else{
            bookReadOrNot.checked = false;
        }

        remove.addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(book), 1);
            const itemDiv = remove.closest("#bookDiv");
            itemDiv.remove();
            alert("Hi");
            for(i = 0; i < myLibrary.length; i++){
                console.log(myLibrary[i].title);
            }
        })

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(readOrNotDiv);
        bookDiv.appendChild(remove);
        mainSection.appendChild(bookDiv);
    })
}


function displayAdditionalBookOnPage(book) {
    const bookDiv = document.createElement('div');
    bookDiv.id = "bookDiv";
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('h4');
    const bookPages = document.createElement('p');
    const readOrNotDiv = document.createElement('div');
    
    const bookReadOrNot = document.createElement('input');
    bookReadOrNot.type = 'checkbox';
    bookReadOrNot.id = 'checkbox';

    const label = document.createElement('label');
    label.for = 'checkbox;'
    label.textContent = 'Read';

    readOrNotDiv.appendChild(bookReadOrNot);
    readOrNotDiv.appendChild(label);

    const remove = document.createElement('button')
    remove.style.width = "80px";
    remove.style.height = "40px";
    remove.textContent = "Remove";
    remove.style.borderRadius = "8px";

    bookTitle.textContent = book.title;
    bookAuthor.textContent = "Author: " + book.author;
    bookPages.textContent = "Pages: " + book.pages;

    if(book.readOrNot === 'Read'){
        bookReadOrNot.checked = true;
    }
    else{
        bookReadOrNot.checked = false;
    }

    remove.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        const itemDiv = remove.closest("#bookDiv");
        itemDiv.remove();
        alert("Hi");
        for(i = 0; i < myLibrary.length; i++){
            console.log(myLibrary[i].title);
        }
    })

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(readOrNotDiv);
    bookDiv.appendChild(remove);
    mainSection.appendChild(bookDiv);

}


displayBookOnPage();


const addBookButton = document.querySelector('.addBook');
const dialog = document.querySelector('#myDialog');


addBookButton.addEventListener("click", () => {
    dialog.showModal();
});


const cancel = document.querySelector('.cancelButton');

cancel.addEventListener("click", () => {
    dialog.close();
});

const submit = document.querySelector('.submitButton');
submit.addEventListener("click", () => {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read');

    if(title.value === "" || author.value === "" || pages.value === ""){

    }
    else{
        let book;
        if(read.checked === true){
            book = new Book(title.value, author.value, pages.value, "Read");
        }
        else{
            book = new Book(title.value, author.value, pages.value, "Not Read");
        }
        
        addBookToLibrary(book);
        displayAdditionalBookOnPage(book);   
    }
});







/*Plan
3. Format Library Better
- Get Remove to work.
    - Remove work but you need to delete it from the array too.  √Done (But spend a few more mins verifying) 1207
4. Look at more optimized solutions.

*/