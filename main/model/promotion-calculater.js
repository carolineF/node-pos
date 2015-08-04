var Promotion = require('./promotion');
var Discount = require('./discount');

function PromotionCalculater(discounts){
  this.discounts = discounts || [];
}

PromotionCalculater.prototype.addDiscount = function(rebate, cartItem) {
  var discount = new Discount(rebate, cartItem);
  this.discounts.push(discount);
};

PromotionCalculater.prototype.getDiscounts = function(cartItems) {

  var barcodes = Promotion.getPromotionBarcodesWithType('BUY_TWO_GET_ONE_FREE');

  this.processPromotion(barcodes, cartItems);

  return this.discounts;
};

PromotionCalculater.prototype.processPromotion = function(barcodes, cartItems) {

  for(var i = 0; i < cartItems.length; i++) {
    var isPromotion = Promotion.isPromotion(barcodes, cartItems[i].item.barcode);

    if(isPromotion) {
      var spread = Math.floor(cartItems[i].count / 3) * cartItems[i].item.price;
      this.addDiscount(spread, cartItems[i].item);
    }
  }
};

module.exports = PromotionCalculater;
