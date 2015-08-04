var Item = require('../main/model/item.js');
var allItem = require('../main/fixtures.js');

describe('Item', function() {
  describe('.find()', function() {
    it('should find a Item', function() {
      spyOn(allItem, 'loadAllItems').and.returnValue([
        new Item('ITEM000001', '雪碧', '瓶', 3.00),
        new Item('ITEM000002', '苹果', '斤', 5.50)
        ]);

        expect(Item.find('ITEM000001')).toEqual(new Item('ITEM000001', '雪碧', '瓶', 3.00));
    });
  });
});
