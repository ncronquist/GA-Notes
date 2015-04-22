var data = require("./products.json")

var allProducts = data["items"];

var productTitles = allProducts.map(function(item) {
  console.log(item.product.title);
  return {name: item.product.title.toUpperCase(),
          price: item.product.inventories[0].price}
})

console.log(productTitles)
