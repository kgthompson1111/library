// initialize library variable
let myLibrary = [];


        function Book(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }

        myLibrary[0] = new Book('Book1', 'Author', 100, true);

        myLibrary[1] = new Book('Book2', 'Author', 100, true);

        myLibrary[2] = new Book('Book3', 'Author', 100, true);

        myLibrary[3] = new Book('Book4', 'Author', 100, false);

        myLibrary[4] = new Book('Book5', 'Author', 100, false);

        //loop through myLibrary array and display each book on the page

        function displayLibrary() {
            for(i = 0; i < myLibrary.length; i++) {
                bookCard = document.createElement('div');
                bookCard.classList.add('book');
                
                bookCard.innerText = 
                    `Title: ${myLibrary[i].title}

                    Author: ${myLibrary[i].author}

                    # Pages: ${myLibrary[i].pages} 

                    ${myLibrary[i].read == true ? 'READ' : 'UNREAD'}
                    `;

                const readButton = document.createElement('button');
                readButton.setAttribute('id', 'readButton');
                myLibrary[i].read ? readButton.innerText = 'Mark UNREAD' : readButton.innerText = 'Mark READ';

                const deleteButton = document.createElement('button');
                deleteButton.setAttribute('id', 'deleteButton');
                deleteButton.innerText = 'DELETE';

                bookCard.appendChild(deleteButton);
                bookCard.appendChild(readButton);
                container.appendChild(bookCard);
            }

            deleteButton.forEach(button) {
                deleteButton.addEventListener('click', () => {
                    console.log('click');
                });
            }

        }

        displayLibrary();