var Utils = require('../main/model/utils');
var moment = require('moment');

describe('Utils', function() {
  describe('.formatPrice()', function() {
    it('should return a float', function() {
      expect(Utils.formatPrice(5)).toBe('5.00');
    });
  });

  describe('.getTime()', function() {
    it('should return a current time', function() {
      expect(Utils.getTime('YYYY年MM月DD日 HH:mm:ss')).toBe(moment().format('YYYY年MM月DD日 HH:mm:ss'));
    });
  });
});
