// initialize library variable
let myLibrary = [];

    //hide the book form
    bookFormBG.setAttribute('style', 'display:none');

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
        addBook.innerText = "show form";
    }

    // create new BOOK object that contains a title, author, #pages, status

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    // make some dummy books

    myLibrary[0] = new Book('Book1', 'Author', 100, true);

    myLibrary[1] = new Book('Book2', 'Author', 100, true);

    myLibrary[2] = new Book('Book3', 'Author', 100, true);

    myLibrary[3] = new Book('Book4', 'Author', 100, false);

    myLibrary[4] = new Book('Book5', 'Author', 100, false);

    
    // displayLibrary function - loops through the myLibrary array and adds a card for each book

    function displayLibrary() {
        container.innerHTML = ``;
        for(i = 0; i < myLibrary.length; i++) {
            if(myLibrary[i] != undefined) {
                const bookCard = document.createElement('div');
                bookCard.setAttribute('id', [i]);
                bookCard.classList.add('book');
                myLibrary[i].read ? bookCard.classList.add('read') : null;
                bookCard.innerHTML = 
                    `${myLibrary[i].author} - ${myLibrary[i].title}<br>
                    ${myLibrary[i].pages} pages.<br>
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
                    console.log(myLibrary);
                    //renumber the array
                });

                bookCard.appendChild(deleteButton);
                bookCard.appendChild(readButton);
                container.appendChild(bookCard);
            }
        }
    }

        displayLibrary();

        addBook.addEventListener('click', showForm);
    