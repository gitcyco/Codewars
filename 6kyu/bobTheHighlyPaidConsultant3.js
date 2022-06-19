// 6 kyu Well, that's just (proto)typical! The Misadventures of Bob the Highly Paid Consultant #3
//
// ##The Misadventures of Bob the Highly Paid Consultant ###Chapter 3: Well, That's Just (Proto)typical!
// 
// For the past several days you have been working to repair an ordering system designed by Bob the Highly Paid Consultant. 
// You've successfully fixed Bob's issues with breaking his Promises, you solved this confusion, and you've earned a meager 
// few hours of sleep as the ordering system gasps its way into life.
// 
// The next morning, you arrive to find the situation as panicked as it was the night before. 
// The system is live, and already bug reports are coming in left and right - people are ending up with items in their shopping carts that they didn't put there.
// 
// One thing is clear: Bob is just the prototype of a bad developer.
// 
// You suspect this is a problem somehow with the Cart constructor method on your Node server, but it passes your first set of unit tests.
// 
// Can you help to fix things?

// Answer:
// Constructor function for shopping carts
function Cart(user) {
    this.user = user;
    this.cart = [];
}
  
// Prototype for shopping carts
Cart.prototype = {
    add: function(item) {
        this.cart.push(item);
    },

    remove: function(item) {
        this.cart = this.cart.filter(i => i.id !== item.id);
    },

    clear: function() {
        this.cart = [];
    },

    subtotal: function() {
        return this.cart.reduce( (sum, item) => sum + item.quantity * item.value, 0);
    },

    toString: function() {
        return this.cart.map( item => `${item.name}: ${item.quantity}@ ${item.value} ea.`).join("\n");  
    }
};