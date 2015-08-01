function Cart(cartItems) {
  this.cartItems = cartItems || [];
}

Cart.prototype.addCartItem = function(addedCartItem) {

  var cartItem = this.findCartItem(addedCartItem.item.barcode);
  if(cartItem){
    cartItem.count += addedCartItem.count;
  }else{
    this.cartItems.push(addedCartItem);
  }
};

Cart.prototype.findCartItem = function(barcode) {
  for(var i = 0; i < this.cartItems.length; i++) {
    var isExist = this.cartItems[i].item.barcode === barcode;
    if(isExist) {
      return this.cartItems[i];
    }
  }
};

Cart.prototype.processPromotion = function(promotionCalculater) {
  return promotionCalculater.getDiscounts(this.cartItems);
};

Cart.prototype.getAmount = function() {
  var amount = 0;
  this.cartItems.forEach(function(cartItem) {
    amount += cartItem.count * cartItem.item.price;
  });

  return amount;
};

module.exports = Cart;
