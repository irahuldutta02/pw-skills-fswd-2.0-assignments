// Store's inventory with prices in USD
const inventory = {
  item1: 10, // Price in USD
  item2: 20,
  item3: 30,
};

// Conversion rate: 1 USD = 80 INR
const exchangeRate = 80;

// Function to convert prices to INR using map
function convertPricesToINR(inventory) {
  const convertedInventory = {};

  for (const item in inventory) {
    const priceInINR = inventory[item] * exchangeRate;
    convertedInventory[item] = priceInINR;
  }

  return convertedInventory;
}

// Convert prices to INR
const convertedInventory = convertPricesToINR(inventory);
console.log("Converted Inventory (INR):", convertedInventory);
