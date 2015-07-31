
var Scanner = require('../main/model/scanner');
var Item = require('../main/model/item');
var CartItem = require('../main/model/cart-item');

describe('Scanner', function() {
  describe('#scan()', function() {

    var scanner = new Scanner();

    beforeEach(function() {
      spyOn(Item,'find').and.callFake(function(barcode){
        if(barcode === 'ITEM000001'){
          return new Item('ITEM000001', '雪碧', '瓶', 3.00);
        }
      });

    });

    it('can return a CartItem with the count equals 1', function() {
      var cartItem = new CartItem(Item.find('ITEM000001'), 1);
      expect(scanner.scan('ITEM000001')).toEqual(cartItem);
    });

    it('can return a CartItem with the count greater than 1', function() {
      var cartItem = new CartItem(Item.find('ITEM000001'),2);
      expect(scanner.scan('ITEM000001-2')).toEqual(cartItem);
    });
  });
});
