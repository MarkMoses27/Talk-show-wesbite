const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

searchButton.addEventListener("click", function () {
  const searchTerm = searchInput.value;
  // Perform search operation with searchTerm
  // For example, redirect to a search results page:
  window.location.href = "/search?q=" + encodeURIComponent(searchTerm);
});
