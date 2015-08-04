function Discount(rebate, item) {
  this.rebate = rebate;
  this.item = item;
}

Discount.getDiscount = function(discounts) {
  var amount = 0;
  discounts.forEach(function(discount){
    amount += discount.rebate;
  });
  return amount;
};

Discount.find = function(barcode, discounts) {
  for(var i = 0; i < discounts.length; i++) {
    if(discounts[i].item.barcode === barcode) {
      return discounts[i].rebate;
    }
  }
};

module.exports = Discount;
