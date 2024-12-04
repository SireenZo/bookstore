const toggleButton = document.querySelector('.toggle-sidebar');
const closeButton = document.querySelector('.close-sidebar');
const nav = document.querySelector('nav');

function adjustButtonsVisibility() {
    if (window.innerWidth >= 768) {
        toggleButton.style.display = 'none';
        closeButton.style.display = 'none';
    } else {
        if (nav.classList.contains('open')) {
            toggleButton.style.display = 'none';
            closeButton.style.display = 'block';
        } else {
            toggleButton.style.display = 'block';
            closeButton.style.display = 'none';
        }
    }
}

toggleButton.addEventListener('click', () => {
    nav.classList.add('open');
    adjustButtonsVisibility();
});

closeButton.addEventListener('click', () => {
    nav.classList.remove('open');
    adjustButtonsVisibility();
});

adjustButtonsVisibility();
window.addEventListener('resize', adjustButtonsVisibility);

document.addEventListener('DOMContentLoaded', () => {
    const qtyContainer = document.querySelector('.qty-container');
    const inputField = qtyContainer.querySelector('input');
    const decrementButton = qtyContainer.querySelector('button:first-child');
    const incrementButton = qtyContainer.querySelector('button:last-child');

    decrementButton.addEventListener('click', () => {
        let currentValue = parseInt(inputField.value);
        if (currentValue > 1) {
            inputField.value = currentValue - 1;
        }
    });

    incrementButton.addEventListener('click', () => {
        let currentValue = parseInt(inputField.value);
        inputField.value = currentValue + 1;
    });

    inputField.addEventListener('input', () => {
        if (isNaN(inputField.value) || parseInt(inputField.value) < 1) {
            inputField.value = 1;
        }
    });

    document.querySelectorAll('.book-item').forEach(book => {
        book.addEventListener('click', () => {
            inputField.value = 1;
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    if (path.includes("/bookstore/pages/books.html")) {
        document.getElementById("all").classList.add("active");
    } else if (path.includes("/bookstore/index.html")) {
        document.getElementById("home").classList.add("active");
    } else if (path.includes("/bookstore/pages/authors.html")) {
        document.getElementById("authors").classList.add("active");
    } else if (path.includes("/bookstore/pages/categories.html")) {
        document.getElementById("categories").classList.add("active");
    } else if (path.includes("/bookstore/pages/cart.html")) {
        document.getElementById("cart").classList.add("active");
    }
});

