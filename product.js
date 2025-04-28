
        document.addEventListener('DOMContentLoaded', () => {
    const productTitle = document.querySelector('h2');
    const productPrice = document.querySelector('h3');
    const productImage = document.querySelector('img');

    // Example product data
    const product = {
        title: 'Cube Agree C:62 SLT Road Race Bike Nebula/White',
        price: '£4999.00',
        image: 'images/logo.png'
    };

    // Update product details
    productTitle.textContent = product.title;
    productPrice.textContent = product.price;
    productImage.src = product.image;
});


document.addEventListener('DOMContentLoaded', () => {
    const productTitle = document.querySelector('h2');
    const productPrice = document.querySelector('h3');
    const productImage = document.querySelector('img');
    const addToBasketButton = document.querySelector('.btn-red');
    const cartBadge = document.getElementById('cart-badge');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const quantityInput = document.getElementById('quantity');

    // Example product data
    const product = {
        title: 'Cube Agree C:62 SLT Road Race Bike Nebula/White',
        price: 4999.00, // 
        image: 'https://www.clivemitchellcycles.co.uk/images/cycle-cube-u-agreec62slt-nebulawhite.jpg?width=480&height=480&format=webp&quality=70&scale=both'
    };

    // Cart object to store items
    const cart = {
        items: [],
        total: 0
    };

    // Function to update the cart badge and total
    function updateCartUI() {
        cartBadge.textContent = cart.items.length;
        cartTotal.textContent = cart.total.toFixed(2);

        // Clear the cart items list
        cartItemsList.innerHTML = '';

        // Add each item to the cart list
        cart.items.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
                <div>
                    <strong>${item.title}</strong> <br>
                    Quantity: ${item.quantity}
                </div>
                <div>
                    <span>£${(item.price * item.quantity).toFixed(2)}</span>
                    <button class="btn btn-sm btn-danger ms-2 decrease-quantity" data-index="${index}">-</button>
                </div>
            `;
            cartItemsList.appendChild(li);
        });

        // Add event listeners to "Decrease Quantity" buttons
        const decreaseButtons = document.querySelectorAll('.decrease-quantity');
        decreaseButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'), 10);
                decreaseQuantity(index);
            });
        });
    }

    // Function to decrease the quantity of an item
    function decreaseQuantity(index) {
        const item = cart.items[index];
        if (item.quantity > 1) {
            item.quantity -= 1;
            cart.total -= item.price;
        } else {
            // Remove the item if quantity is 1
            cart.total -= item.price;
            cart.items.splice(index, 1);
        }

        // Update the cart UI
        updateCartUI();
    }

    // Add to Basket button click event
    addToBasketButton.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value, 10);

        if (quantity <= 0 || isNaN(quantity)) {
            alert('Please enter a valid quantity.');
            return;
        }

        // Check if the product is already in the cart
        const existingItem = cart.items.find(item => item.title === product.title);

        if (existingItem) {
            // Update the quantity of the existing item
            existingItem.quantity += quantity;
        } else {
            // Add the product to the cart
            cart.items.push({
                title: product.title,
                price: product.price,
                quantity: quantity
            });
        }

        // Update the cart total
        cart.total += product.price * quantity;

        // Update the cart UI
        updateCartUI();

        // Show a confirmation message
        alert(`${quantity} x ${product.title} has been added to your basket!`);
    });
});
