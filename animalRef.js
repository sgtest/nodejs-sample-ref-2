var animal = require('nodejs-sample/animal');

exports.MyDog = new animal.Dog('alice', 'Australian Shepherd');
exports.AnotherDog = new animal.Dog('bob', 'Corgi');

console.log(exports.MyDog, exports.AnotherDog);
