// Function to fetch data from an API and handle errors
function fetchDataWithErrorHandler() {
  fetch("https://jsonplaceholder.typicode.com/posts/123456789")
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
fetchDataWithErrorHandler();
