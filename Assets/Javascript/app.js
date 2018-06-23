$(document).ready(function(){
    
    var userIngredients = [];

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

        for (var i = 0; i < ingredients.fruit.length; i++) {
            var ingBtn = $("<button>");
            ingBtn.addClass("ingredient");
            ingBtn.addClass("btn btn-lg btn-danger");
            ingBtn.attr("id", ingredients.fruit[i]);
            ingBtn.text(ingredients.fruit[i]);
            $("#fruitColumn").prepend(ingBtn);
        }

        for (var i = 0; i < ingredients.pasta.length; i++) {
            var ingBtn = $("<button>");
            ingBtn.addClass("ingredient");
            ingBtn.addClass("btn btn-lg btn-danger");
            ingBtn.attr("id", ingredients.pasta[i]);
            ingBtn.text(ingredients.pasta[i]);
            $("#pastaColumn").prepend(ingBtn);
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