// Other existing JavaScript code
function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');

    // Simple email validation using regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailPattern.test(email)) {
        emailError.style.display = 'block';  // Show error message
        return false;  // Prevent form submission
    }

    emailError.style.display = 'none';  // Hide error message
    alert('Thank you for subscribing!');
    return true;  // Allow form submission
}



let cart = [];

// Adds item to the cart and shows the popup
function addToCart(item) {
    cart.push(item);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    updateCartPopup();
    document.getElementById('cart-popup').style.display = 'flex';
}

// Updates the cart popup with the current items in the cart
function updateCartPopup() {
    const cartList = document.getElementById('cart-items-list');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}

// Displays the items in the cart and shows an alert
function viewCart() {
    updateCartPopup();
    alert('Your cart contains: ' + cart.join(', '));
}

// Processes the order if there are items in the cart
function processOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart before processing.");
    } else {
        alert('Processing your order...');
        sessionStorage.removeItem('cart');
        cart = [];
        document.getElementById('cart-popup').style.display = 'none';
    }
}

// Clears the cart and updates the popup
function clearCart() {
    cart = [];
    sessionStorage.removeItem('cart');
    alert('Your cart has been cleared.');
    document.getElementById('cart-popup').style.display = 'none';
    updateCartPopup();
}

// Closes the cart popup
function closePopup() {
    document.getElementById('cart-popup').style.display = 'none';
}

// Loads the cart from sessionStorage when the page is loaded
window.onload = function() {
    const savedCart = JSON.parse(sessionStorage.getItem('cart'));
    if (savedCart) {
        cart = savedCart;
        updateCartPopup();
    }
};

// JavaScript for form validation and success/error handling
function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Reset messages
    document.getElementById('form-submitted').style.display = 'none';
    document.getElementById('form-error').style.display = 'none';
    document.getElementById('form-success').style.display = 'none';

    // Simple validation
    if (name === "" || email === "" || message === "") {
        document.getElementById('form-error').style.display = 'block'; // Display error message
        return false; 
    }

    // If everything is valid, show success message
    document.getElementById('form-success').style.display = 'block';
    document.getElementById('form-submitted').style.display = 'block';
    return false; 
}

