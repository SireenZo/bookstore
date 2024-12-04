let cart = [];

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.remove('hidden');
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hidden');
    }, 3000);
}

function calculateTotalCartPrice() {
    return cart.reduce((acc, currItem) => acc + (currItem.qty * currItem.price), 0);
}

function updateTotalPrice() {
    const totalCartPrice = calculateTotalCartPrice();   
    document.getElementById('total-price').textContent = `$${totalCartPrice.toFixed(2)}`;
    document.getElementById('final-total').textContent = `$${(totalCartPrice + 10).toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }

    function addToCart(event) {
        const productDiv = event.target.closest('.main-book');
        if (!productDiv) return;

        const productName = document.getElementById('details-title').textContent;
        const productPriceText = document.getElementById('details-price').textContent.replace('$', '');
        const productPrice = parseFloat(productPriceText);
        const qtyInput = document.querySelector('.qty-container input');
        const qty = parseInt(qtyInput.value);
        const productCover = productDiv.querySelector('img').getAttribute('src');

        if (!productName || isNaN(productPrice) || isNaN(qty) || qty < 1) {
            showNotification("Invalid product details or quantity!");
            return;
        }

        const existingProduct = cart.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.qty += qty;
        } else {
            cart.push({
                name: productName,
                price: productPrice,
                qty: qty,
                cover: productCover
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        showNotification(`${productName} has been added to your cart!`);
        updateTotalPrice();
    }

    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', addToCart);
    }

    const viewCartButton = document.getElementById('view-cart');
    if (viewCartButton) {
        viewCartButton.addEventListener('click', function () {
            window.location.href = 'cart.html';
        });
    }
});

function displayCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = "";
    
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty!</p>";
        document.getElementById('final-total').textContent = `$10.00`; 
        return;
    }

    const cartTable = document.createElement('table');
    cartTable.classList.add('cart-table');
    cartTable.innerHTML = `
        <thead>
            <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Actions</th>
            </tr>
        </thead>
    `;

    const tableBody = document.createElement('tbody');

    cart.forEach((item, index) => {
        const totalItemPrice = item.qty * item.price;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${item.cover}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;"></td>
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <div class="qty-container">
                    <button class="decrease-btn" data-index="${index}">-</button>
                    <input type="text" value="${item.qty}" class="qty-input" data-index="${index}">
                    <button class="increase-btn" data-index="${index}">+</button>
                </div>
            </td>
            <td class="total-price" data-index="${index}">$${totalItemPrice.toFixed(2)}</td>
            <td><button class="delete-btn" data-index="${index}"><i class="fas fa-trash"></i></button></td>
        `;
        tableBody.appendChild(row);
    });

    cartTable.appendChild(tableBody);
    cartContainer.appendChild(cartTable);
    
    updateTotalPrice();  
    const decreaseBtns = document.querySelectorAll('.decrease-btn');
    const increaseBtns = document.querySelectorAll('.increase-btn');
    const qtyInputs = document.querySelectorAll('.qty-input');
    const deleteBtns = document.querySelectorAll('.delete-btn');

    decreaseBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => updateQuantity(event, -1));
    });

    increaseBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => updateQuantity(event, 1));
    });

    qtyInputs.forEach((input) => {
        input.addEventListener('change', (event) => updateQuantity(event, 0));
    });

    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => deleteItem(event));
    });

    function updateQuantity(event, change) {
        const index = event.target.dataset.index;
        const item = cart[index];
        const qtyInput = document.querySelectorAll('.qty-input')[index];

        if (change !== 0) {
            item.qty += change;
        } else {
            item.qty = parseInt(qtyInput.value);
        }

        if (item.qty < 1) item.qty = 1;

        qtyInput.value = item.qty;

        const totalItemPrice = item.qty * item.price;
        const totalPriceCell = document.querySelectorAll('.total-price')[index];
        totalPriceCell.textContent = `$${totalItemPrice.toFixed(2)}`;

        localStorage.setItem('cart', JSON.stringify(cart));
        updateTotalPrice();
    }

    function deleteItem(event) {
        const index = event.target.closest('button').dataset.index;  
        cart.splice(index, 1);  
        localStorage.setItem('cart', JSON.stringify(cart)); 
    
        displayCart();  
        updateTotalPrice();  
    }    
}

window.addEventListener('load', displayCart);
