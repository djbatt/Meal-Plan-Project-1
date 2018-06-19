$(document).ready(function(){
    // user inputs ingredients in their household, out of a list of buttons
    // ask if sweet or savory // desserts or main meals
    // depending on sweet or savory, and ingredients listed display recipes
    // also display meal plan, cooking tips, nutritional facts
    // use two or three apis to pull this data onto our page
    // decide on a js library to use
    // somehow use firebase to store user input data

    var ingredients = {
        baking: ["Eggs", "Butter", "Flour", "Honey", "Sugar", "Baking Soda", "Milk"],
        grains: ["Rice", "Pasta", "Bread"],
        vegetables: ["Tomato", "Olive", "Beans", "Peanuts", "Lettuce", "Eggplant", "Corn", "Carrot", "Potato"],
        meats: ["Beef", "Chicken", "Pork"]
        // cut down ingredients only what we need, when we decide that
    }

    function displayIngredients() {
        for (var i = 0; i < ingredients.baking.length; i++) {
            var ingBtn = $("<button>");
            ingBtn.addClass("baking");
            ingBtn.text(ingredients.baking[i]);
            $("#ingredientColumn").prepend(ingBtn);
        }
        for (var i = 0; i < ingredients.grains.length; i++) {
            var ingBtn = $("<button>");
            ingBtn.addClass("grains");
            ingBtn.text(ingredients.grains[i]);
            $("#ingredientColumn").append(ingBtn);
        }
        for (var i = 0; i < ingredients.vegetables.length; i++) {
            var ingBtn = $("<button>");
            ingBtn.addClass("vegetables");
            ingBtn.text(ingredients.vegetables[i]);
            $("#ingredientColumn").append(ingBtn);
        }
        for (var i = 0; i < ingredients.meats.length; i++) {
            var ingBtn = $("<button>");
            ingBtn.addClass("meats");
            ingBtn.text(ingredients.meats[i]);
            $("#ingredientColumn").append(ingBtn);
        }
    }
    var sweet;
    var savory;

    displayIngredients();
});