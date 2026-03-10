// test.js
const cart = require('./Cart.js');
const payment = require('./payment.js');


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