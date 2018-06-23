$(document).ready(function(){
    
    var userIngredients = [];

    var ingredients = {
        meats: ["Chicken", "Pork", "Bacon", "Ground Beef", "Lamb", "Venison", "Turkey", "Fish"],
        dairy: ["Milk", "Powdered Milk", "Condensed Milk", "Butter", "Heavy Cream", "Almond Milk", "Cheese"],
        veggies: ["Mushrooms", "Lettuce", "Tomatoes", "Spinach", "Onions", "Garlic", "Potatoes", "Carrots", "Broccoli", "Egg Plant", "Sweet Potatoes", "Corn", "Cucumber"]  
    }

    // when we click one of the flavor buttons run displayIngredients
    // now we need to add a check in displayIngredients to display sweet ingrdients if sweet is pressed, and savory ingredients if savory is pressed

    function displayIngredients() {
        for (var i = 0; i < ingredients.meats.length; i++) {
            var ingBtn = $("<button>");
            ingBtn.addClass("ingredient");
            ingBtn.addClass("btn btn-lg btn-danger");
            ingBtn.attr("id", ingredients.meats[i]);
            ingBtn.text(ingredients.meats[i]);
            $("#meatColumn").prepend(ingBtn);
        }

        for (var i = 0; i < ingredients.dairy.length; i++) {
            var ingBtn = $("<button>");
            ingBtn.addClass("ingredient");
            ingBtn.addClass("btn btn-lg btn-danger");
            ingBtn.attr("id", ingredients.dairy[i]);
            ingBtn.text(ingredients.dairy[i]);
            $("#dairyColumn").prepend(ingBtn);
        }

        for (var i = 0; i < ingredients.veggies.length; i++) {
            var ingBtn = $("<button>");
            ingBtn.addClass("ingredient");
            ingBtn.addClass("btn btn-lg btn-danger");
            ingBtn.attr("id", ingredients.veggies[i]);
            ingBtn.text(ingredients.veggies[i]);
            $("#veggieColumn").prepend(ingBtn);
        }
    }

    function userInput(event) {

        var selectedIng = event.target.id;
        var targetBtn = $(event.target);
        var indexOfIngredient = userIngredients.indexOf(selectedIng);

        if (indexOfIngredient >= 0) {
            userIngredients.splice(indexOfIngredient, 1);
            console.log(userIngredients);
            console.log(selectedIng);
            targetBtn.removeClass("active");
            return;
        } else {
            userIngredients.push(selectedIng);
            console.log(userIngredients);
            console.log(selectedIng);
            targetBtn.addClass("active");
        }
    }
    var queryUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=" + "beef" + "&limitLicense=false&number=3&ranking=2"

    function getRecipe() {
        var config = {
            beforeSend: function(request) {
                request.setRequestHeader("X-Mashape-Key", "kDloHrzNNymsh0Q544ArDyN0MZlBp1ry6Kljsn20rs00v3ZUhc")
            },
            dataType: "json",
            url: queryUrl,
            method: "GET",
        }
        $.ajax(config)
        .done(function(response){
            console.log(response);
        });
    }


    displayIngredients();
    getRecipe();

    $(document).on("click", ".ingredient", userInput);
});
