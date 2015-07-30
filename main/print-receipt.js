var Scanner = require('./model/scanner.js');
var Cart = require('./model/cart.js');
var Pos = require('./model/pos.js');

function printReceipt(tags) {
  var scanner = new Scanner();
  var cart = new Cart();
  var pos = new Pos(scanner, cart);

  tags.forEach(function(tag) {
    pos.scan(tag);
  });

  var discounts = pos.processDiscount();

  var receipt = pos.createReceipt(discounts);
  console.log(receipt);
 }

module.exports = printReceipt;
