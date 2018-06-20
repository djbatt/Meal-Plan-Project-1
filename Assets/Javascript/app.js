$(document).ready(function(){

    var ingredients = [{
            ingredient: "eggs",
            savory: true,
            sweet: true
        }, {
            ingredient: "butter",
            savory: true,
            sweet: true
        }, {
            ingredient: "Flour",
            savory: false,
            sweet: true
        }, {
            ingredient: "Honey",
            savory: false,
            sweet: true
        }, {
            ingredient: "Sugar",
            savory: false,
            sweet: true
        }, {
            ingredient: "Baking Soda",
            savory: false,
            sweet: true
        }, {
            ingredient: "Milk",
            savory: false,
            sweet: true
        }, {
            ingredient: "Rice",
            savory: true,
            sweet: false
        }, {
            ingredient: "Pasta",
            savory: true,
            sweet: false
        }, {
            ingredient: "Bread",
            savory: true,
            sweet: true
        }, {
            ingredient: "Tomato",
            savory: true,
            sweet: false
        }, {
            ingredient: "Olive",
            savory: true,
            sweet: false
        }, {
            ingredient: "Beans",
            savory: true,
            sweet: false
        }, {
            ingredient: "Peanuts",
            savory: true,
            sweet: true
        }, {
            ingredient: "Lettuce",
            savory: true,
            sweet: false
        }, {
            ingredient: "Eggplant",
            savory: true,
            sweet: false
        }, {
            ingredient: "Corn",
            savory: true,
            sweet: false
        }, {
            ingredient: "Carrot",
            savory: true,
            sweet: true
        }, {
            ingredient: "Potato",
            savory: true,
            sweet: false
        }, {
            ingredient: "Beef",
            savory: true,
            sweet: false
        }, {
            ingredient: "Peanuts",
            savory: true,
            sweet: false
        }, {
            ingredient: "Peanuts",
            savory: true,
            sweet: false
        }]

    function flavorCheck() {
        
    }

    $(document).on("click", ".ingredient", flavorCheck);

    function displayIngredients() {
        for (var i = 0; i < ingredients.length; i++) {
            var ingBtn = $("<button>");
            ingBtn.addClass("ingredient");
            ingBtn.text(ingredients[i].ingredient);
            $("#ingredientColumn").prepend(ingBtn);
        }
    }

    displayIngredients();
});