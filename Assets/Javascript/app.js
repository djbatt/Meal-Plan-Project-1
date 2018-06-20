$(document).ready(function() {
    $("button").on("click", function() {
        // In this case, the "this" keyword refers to the button that was clicked
        var person = $(this).attr("data-person");
  
        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.edamam.com/search?q=" +
          person + "&api_key=7e7070db";
  
        // Performing our AJAX GET request
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          // After the data comes back from the API
          .then(function(response) {
            // Storing an array of results in the results variable
            var results = response.data;
  
          }
        )});// <----this is a temp fix
});
