var mongoose = require('mongoose');
// var crypto = require('crypto');

var CartSchema = new mongoose.Schema({
  productId: Number,
  name: String,
  brand: String,
  size: String,
  color: String,
  quantity: Number
});

// var createSha = function (url) {
//   var shasum = crypto.createHash('sha1');
//   shasum.update(url);
//   return shasum.digest('hex').slice(0, 5);
// };

// CartSchema.pre('save', function (next) {
//   var code = createSha(this.url);
//   this.code = code;
//   next();
// });

module.exports = mongoose.model('Cart', CartSchema);
