document.addEventListener("DOMContentLoaded", function () {
  // Function to load writing content
  function loadWriting(url) {
    fetch(url)
      .then(response => response.text())
      .then(content => {
        document.getElementById('content').innerHTML = content;
      })
      .catch(error => console.error('Error loading writing:', error));
  }

  // Load default writing on page load
  loadWriting('writings/writing1.html');

  // Optionally, you can add navigation to switch between writings
  // For example, you could have links that call loadWriting with different file URLs.
});
