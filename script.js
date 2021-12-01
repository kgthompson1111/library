// initialize library variable
let myLibrary = [];

    //hide the book form
    bookFormBG.setAttribute('style', 'display:none');

    // set inputs to blank since they seem to load from cache
    bookForm.elements['author'].value = "";
    bookForm.elements['title'].value = "";
    bookForm.elements['pages'].value = "";
    bookForm.elements['hasRead'].checked = false;

    //show and hide form functions for book form
    function showForm() {
        bookFormBG.setAttribute('style', 'display: yes');
        addBook.removeEventListener('click', showForm);
        addBook.addEventListener('click', hideForm);
        addBook.innerText = "hide form";
    }

    function hideForm() {
        bookFormBG.setAttribute('style', 'display: none');
        addBook.removeEventListener('click', hideForm);
        addBook.addEventListener('click', showForm);
        addBook.innerText = "Add a book";
    }

    // create new BOOK object that contains a title, author, #pages, status

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    // dummy books

    myLibrary[0] = new Book('The Book of Chuang Tzu', 'Zhuang Zhou', 352, true);

    myLibrary[1] = new Book('The \"I AM\" Discourses', 'Beloved St. Germaine', 236, true);

    myLibrary[2] = new Book('Unveiled Mysteries', 'Godfre Ray King', 261, false);
    // displayLibrary function - loops through the myLibrary array and adds a card for each book

    function displayLibrary() {
        container.innerHTML = ``;
        for(i = 0; i < myLibrary.length; i++) {
                const bookCard = document.createElement('div');
                bookCard.setAttribute('id', [i]);
                bookCard.classList.add('book');
                myLibrary[i].read ? bookCard.classList.add('read') : null;
                bookCard.innerHTML = 
                    `<div class="bookText">${myLibrary[i].author}: <em>${myLibrary[i].title}</em><br>
                    ${myLibrary[i].pages} pages</div>
                    `;

                // create and append a "read" button that changes the read status
                const readButton = document.createElement('button');
                readButton.setAttribute('class', `readButton`);
                if(myLibrary[i].read) {
                    readButton.innerText = 'READ'
                    readButton.classList.add('read');
                }  else if(!myLibrary[i].read) {
                    readButton.innerText = 'UNREAD';
                }

                readButton.addEventListener('click', (e) => {
                    const i = parseInt(e.target.parentNode.id);
                    if(myLibrary[i].read == true) {
                    // if read and button clicked - set read to false and update
                    myLibrary[i].read = false;
                    readButton.innerText = 'UNREAD';
                    readButton.classList.remove('read');
                    e.target.parentNode.classList.remove('read');
                    //if unread and button clicked - set read to true and update
                    } else if(myLibrary[i].read == false) {
                    myLibrary[i].read = true;
                    readButton.innerText = 'READ';
                    readButton.classList.add('read');
                    e.target.parentNode.classList.add('read');
                    }
                });

                // create and append a delete button

                const deleteButton = document.createElement('button');
                deleteButton.setAttribute('class', `deleteButton`);
                deleteButton.innerText = 'X';

                deleteButton.addEventListener('click', (e) => {
                    const i = parseInt(e.target.parentNode.id);
                    const currentNode = document.getElementById(`${i}`);
                    e.target.parentNode.parentNode.removeChild(currentNode);
                    delete myLibrary[i];
                    //renumber the array
                });

                bookCard.appendChild(deleteButton);
                bookCard.appendChild(readButton);
                container.appendChild(bookCard);
        }
    }

displayLibrary();

addBook.addEventListener('click', showForm);
    
submit.addEventListener('click', () => {

    const pagesInt = parseInt(bookForm.elements['pages'].value);

    // throw an error for erroneous user data

    if(bookForm.elements['author'].value == "") {
        alert("Author must be entered");
        return;
    } else if(bookForm.elements['title'].value == "") {
        alert("Title must be entered");
        return;
    } else if(isNaN(pagesInt)) {
        alert("Book length must be numerical");
        bookForm.elements['pages'].value = "";
        return;
    } else if(pagesInt <= 0) {
        alert("Book length must be greater than 0 pages");
        bookForm.elements['pages'].value = "";
        return;

    } 

    i = myLibrary.length; // new book goes to end of array

    const bookCard = document.createElement('div');
                bookCard.setAttribute('id', [i]);
                bookCard.classList.add('book');

    // create new book in the array
    
    myLibrary[i] = new Book(
        `${bookForm.elements['title'].value}`,
        `${bookForm.elements['author'].value}`,
        parseInt(bookForm.elements['pages'].value),
        bookForm.elements['hasRead'].checked ? true : false);

        console.log(typeof(myLibrary[i].read));
        console.log(myLibrary[i]);
    // display the book on the page

    myLibrary[i].read ? bookCard.classList.add('read') : null;
    bookCard.innerHTML = 
    `<div class="bookText">${myLibrary[i].author}: <em>${myLibrary[i].title}</em><br>
    ${myLibrary[i].pages} pages</div>
    `;
    
    // create and append a "read" button that changes the read status
    const readButton = document.createElement('button');
    readButton.setAttribute('class', `readButton`);
    if(myLibrary[i].read) {
        readButton.innerText = 'READ'
        readButton.classList.add('read');
    }  else if(!myLibrary[i].read) {
        readButton.innerText = 'UNREAD';
    }

    readButton.addEventListener('click', (e) => {
        const i = parseInt(e.target.parentNode.id);
        if(myLibrary[i].read == true) {
        // if read and button clicked - set read to false and update
        myLibrary[i].read = false;
        readButton.innerText = 'UNREAD';
        readButton.classList.remove('read');
        e.target.parentNode.classList.remove('read');
        //if unread and button clicked - set read to true and update
        } else if(myLibrary[i].read == false) {
        myLibrary[i].read = true;
        readButton.innerText = 'READ';
        readButton.classList.add('read');
        e.target.parentNode.classList.add('read');
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', `deleteButton`);
    deleteButton.innerText = 'X';

    deleteButton.addEventListener('click', (e) => {
        const i = parseInt(e.target.parentNode.id);
        const currentNode = document.getElementById(`${i}`);
        e.target.parentNode.parentNode.removeChild(currentNode);
        delete myLibrary[i];
        //renumber the array
    });

    // set the inputs to blank state
    bookForm.elements['author'].value = "";
    bookForm.elements['title'].value = "";
    bookForm.elements['pages'].value = "";
    bookForm.elements['hasRead'].checked = false;

    // append elements to bookshelf

    bookCard.appendChild(deleteButton);
    bookCard.appendChild(readButton);
    container.appendChild(bookCard);
});