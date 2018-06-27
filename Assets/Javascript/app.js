$(document).ready(function(){
    
    var userIngredients = [];
    var queryIngredients;

    var ingredients = {
        meats: ["Chicken", "Pork", "Bacon", "Beef", "Lamb", "Steak", "Turkey", "Fish", "Eggs"],
        dairy: ["Milk", "Blue Cheese", "Sour Cream", "Butter", "Cream", "Parmesan", "Cheese"],
        veggies: ["Beans", "Mushrooms", "Lettuce", "Tomatoes", "Greens", "Spinach", "Onions", "Garlic", "Potatoes", "Carrots", "Broccoli", "Cauliflower",
                    "EggPlant", "Squash", "Sweet Potatoes", "Corn", "Cucumber", "Bell Peppers", "Hot Peppers", "Peas", "Cabbage", "Beets", "Avocado"],
        fruit: ["Apples", "Berries", "Oranges", "Limes", "Lemons", "Grapes", "Bananas", "Coconut", "Pineapple", "Peaches", "Pears", "Kiwis", "Mangoes", "Cherries"],
        pasta: ["Spaghetti", "Penne", "Rigotoni", "BowTie", "Macaroni", "Fetuccine", "Angel Hair", "Rotini", "Lasagna", "Shells", "Linguine", "Orzo", "ziti"],  
      
    }

    // when we click one of the flavor buttons run displayIngredients
    // now we need to add a check in displayIngredients to display sweet ingrdients if sweet is pressed, and savory ingredients if savory is pressed

    function displayIngredients() {
        for (var i = 0; i < ingredients.meats.length; i++) {
            var ingredientButton = $("<button>");
            ingredientButton.addClass("ingredient");
            ingredientButton.addClass("btn btn-lg btn-danger");
            ingredientButton.attr("id", ingredients.meats[i]);
            ingredientButton.text(ingredients.meats[i]);
            $("#meatColumn").prepend(ingredientButton);
        }

        for (var i = 0; i < ingredients.dairy.length; i++) {
            var ingredientButton = $("<button>");
            ingredientButton.addClass("ingredient");
            ingredientButton.addClass("btn btn-lg btn-danger");
            ingredientButton.attr("id", ingredients.dairy[i]);
            ingredientButton.text(ingredients.dairy[i]);
            $("#dairyColumn").prepend(ingredientButton);
        }

        for (var i = 0; i < ingredients.veggies.length; i++) {
            var ingredientButton = $("<button>");
            ingredientButton.addClass("ingredient");
            ingredientButton.addClass("btn btn-lg btn-danger");
            ingredientButton.attr("id", ingredients.veggies[i]);
            ingredientButton.text(ingredients.veggies[i]);
            $("#veggieColumn").prepend(ingredientButton);
        }

        for (var i = 0; i < ingredients.fruit.length; i++) {
            var ingredientButton = $("<button>");
            ingredientButton.addClass("ingredient");
            ingredientButton.addClass("btn btn-lg btn-danger");
            ingredientButton.attr("id", ingredients.fruit[i]);
            ingredientButton.text(ingredients.fruit[i]);
            $("#fruitColumn").prepend(ingredientButton);
        }

        for (var i = 0; i < ingredients.pasta.length; i++) {
            var ingredientButton = $("<button>");
            ingredientButton.addClass("ingredient");
            ingredientButton.addClass("btn btn-lg btn-danger");
            ingredientButton.attr("id", ingredients.pasta[i]);
            ingredientButton.text(ingredients.pasta[i]);
            $("#pastaColumn").prepend(ingredientButton);
        }
    }

    function userInput(event) {

        var selectedIngredient = event.target.id;
        var targetButton = $(event.target);
        var indexOfIngredient = userIngredients.indexOf(selectedIngredient);

        if (indexOfIngredient >= 0) {
            userIngredients.splice(indexOfIngredient, 1);
            console.log(userIngredients);
            console.log(selectedIngredient);
            targetButton.removeClass("active");
            return;
        } else {
            userIngredients.push(selectedIngredient);
            console.log(userIngredients);
            console.log(selectedIngredient);
            targetButton.addClass("active");
        }
    }

    var summaryArray = [];

    function getRecipe() {
        summaryArray = [];
        queryIngredients = userIngredients.toString();
        queryIngredients = queryIngredients.replace(/\,/g, "%2C");
        queryIngredients = queryIngredients.replace(/\ /g, "_");
        var ingredientSearchUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=" + queryIngredients + "&limitLicense=false&number=3&ranking=2";

        $.ajax({
            beforeSend: function(request) {
                request.setRequestHeader("X-Mashape-Key", "kDloHrzNNymsh0Q544ArDyN0MZlBp1ry6Kljsn20rs00v3ZUhc");
            },
            dataType: "json",
            url: ingredientSearchUrl,
            method: "GET",
        }).done(function(response){
            $("#recipeRow").empty();

            for (var i = 0; i < response.length; i++) {
                setUpAjaxRequest(
                    response[i], 
                    "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + response[i].id + "/summary"
                );
            }
        });
    }

    function setUpAjaxRequest (item, summarySearchUrl) {
        $.ajax({
            beforeSend: function(request) {
                request.setRequestHeader("X-Mashape-Key", "kDloHrzNNymsh0Q544ArDyN0MZlBp1ry6Kljsn20rs00v3ZUhc");
            },
            dataType: "json",
            url: summarySearchUrl,
            method: "GET",
        }).then(function(response) {
            summaryArray.push(response);
            console.log([...summaryArray]); // create a new array with the elements of summaryArray, spreadOperator
            
            var recipeCard = $("<div>")
                .addClass("card");
            var recipeBody = $("<div>")
                .addClass("card-body")
                .append("<h3 class='card-title'>" + item.title + "</h3> <h4 class='card-title'> Missing Ingredients: " + item.missedIngredientCount + "</h4>")
                .append("<p>" + response.summary + "</p>");
            var recipeImage = $("<img>")
                .attr("src", item.image);
            
            recipeCard.append(recipeImage);
            recipeCard.append(recipeBody);
            
            $("#recipeRow").prepend(recipeCard);
        });
    }
    

    displayIngredients();
    $(document).on("click", "#ingredientSearch", getRecipe);
    $(document).on("click", ".ingredient", userInput);
});