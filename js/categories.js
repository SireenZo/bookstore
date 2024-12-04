const categoriesContainer = document.getElementById('categories-container');
const bookDetailsContainer = document.getElementById('book-details');
const categorySearchInput = document.getElementById('search-input');

function groupBooksByCategory(books) {
  return books.reduce((acc, book) => {
    if (!acc[book.category]) {
      acc[book.category] = [];
    }
    acc[book.category].push(book);
    return acc;
  }, {});
}

function displayCategories(filteredBooks = books) {
  const groupedBooks = groupBooksByCategory(filteredBooks);
  categoriesContainer.innerHTML = '';

  for (const category in groupedBooks) {
    const column = document.createElement("div");
    column.classList.add("category-column");

    const categoryHeader = document.createElement("h2");
    categoryHeader.textContent = category;
    column.appendChild(categoryHeader);

    const button = document.createElement("button");
    button.classList.add("see-btn");
    button.textContent = "See More";
    button.addEventListener('click', () => {
      showCategoryBooks(category);
    });
    column.appendChild(button);

    groupedBooks[category].slice(0, 4).forEach(book => {
      const bookItem = document.createElement("div");
      bookItem.classList.add("book-item");
      bookItem.innerHTML = `
        <img src="${book.cover}" alt="${book.title}">
        <p>${book.title}</p>
      `;
      bookItem.addEventListener('click', () => {
        showBookDetails(book.id);
        showOtherBooks(book.category);
      });
      column.appendChild(bookItem);
    });

    categoriesContainer.appendChild(column);
  }
}

function showCategoryBooks(category) {
  const booksSection = document.getElementById("books-section");
  const booksList = document.getElementById("books-list");
  categoriesContainer.style.display = "none";
  booksList.innerHTML = '';

  const buttonContainer = document.createElement("div");
  buttonContainer.style.textAlign = "left";

  const backButton = document.createElement("button");
  backButton.classList.add("back-btn");
  backButton.textContent = "Back to Categories";
  backButton.addEventListener("click", () => {
    booksSection.style.display = "none";
    categoriesContainer.style.display = "block";
  });

  buttonContainer.appendChild(backButton);
  booksList.appendChild(buttonContainer);

  const categoryBooks = books.filter(book => book.category === category);
  categoryBooks.forEach(book => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");
    bookItem.innerHTML = `
      <img src="${book.cover}" alt="${book.title}">
      <p>${book.title}</p>
    `;
    booksList.appendChild(bookItem);
  });

  booksSection.style.display = "block";
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
    books.filter(b => b.id !== bookId).slice(0, 4).forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.className = 'book-item';
      bookItem.setAttribute('onclick', `showBookDetails(${book.id})`);
      bookItem.innerHTML = `
        <img src="${book.cover}" alt="${book.title}">
        <p>${book.title}</p>
      `;
      otherBooksList.appendChild(bookItem);
    });

    categoriesContainer.style.display = 'none';
    bookDetailsContainer.style.display = 'block';
  }
}

function showCategories() {
  bookDetailsContainer.style.display = 'none';
  categoriesContainer.style.display = 'flex';
}

displayCategories();

categorySearchInput.addEventListener('input', () => {
  const query = categorySearchInput.value.toLowerCase().trim();
  const filteredBooks = books.filter(book =>
    book.category.toLowerCase().includes(query) ||
    book.title.toLowerCase().includes(query)
  );
  displayCategories(filteredBooks);
});
