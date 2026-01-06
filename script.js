// Cart array and total price
let cart = [];
let total = 0;

// Add item to cart
function addToCart(product, price) {
    cart.push({ product, price });
    total += price;

    alert(`${product} added to cart!\nTotal: $${total.toFixed(2)}`);

    // Save cart to localStorage so it works on all pages
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", total);
}

// Ensure addToCart is globally accessible
window.addToCart = addToCart;

// Optional: show cart items on cart.html or console
function showCart() {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedTotal = localStorage.getItem("total") || 0;

    console.log("Cart Items:", savedCart);
    console.log("Total Amount:", savedTotal);
}

// Clear cart if needed
function clearCart() {
    cart = [];
    total = 0;
    localStorage.removeItem("cart");
    localStorage.removeItem("total");
    alert("Cart cleared!");
}
