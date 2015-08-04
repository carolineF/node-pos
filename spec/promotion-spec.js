var Promotion = require('../main/model/promotion');

describe('Promotion', function() {
  describe('.getPromotionBarcodesWithType()', function() {
    it('can return a group of barcodes', function() {
      var promotions = [new Promotion('BUY_TWO_GET_ONE_FREE', [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
      ])];
      spyOn(Promotion, 'all').and.returnValue(promotions);
      expect(Promotion.getPromotionBarcodesWithType('BUY_TWO_GET_ONE_FREE')).
        toEqual(promotions[0].barcodes);
    });
  });
});
