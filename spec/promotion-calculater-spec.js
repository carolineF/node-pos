var CartItem = require('../main/model/cart-item');
var PromotionCalculater = require('../main/model/promotion-calculater');
var Discount = require('../main/model/discount');
var Promotion = require('../main/model/promotion');

describe('PromotionCalculater', function() {
  var promotionCalculater;
  var cartItems;

  beforeEach(function() {
    promotionCalculater = new PromotionCalculater();
    cartItems = [new CartItem({barcode: 'ITEM000001', name:'雪碧', unit:'瓶',
                                price:3.00}, 5),
                new CartItem({barcode: 'ITEM000003', name: '荔枝', unit: '斤',
                                price: 15.00}, 2)
                ];
  });

  describe('#processPromotion()', function() {
    it('all item should be add to discounts', function() {
      spyOn(Promotion, 'isPromotion').and.returnValue(true);
      promotionCalculater.processPromotion(['ITEM000001','ITEM000002'],cartItems);
      expect(promotionCalculater.discounts.length).toBe(2);
    });

    it('no item should be add to discounts', function() {
      spyOn(Promotion, 'isPromotion').and.returnValue(false);
      promotionCalculater.processPromotion(['ITEM000001','ITEM000002'],cartItems);
      expect(promotionCalculater.discounts.length).toBe(0);
    });
  });

  it('can return a discounts with cartItems', function() {
    expect(promotionCalculater.getDiscounts(cartItems)).toEqual([new Discount(3,
            {barcode: 'ITEM000001', name:'雪碧', unit:'瓶', price:3.00})]);
  });
});
