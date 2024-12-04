const bookListContainer = document.getElementById('book-list');
const bookDetailsContainer = document.getElementById('book-details');
const searchInput = document.getElementById('search-input');

function displayBookList(booksToDisplay) {
  bookListContainer.innerHTML = '';
  booksToDisplay.forEach(book => { 
    const bookItem = document.createElement('div');
    bookItem.className = 'book-item';
    bookItem.setAttribute('onclick', `showBookDetails(${book.id})`);

    bookItem.innerHTML = `
      <img src="${book.cover}" alt="${book.title}">
      <p>${book.title}</p>
    `;
    bookListContainer.appendChild(bookItem);
  });
}

function showBookDetails(bookId) {
  const book = books.find(b => b.id === bookId);
  if (book) {
    document.getElementById('details-title').textContent = book.title;
    document.getElementById('details-image').src = book.cover;
    document.getElementById('details-des').textContent = "by " + book.author + " | Category: " + book.category + " | Tag: " + book.tag + " | " + book.rating;
    document.getElementById('details-price').textContent = book.price;
    document.getElementById('details-isbn').textContent = book.isbn;
    document.getElementById('details-description').textContent = book.description;
    document.getElementById('details-author').textContent = book.author;
    document.getElementById('details-date').textContent = book.date;
    document.getElementById('details-length').textContent = book.length;
    document.getElementById('details-language').textContent = book.language;

    const otherBooksList = document.getElementById('other-books-list');
    otherBooksList.innerHTML = ''; 
    books
      .filter(b => b.id !== bookId)
      .slice(0, 4)
      .forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.setAttribute('onclick', `showBookDetails(${book.id})`);

        bookItem.innerHTML = `
          <img src="${book.cover}" alt="${book.title}">
          <p>${book.title}</p>
        `;
        otherBooksList.appendChild(bookItem);
      });

    bookListContainer.style.display = 'none';
    bookDetailsContainer.style.display = 'block';
  }
}

function showBookList() {
  bookDetailsContainer.style.display = 'none';
  bookListContainer.style.display = 'flex';
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();
  const filteredBooks = query ? searchBooks(query, books) : books;
  displayBookList(filteredBooks);
});

function searchBooks(query, books) {
  return books.filter(book =>
    book.title.toLowerCase().includes(query) || 
    book.author.toLowerCase().includes(query) ||
    book.category.toLowerCase().includes(query)
  );
}

displayBookList(books);
