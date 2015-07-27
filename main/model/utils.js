var moment = require('moment');

function Utils() {

}
Utils.formatPrice = function(price) {
  return price.toFixed(2);
};

Utils.getTime = function(dateString) {
  return moment().format(dateString);
};

module.exports = Utils;
