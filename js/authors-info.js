const authorListContainer = document.getElementById('author-list');
const authorDetailsContainer = document.getElementById('author-details');

function displayAuthorList(filteredAuthors = authors) {
  authorListContainer.innerHTML = '';

  filteredAuthors.forEach(author => {
    const authorItem = document.createElement('div');
    authorItem.className = 'author-item';
    authorItem.setAttribute('onclick', `showAuthorDetails(${author.id})`);

    authorItem.innerHTML = `
      <img src="${author.image}" alt="${author.name}">
      <p>${author.name}</p>
    `;
    authorListContainer.appendChild(authorItem);
  });
}

function showAuthorDetails(authorId) {
  const author = authors.find(a => a.id === authorId);
  if (author) {
    document.getElementById('details-name').textContent = author.name;
    document.getElementById('details-image').src = author.image;
    document.getElementById('details-bio').textContent = author.bio;
    document.getElementById('details-nationality').textContent = author.nationality;
    document.getElementById('details-birth-date').textContent = author.birthDate;
    const statusLabelCell = document.getElementById('status-label');
    const deathDateCell = document.getElementById('details-death-date');
    if (author.deathDate) {
        statusLabelCell.textContent = "Dead";
        deathDateCell.textContent = author.deathDate;
    } else {
        statusLabelCell.textContent = "Alive";
        deathDateCell.textContent = ""; 
    }
    document.getElementById('details-books-count').textContent = author.books.length;

    const authorBooksList = document.getElementById('author-books-list');
    authorBooksList.innerHTML = '';
    author.books.slice(0, 4).forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.className = 'book-item';

      bookItem.innerHTML = `
        <img src="${book.cover}" alt="${book.title}">
        <p>${book.title}</p>
      `;
      authorBooksList.appendChild(bookItem);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const otherAuthorsList = document.getElementById('other-authors-list');
    otherAuthorsList.innerHTML = '';
    authors
      .filter(a => a.id !== authorId).slice(0,4)
      .forEach(author => {
        const authorItem = document.createElement('div');
        authorItem.className = 'author-item';
        authorItem.setAttribute('onclick', `showAuthorDetails(${author.id})`);

        authorItem.innerHTML = `
          <img src="${author.image}" alt="${author.name}">
          <p>${author.name}</p>
        `;
        otherAuthorsList.appendChild(authorItem);
      });

    authorListContainer.style.display = 'none';
    authorDetailsContainer.style.display = 'block';
  }
}

function showAuthorList() {
  authorDetailsContainer.style.display = 'none';
  authorListContainer.style.display = 'flex';
}

function searchAuthors() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const filteredAuthors = authors.filter(author => 
    author.name.toLowerCase().includes(query)
  );

  displayAuthorList(filteredAuthors);
}

document.addEventListener('DOMContentLoaded', () => {
  displayAuthorList();

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('keyup', searchAuthors);
  }
});
