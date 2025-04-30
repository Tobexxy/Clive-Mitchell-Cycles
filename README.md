<!-- Project Title -->
Citrus-Lime Bicycle Shop Website

<!-- Overview -->
This project is a responsive and interactive e-commerce website for Citrus-Lime, a fictional bicycle and accessories retailer. It provides users with a smooth browsing experience across categories such as Brands, Bikes, Accessories, and Workshop services. The website is designed with Bootstrap 5 and includes dynamic features such as a collapsible navigation bar, interactive dropdown menus with subcategories, an off-canvas shopping cart, and newsletter subscription functionality.

<!-- Key Features -->
### Dropdown Menus
- The navigation bar includes categories such as **Brands**, **Bikes**, **Accessories**, and **Workshop**.
- Clicking on a category dynamically displays its subcategories and items using JavaScript.

### Off-Canvas Shopping Cart: Clickable cart icon opens a side panel with dynamic cart display and checkout option.
- The shopping cart is implemented as an off-canvas panel that slides in from the right.
- Users can add items to the cart, view the total price, and adjust quantities.
- The cart dynamically updates using JavaScript, ensuring real-time feedback.

### Product Page
- Each product has a dedicated page that displays its image, description, price, and options (e.g., size, quantity).
- Users can add items to the cart directly from the product page.
- The "Add to Basket" and "Checkout" buttons are styled and positioned side by side for ease of use.

### Newsletter Subscription: Users can subscribe with email to receive updates.
- A newsletter section allows users to subscribe with their email addresses.
- The subscription form is styled using Bootstrap and includes a "Sign Up" button.

### Footer Layout
- The footer is divided into sections:
  - **Important Links**: Includes links to Delivery, Click & Collect, Klarna FAQ, and Returns.
  - **Customer Support**: Displays contact information and links to Terms & Conditions and Privacy Policy.
  - **Accepted Payments**: Shows logos for supported payment methods (Apple Pay, PayPal, Mastercard, Klarna).
  - **Social Media Icons**: Includes clickable icons for Instagram and Facebook.


<!-- Code Functionalities -->
### **1. JavaScript (Dynamic Content)**
- The `index.js` file handles dynamic content generation for categories and the shopping cart.
- Key functionalities include:
  - **Dynamic Category Display**: Uses the `categories` object to populate the grid with cards for each category.
  - **Cart Management**: Allows users to add items to the cart, update quantities, and calculate the total price.
  - **Event Listeners**: Handles user interactions such as clicking on categories, adding items to the cart, and toggling the navbar.

### **2. CSS (Styling)**
- The `styles.css` file customizes the appearance of the website, including:
  - Styling for the navigation bar, cards, and footer.
  - Custom colors and hover effects for buttons and links.
  - Responsive design adjustments for different screen sizes.

### **3. Bootstrap Integration**
- Bootstrap 5 is used for layout and styling, including:
  - **Grid System**: Ensures a responsive layout for the category grid and footer.
  - **Components**: Implements the navbar, off-canvas cart, buttons, and input groups.
  - **Utility Classes**: Simplifies alignment, spacing, and responsiveness.

### **4. HTML Structure**
- The `index.html` and `product.html` files define the structure of the website.
- Key sections include:
  - **Header**: Contains the navigation bar and cart icon.
  - **Main Content**: Displays categories, products, and dynamic content.
  - **Footer**: Provides links, contact information, and payment options.

<!-- Built With -->
HTML5

CSS3 / Bootstrap 5

JavaScript (Vanilla)

Responsive Web Design principles

## How to Use
1. Clone or download the project folder.
2. Open `index.html` in your browser.
3. Navigate through the menu to explore categories and products.
4. Add items to the cart and view the total price in the off-canvas cart.
5. Test responsiveness by resizing the browser window or using developer tools.