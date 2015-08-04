var Pos = require('../main/model/pos');
var CartItem = require('../main/model/cart-item');
var Item = require('../main/model/item');

describe('Pos', function() {

  describe('#scan()', function() {
    it('should find a cartItem with the tag and add it to cartItems', function() {
      var pos = new Pos();
      pos.scan('ITEM000001');
      expect(pos.cart.cartItems).toEqual([new CartItem(
          new Item('ITEM000001', '雪碧', '瓶', 3.00),1)]);
    });
  });
});
