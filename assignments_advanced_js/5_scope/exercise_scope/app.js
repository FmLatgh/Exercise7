// Global variables
var cartItems = [];
var totalPrice = 0;
var discount = 0;
var finalPrice = 0;
var userName = "Guest";
var userLoggedIn = false;
var products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 600 }
];
var paymentMethod = null;
var shippingAddress = null;
var orderConfirmed = false;

// Global functions
function addToCart(productId) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            cartItems.push(products[i]);
            totalPrice += products[i].price;
            break;
        }
    }
}

function applyDiscount(code) {
    if (code === "DISCOUNT10") {
        discount = totalPrice * 0.10;
    } else if (code === "DISCOUNT20") {
        discount = totalPrice * 0.20;
    } else {
        discount = 0;
    }
    finalPrice = totalPrice - discount;
}

function selectPaymentMethod(method) {
    paymentMethod = method;
}

function setShippingAddress(address) {
    shippingAddress = address;
}

function confirmOrder() {
    if (cartItems.length > 0 && paymentMethod && shippingAddress) {
        orderConfirmed = true;
        console.log("Order confirmed for " + userName);
        console.log("Total Price: €" + totalPrice);
        console.log("Discount: €" + discount);
        console.log("Final Price: €" + finalPrice);
    } else {
        console.log("Please complete all steps before confirming the order.");
    }
}

function login(user) {
    userName = user;
    userLoggedIn = true;
}

function logout() {
    userName = "Guest";
    userLoggedIn = false;
}

function displayCartItems() {
    console.log("Cart Items:");
    for (var i = 0; i < cartItems.length; i++) {
        console.log("- " + cartItems[i].name + ": €" + cartItems[i].price);
    }
}

function clearCart() {
    cartItems = [];
    totalPrice = 0;
    discount = 0;
    finalPrice = 0;
}

// Simulate user actions
login("Alice");
addToCart(1);
addToCart(2);
applyDiscount("DISCOUNT10");
selectPaymentMethod("Credit Card");
setShippingAddress("123 Main St, Anytown");
displayCartItems();
confirmOrder();
clearCart();
logout();
