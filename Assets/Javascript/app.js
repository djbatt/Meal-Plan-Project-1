$(document).ready(function(){
    // functions enables popover
    $('body').popover({
        selector: '[data-toggle=popover]',
        trigger: 'click',
        html: true,
        content: function () {
            return $(this).attr("data-content");
        }
    });
    
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

    function getRecipe() {
        queryIngredients = userIngredients.toString();
        queryIngredients = queryIngredients.replace(/\,/g, "%2C");
        queryIngredients = queryIngredients.replace(/\ /g, "_");
        var ingredientSearchUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=" + queryIngredients + "&limitLicense=false&number=3&ranking=2";
        // potentionalUrls "https://api.edamam.com/search?q=" + ingredients + "&app_id=$026e5f2d&app_key=$f643c47302976108083824e826b3e4d1"
        // "https://api.edamam.com/api/nutrition-details?app_id=$4313d7cd&app_key=$d3af3a7de5ed75e97f19ca4cea1c7d37" 
        
        var 
        var config = {
            beforeSend: function(request) {
                request.setRequestHeader("X-Mashape-Key", "kDloHrzNNymsh0Q544ArDyN0MZlBp1ry6Kljsn20rs00v3ZUhc");
            },
            dataType: "json",
            url: ingredientSearchUrl,
            method: "GET",
        }
        var edamamApi = {
            
        }
        $.ajax(config)
        .done(function(response){
            $("#recipeRow").empty();
            for (var i = 0; i < response.length; i++) {
                var recipeCard = $("<div>");
                var recipeBody = $("<div>");
                var recipeImage = $("<img>");
                var recipePopover = $("<btn>");
                recipeImage.attr("src", response[i].image);
                recipeCard.addClass("card");
                recipeBody.addClass("card-body");
                recipeBody.append("<h3 class='card-title'>" + response[i].title + "</h3> <h4 class='card-title'> Missing Ingredients: " + response[i].missedIngredientCount + "</h4>")
                recipeCard.append(recipeImage);
                recipePopover.attr("data-toggle", "popover");
                recipePopover.attr("data-content", response[i].recipe);
                recipePopover.addClass("btn btn-lg btn-danger");
                recipeBody.append(recipePopover);
                recipeCard.append(recipeBody);
                $("#recipeRow").prepend(recipeCard);
            }
            console.log(response);
        });
        
        function showPopover(){ // button remains hidden
            var unload = [];
        }
    }
    displayIngredients();
    $(document).on("click", "#ingredientSearch", getRecipe);
    
    $(document).on("click", ".ingredient", userInput);
});