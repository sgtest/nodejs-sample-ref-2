var animal2 = require('sourcegraph-nodejs-sample/animal');

exports.MyDog2 = new animal2.Dog('alice2', 'Australian Shepherd2');
exports.AnotherDog2 = new animal2.Dog('bob2', 'Corgi2');

console.log(exports.MyDog2, exports.AnotherDog2);
