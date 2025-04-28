
    // Select the cart badge, cart items list, and total price element
    const cartBadge = document.getElementById('cart-badge');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Initialize cart count and total price
    let cartCount = 0;
    let totalPrice = 0;

    // Add click event listeners to all "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Increment the cart count
            cartCount++;
            cartBadge.textContent = cartCount;

            // Get product details
            const card = event.target.closest('.card');
            const productName = card.querySelector('.card-title').textContent;
            const productPrice = parseFloat(card.querySelector('.card-text').textContent.replace('£', ''));
            const productImage = card.querySelector('img').src;

            // Check if the product already exists in the cart
            const existingCartItem = Array.from(cartItems.children).find(item => 
                item.querySelector('.cart-item-name').textContent === productName
            );

            if (existingCartItem) {
                // Increment the quantity of the existing product
                const quantityElement = existingCartItem.querySelector('.cart-item-quantity');
                const quantity = parseInt(quantityElement.textContent);
                quantityElement.textContent = quantity + 1;

                // Update the total price
                totalPrice += productPrice;
                cartTotal.textContent = totalPrice.toFixed(2);
            } else {
                // Add a new product to the cart
                const cartItem = document.createElement('li');
                cartItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
                cartItem.innerHTML = `
                    <div class="d-flex align-items-center">
                        <img src="${productImage}" alt="${productName}" class="me-3" style="width: 50px; height: 50px; object-fit: cover;">
                        <div>
                            <h6 class="mb-0 cart-item-name">${productName}</h6>
                            <small>£${productPrice.toFixed(2)}</small>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <span class="cart-item-quantity badge bg-danger rounded-pill me-3">1</span>
                        <button class="btn btn-sm btn-danger remove-item">Remove</button>
                    </div>
                `;
                cartItems.appendChild(cartItem);

                // Update the total price
                totalPrice += productPrice;
                cartTotal.textContent = totalPrice.toFixed(2);

                // Add event listener to remove item
                cartItem.querySelector('.remove-item').addEventListener('click', () => {
                    const quantityElement = cartItem.querySelector('.cart-item-quantity');
                    const quantity = parseInt(quantityElement.textContent);

                    if (quantity > 1) {
                        // Decrease the quantity
                        quantityElement.textContent = quantity - 1;
                        totalPrice -= productPrice;
                        cartTotal.textContent = totalPrice.toFixed(2);
                        cartCount--;
                        cartBadge.textContent = cartCount;
                    } else {
                        // Remove the item completely
                        cartItem.remove();
                        totalPrice -= productPrice;
                        cartTotal.textContent = totalPrice.toFixed(2);
                        cartCount--;
                        cartBadge.textContent = cartCount;
                    }
                });
            }
        });
    });




    document.addEventListener('DOMContentLoaded', () => {
        const navLinks = document.querySelectorAll('.nav-link');
        const categoryContent = document.getElementById('category-content');
        const categoryGrid = document.getElementById('category-grid');
        const navbarCollapse = document.getElementById('navbarNavDropdown'); 
    
        const categories = {
            brands: [
                { title: 'Cube', items: ['Cube Axial', 'Cube Attain', 'Cube Editor Hybrid', 'Cassette Tools', 'Cube Nuroad'] },
                { title: 'Specialized', items: ['Turbo Levo 4', 'Turbo Vado SL', 'Diverge E5', 'Turbo Creo 2 Comp E5','Sirrus X 3.0'] },
                { title: 'Brompton', items: ['Brompton Electric C Line', 'Brompton M6L', 'Brompton P Line', 'Brompton Explore'] },
                { title: 'Tern', items: ['Tern GSD', 'Tern Vektron', 'Tern Quick Haul', 'Tern Link', 'Tern Verge'] },
                { title: 'Whyte', items: ['Whyte T-140', 'Whyte E-160', 'Whyte 905', 'Whyte Ridgeway', 'Whyte Friston'] }
            ],
            bikes: [
                { title: 'Mountain Bikes', items: ['Hardtail', 'Full Suspension', 'Downhill', 'Trail'] },
                { title: 'Road Bikes', items: ['Endurance', 'Race', 'Gravel', 'Cyclocross'] },
                { title: 'Electric Bikes', items: ['E-Mountain', 'E-Road', 'E-Hybrid'] }
            ],
            accessories: [
                { title: 'Helmets', items: ['Road Helmets', 'Mountain Helmets', 'Kids Helmets'] },
                { title: 'Lights', items: ['Front Lights', 'Rear Lights', 'Light Sets'] },
                { title: 'Locks', items: ['Cable Locks', 'D-Locks', 'Chain Locks'] }
            ]
        };
    
        let activeCategory = null; // Track the currently active category
    
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = e.target.getAttribute('data-category');
    
                // Toggle visibility if the same category is clicked
                if (activeCategory === category) {
                    categoryContent.style.display = 'none'; 
                    activeCategory = null; 
                    return;
                }
    
                // Update the content if a new category is clicked
                if (categories[category]) {
                    const categoryData = categories[category];
                    categoryGrid.innerHTML = categoryData.map(cat => `
                        <div class="card qqq">
                          <div class="card-body">
                            <h5 class="card-title" >${cat.title}</h5>
                            <hr>
                            <ul class="list-unstyled">
                              ${cat.items.map(item => `<li><a href="#" class="text-decoration-none">${item}</a></li>`).join('')}
                            </ul>
                          </div>
                        </div>
                      `).join('');
                    categoryContent.style.display = 'block'; 
                    activeCategory = category; 
                }
    
                // Close the navbar after clicking a category
                navbarCollapse.classList.remove('show');
            });
        });
    
        // Hide the content when clicking outside of it
        document.addEventListener('click', (e) => {
            if (!categoryContent.contains(e.target) && !e.target.classList.contains('nav-link')) {
                categoryContent.style.display = 'none'; 
                activeCategory = null; 
            }
        });
    });


