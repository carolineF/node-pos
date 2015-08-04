var CartItem = require('../main/model/cart-item');
var Item = require('../main/model/item');

describe('CartItem', function() {
  describe('#getSubTotal()', function() {

    it('can return a Amount', function() {
      var cartItem = new CartItem({ barcode:'ITEM000001',
                           name: '雪碧',
                           unit: '瓶',
                           price: 3.00}, 5);
      expect(cartItem.getSubTotal()).toBe(15);
    });
  });
});
