# Answers

**Question 1: Reverse String.**

**CODE:**

```javascript
// Input string
const input = "Hello, World!";

// Function to reverse the string with a delay
function reverseStringWithDelay() {
  setTimeout(() => {
    const reversedString = input.split("").reverse().join("");
    console.log("Reversed String:", reversedString);
  }, 2000);
}

// Call the function
reverseStringWithDelay();
```

**OUTPUT:**

```
(2 seconds delay)
Reversed String: !dlroW ,olleH
```

**Question 2: Random Number Generator with Delay and Progress Indication.**

**CODE:**

```javascript
// Function to generate a random number with a delay
function generateRandomNumberWithDelay() {
  let remainingTime = 3;
  const intervalId = setInterval(() => {
    console.log(`Time remaining: ${remainingTime} seconds`);
    remainingTime--;

    if (remainingTime === 0) {
      clearInterval(intervalId);
      const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
      console.log("Random Number:", randomNumber);
    }
  }, 1000);
}

// Call the function
generateRandomNumberWithDelay();
```

**OUTPUT:**

```
Time remaining: 3 seconds
Time remaining: 2 seconds
Time remaining: 1 seconds
Random Number: 10
```

**Question 3: Build a feature for Store's Inventory.**

**CODE:**

```javascript
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

```

**OUTPUT:**

```
Converted Inventory (INR): {
  item1: 800,
  item2: 1600,
  item3: 2400
}
```

**Question 4: Filtering and Capitalizing: Books Published After 2010 with Author Names.**

**CODE:**

```javascript
// List of books with authors and publication years
const books = [
  { title: "Book1", author: "Author1", year: 2005 },
  { title: "Book2", author: "Author2", year: 2015 },
  { title: "Book3", author: "Author3", year: 2008 },
  { title: "Book4", author: "Author4", year: 2012 },
];

// Function to filter and capitalize books published after 2010
function filterAndCapitalizeBooks(books) {
  const filteredBooks = books.filter((book) => book.year > 2010);
  const capitalizedBooks = filteredBooks.map((book) => ({
    title: book.title,
    author: book.author.toUpperCase(),
  }));
  return capitalizedBooks;
}

// Filter and capitalize books
const filteredAndCapitalizedBooks = filterAndCapitalizeBooks(books);
console.log("Filtered and Capitalized Books:", filteredAndCapitalizedBooks);

```

**OUTPUT:**

```
Filtered and Capitalized Books: [
  { title: 'Book2', author: 'AUTHOR2' },
  { title: 'Book4', author: 'AUTHOR4' }
]
```

**Question 5: URL validation.**

**CODE:**

```javascript
// Function to validate URLs using regex
function validateURL(url) {
  const regex = /^(http:\/\/|https:\/\/)[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
  if (regex.test(url)) {
    console.log("Valid URL");
  } else {
    console.log("Invalid URL");
  }
}

// Test cases
validateURL("http://www.example.com"); // Valid URL
validateURL("https://example.co"); // Valid URL
validateURL("ftp://invalid.com"); // Invalid URL
```

**OUTPUT:**

```
Valid URL
Valid URL
Invalid URL
```

**Question 6: LinkedIn Profile URL Validator.**

**CODE:**

```javascript
// Function to validate LinkedIn profile URLs using regex
function validateLinkedInURL(url) {
  const regex =
    /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  if (regex.test(url)) {
    console.log("Valid LinkedIn Profile URL");
  } else {
    console.log("Invalid LinkedIn Profile URL");
  }
}

// Test cases
validateLinkedInURL("https://www.linkedin.com/in/john_doe123"); // Valid LinkedIn Profile URL
validateLinkedInURL("https://www.linkedin.com/in/user-name"); // Valid LinkedIn Profile URL
validateLinkedInURL("https://www.linkedin.com/in/123"); // Invalid LinkedIn Profile URL
validateLinkedInURL("https://www.linkedin.com/invalid"); // Invalid LinkedIn Profile URL

```

**OUTPUT:**

```
Valid LinkedIn Profile URL
Valid LinkedIn Profile URL
Invalid LinkedIn Profile URL
Invalid LinkedIn Profile URL
```
