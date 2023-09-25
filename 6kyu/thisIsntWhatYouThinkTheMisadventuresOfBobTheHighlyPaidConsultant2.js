// 6 kyu This isn't what you think! The Misadventures of Bob the Highly Paid Consultant #2
//
// ##The Misadventures of Bob the Highly Paid Consultant ###Chapter 2: This Isn't what you Think!
//
// You are still working night and day on a caffeine-fueled mission to repair the new ordering system "developed" by Bob the Highly Paid Consultant.
// You've successfully fixed Bob's issues with breaking his Promises and now you turn to the next piece of burning wreckage that Bob called "code".
// Unlike the earlier example, here Bob is using a callback-driven API, where each asynchronous function
// takes as its final parameter a callback, which executes when the asynchronous function completes.
//
// You'd love nothing more than to delete every scrap of Bob's code, delete every repository that ever held
// the code, and donate every electron that ever stored it for use in a particle accelerator, so that you could
// be certain to have purified the Earth of this menace.
// However, you've been up for 46 hours with no sleep and your boss is asking for updates approximately every two and a half minutes.
// You don't have time to re-implement everything, you just need to fix it so you can finally get some sleep.
//
// One thing is clear: this is wrong. this is very, very wrong.
//
// Can you help to fix things?
//
// Some notes:
//
// Bob made the same basic error multiple times. There is more than one way to solve this kind of error.
// For the purposes of this kata, you must use a different technique each time
// to solve the errors - you will be evaluated on not just fixing the errors, but on how many techniques you used to solve them.
//
// Answer:
ShoppingCart.prototype.addButtonClicked = function (item) {
  // Check if there's any of the item available
  this.checkQuantityAsync(item, this.addButtonClicked1.bind(this));
};

ShoppingCart.prototype.addButtonClicked1 = function ({ item, quantity }) {
  // If the item was in stock, add one to our cart
  if (quantity > 0) {
    this.addToCartAsync(item, 1, () => this.addButtonClicked2(true));
  }
};

ShoppingCart.prototype.addButtonClicked2 = function (success) {
  // If it was added to the cart, then refresh the display
  const self = this;
  if (success) {
    this.updateCartDisplayAsync(function (success) {
      self.addButtonClicked3(success);
    });
  }
};

ShoppingCart.prototype.addButtonClicked3 = function (success) {
  // Log the success or failure of our updates
  this.showMessage(
    `${success ? "Successfully" : "Unsuccessfully"} added item to cart`
  );
};
