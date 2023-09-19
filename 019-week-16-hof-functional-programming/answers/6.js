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
