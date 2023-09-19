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
