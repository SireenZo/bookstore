function getCurrentPage() {
  return window.location.pathname.split('/').pop();
}

function applyFilters() {
  const page = getCurrentPage();
  if (page === 'books.html') {
      filterBooks();
  } else if (page === 'categories.html') {
      filterCategories();
  } else if (page === 'authors.html') {
      filterAuthors();
  }
}

function showFilter() {
  document.getElementById('filterModal').style.display = 'flex';
}

function closeFilter() {
  document.getElementById('filterModal').style.display = 'none';
}

function filterBooks() {
  const bookName = document.getElementById('bookName').value.toLowerCase().trim();
  const bookCategory = document.getElementById('bookCategory').value.toLowerCase().trim();
  const minRating = parseFloat(document.getElementById('bookRating').value);
  const maxPrice = parseFloat(document.getElementById('bookPrice').value);

  if (!Array.isArray(books) || books.length === 0) {
      console.error("Books data is not available.");
      return;
  }

  const filteredBooks = books.filter(book => {
      const matchesName = bookName ? book.title.toLowerCase().includes(bookName) : true;
      const matchesCategory = bookCategory ? book.category.toLowerCase().includes(bookCategory) : true;
      const matchesRating = minRating
          ? book.rating && parseFloat(book.rating.match(/\d+/)?.[0]) >= minRating
          : true;
      const matchesPrice = maxPrice
          ? book.price && parseFloat(book.price.match(/\d+/)?.[0]) <= maxPrice
          : true;
      return matchesName && matchesCategory && matchesRating && matchesPrice;
  });

  const bookListContainer = document.getElementById('book-list');
  if (filteredBooks.length === 0) {
      bookListContainer.innerHTML = '<p class="no-results">No results found.</p>';
  } else {
      displayBookList(filteredBooks);
  }

  closeFilter();
}

function filterCategories() {
  const bookName = document.getElementById('bookName').value.toLowerCase().trim();
  const bookCategory = document.getElementById('bookCategory').value.toLowerCase().trim();
  const minRating = parseFloat(document.getElementById('bookRating').value);
  const maxPrice = parseFloat(document.getElementById('bookPrice').value);

  if (!Array.isArray(books) || books.length === 0) {
      console.error("Books data is not available.");
      return;
  }

  const filteredBooks = books.filter(book => {
      const matchesName = bookName ? book.title.toLowerCase().includes(bookName) : true;
      const matchesCategory = bookCategory ? book.category.toLowerCase().includes(bookCategory) : true;
      const matchesRating = minRating
          ? book.rating && parseFloat(book.rating.match(/\d+/)?.[0]) >= minRating
          : true;
      const matchesPrice = maxPrice
          ? book.price && parseFloat(book.price.match(/\d+/)?.[0]) <= maxPrice
          : true;
      return matchesName && matchesCategory && matchesRating && matchesPrice;
  });

  const container = document.getElementById('container');
  if (filteredBooks.length === 0) {
      container.innerHTML = '<p class="no-results">No results found.</p>';
  } else {
      displayCategories(filteredBooks);
  }

  closeFilter();
}

function filterAuthors() {
  const authorName = document.getElementById('authorName').value.toLowerCase().trim();
  const authorNationality = document.getElementById('authorNationality').value.toLowerCase().trim();

  const filteredAuthors = authors.filter(author => {
      const matchesName = authorName ? author.name.toLowerCase().includes(authorName) : true;
      const matchesNationality = authorNationality ? author.nationality.toLowerCase().includes(authorNationality) : true;
      return matchesName && matchesNationality;
  });

  const authorListContainer = document.getElementById('author-list');
  if (filteredAuthors.length === 0) {
      authorListContainer.innerHTML = '<p class="no-results">No results found.</p>';
  } else {
      displayAuthorList(filteredAuthors);
  }

  closeFilter();
}
