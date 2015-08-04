var Cart = require('../main/model/cart');
var CartItem = require('../main/model/cart-item');
var Item = require('../main/model/item');
var PromotionCalculater = require('../main/model/promotion-calculater');
var Discount = require('../main/model/discount');

describe('Cart', function() {
  var cartItems;
  var cart;

  beforeEach(function() {
    cartItems = [new CartItem({barcode: 'ITEM000001', name:'雪碧', unit:'瓶',
                                price:3.00}, 5),
                new CartItem({barcode: 'ITEM000003', name: '荔枝', unit: '斤',
                                price: 15.00}, 2),
                new CartItem({barcode: 'ITEM000005', name: '方便面', unit: '袋',
                              price: 4.50}, 3)
                ];

    cart = new Cart(cartItems);
  });

  describe('#addCartItem()',function() {
    it('add a new cartItem to cartItems', function() {
      var cartItem = new CartItem({barcode: 'ITEM000004',
                                  name:'电池', unit: '个', price: 2.00}, 1);
      spyOn(cart, 'findCartItem').and.returnValue(undefined);
      cart.addCartItem(cartItem);
      expect(cart.cartItems.length).toBe(4);
    });

    it("just add a cartItems's count", function() {
      var cartItem = new CartItem({barcode: 'ITEM000001',
                                  name: '雪碧',
                                  unit: '瓶',
                                  price: 3.00}, 1);

      spyOn(cart, 'findCartItem').and.returnValue(cartItems[0]);

      cart.addCartItem(cartItem);
      expect(cart.cartItems[0].count).toBe(6);
    });
  });

  describe('#findCartItem()', function() {
    it('can find a cartItem in cartItems', function() {
      expect(cart.findCartItem('ITEM000001')).toEqual(cartItems[0]);
    });

    it('can not find a cartItem in cartItems', function() {
      expect(cart.findCartItem('ITEM000002')).toBeUndefined();
    });
  });

  describe('#processPromotion()', function() {
    it('no item should be promotion', function() {
      var promotionCalculater = new PromotionCalculater();
      var discounts = [];
      spyOn(promotionCalculater, 'getDiscounts').and.returnValue(discounts);

      expect(cart.processPromotion(promotionCalculater)).toEqual(discounts);
    });

    it('all item should be promotion', function() {
      var promotionCalculater = new PromotionCalculater();
      var discounts = [new Discount(3,cartItems[0].item),
                      new Discount(15,cartItems[1].item),
                      new Discount(4.5,cartItems[2].item)];
      spyOn(promotionCalculater, 'getDiscounts').and.returnValue(discounts);

      expect(cart.processPromotion(promotionCalculater)).toEqual(discounts);
    });
  });

  describe('#getAmount()', function() {

    it('should return a amount', function() {
      expect(cart.getAmount()).toEqual(58.5);
    });
  });
});
