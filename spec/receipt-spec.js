var Receipt = require('../main/model/receipt');
var CartItem = require('../main/model/cart-item');
var Item = require('../main/model/item');
var Discount = require('../main/model/discount');
var Cart = require('../main/model/cart');
var moment = require('moment');

describe('Receipt', function() {

  var receipt = new Receipt();
  var cartItems;
  var discounts;

  beforeEach(function() {
    cartItems = [new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 5),
                new CartItem(new Item('ITEM000003', '荔枝', '斤', 15.00), 2)];
    discounts =  [new Discount(3 ,new Item('ITEM000001', '雪碧', '瓶', 3.00))];
  });

  describe('#getItemString()', function() {
    it('return a item String', function() {
      expect(receipt.getItemString(cartItems, discounts)).toEqual(
        '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
      '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n');
    });
  });

  describe('#getPromotionsString()', function() {
    it('return a promotion String', function() {
      expect(receipt.getPromotionsString(cartItems, discounts)).toEqual(
        '名称：雪碧，数量：1瓶\n');
    });
  });

  it('return a finall receipt', function() {
    var cart = new Cart(cartItems);
    expect(receipt.createReceipt(cart, discounts)).toEqual(
      '***<没钱赚商店>收据***\n' +
      '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n' +
      '----------------------\n' +
      '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
      '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
      '----------------------\n' +
      '挥泪赠送商品：\n' +
      '名称：雪碧，数量：1瓶\n' +
      '----------------------\n' +
      '总计：42.00(元)\n' +
      '节省：3.00(元)\n' +
      '**********************');
  });
});
