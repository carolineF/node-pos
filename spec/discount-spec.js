var Discount = require('../main/model/discount');
var Item = require('../main/model/item');

describe('Discount', function() {

  var discounts;

  beforeEach(function() {
    discounts = [new Discount(3 ,new Item('ITEM000001', '雪碧', '瓶', 3.00)),
                new Discount(15 ,new Item('ITEM000003', '荔枝', '斤', 15.00))];
  });

  describe('.getDiscount()', function() {
    it('should return 0', function() {
      expect(Discount.getDiscount([])).toBe(0);
    });

    it('should return a number', function() {
      expect(Discount.getDiscount(discounts)).toBe(18);
    });
  });

  describe('.find()', function() {
    it('should return a number', function() {
      expect(Discount.find('ITEM000003',discounts)).toBe(15);
    });

    it('should return undefined', function() {
      expect(Discount.find('ITEM000002', discounts)).toBe(undefined);
    });
  });
});
