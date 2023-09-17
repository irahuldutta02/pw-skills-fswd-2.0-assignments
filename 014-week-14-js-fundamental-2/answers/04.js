const products = [
  { name: "Laptop", price: 120000 },
  { name: "Mobile", price: 70000 },
  { name: "Laptop Bag", price: 20000 },
  { name: "Watch", price: 20000 },
  { name: "Mobile Charger", price: 1500 },
];

let maxProduct = { name: "", price: 0 };
let minProduct = { name: "", price: Number.MAX_VALUE };

for (let product of products) {
  if (product.price > maxProduct.price) {
    maxProduct = product;
  }
  if (product.price < minProduct.price) {
    minProduct = product;
  }
}

console.log(
  `The product with maximum ammount is ${maxProduct.name} which is priced at Rs. ${maxProduct.price}`
);
console.log(
  `The product with minimum ammount is ${minProduct.name} which is priced at Rs. ${minProduct.price}`
);
