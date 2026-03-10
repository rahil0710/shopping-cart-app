// test.js
const cart = require('./cart');
const payment = require('./payment');

// Testing cart functionality
console.log("Testing cart functionality...");
cart.addItemToCart('Apple');
cart.addItemToCart('Banana');
cart.showCart();
cart.removeItemFromCart('Apple');
cart.showCart();

// Testing payment functionality
console.log("Testing payment functionality...");
payment.validatePayment('Credit Card');
payment.validatePayment('PayPal');
payment.validatePayment('Bitcoin');