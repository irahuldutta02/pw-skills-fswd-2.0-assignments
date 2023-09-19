// Function to fetch and log data from an API in the browser console
function fetchDataAndDisplay() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched Data:", data);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

// Example usage
fetchDataAndDisplay();
