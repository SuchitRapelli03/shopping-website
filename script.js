let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    alert(`${product} added to cart! Total: $${total.toFixed(2)}`);
}

// Optionally, you can implement a function to display cart items here
