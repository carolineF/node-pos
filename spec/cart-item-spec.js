var CartItem = require('../main/model/cart-item');
var Item = require('../main/model/item');

describe('CartItem', function() {
  describe('#getSubTotal()', function() {
    var cartItem;
    var _cartItem;

    beforeEach(function() {
      cartItem = new CartItem({ barcode:'ITEM000001',
                           name: '雪碧',
                           unit: '瓶',
                           price: 3.00}, 5);
    });

    it('can return a Amount', function() {
      expect(cartItem.getSubTotal()).toBe(15);
    });
  });
});
