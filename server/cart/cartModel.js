var mongoose = require('mongoose');
// var crypto = require('crypto');

var CartSchema = new mongoose.Schema({
  id: Number,
  name: String,
  brand: String,
  size: String,
  color: String,
  price: Number,
  quantity: Number,
  img: String
});

// var createSha = function (url) {
//   var shasum = crypto.createHash('sha1');
//   shasum.update(url);
//   return shasum.digest('hex').slice(0, 5);
// };

// CartSchema.pre('save', function (next) {
//   next();
// });


module.exports = mongoose.model('Cart', CartSchema);
