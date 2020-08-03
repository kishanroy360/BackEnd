var faker = require("faker");

var name=faker.commerce.productName();
var price=faker.commerce.price();

console.log(name + " - " + price);