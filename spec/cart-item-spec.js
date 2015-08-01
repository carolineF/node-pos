var CartItem = require('../main/model/cart-item');
var Item = require('../main/model/item');

describe('CartItem', function() {
  describe('#getSubTotal()', function() {
    var cartItem;

    beforeEach(function() {
      cartItem = new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 5);
    });

    it('can return a Amount', function() {
      expect(cartItem.getSubTotal()).toBe(15);
    });
  });
});
