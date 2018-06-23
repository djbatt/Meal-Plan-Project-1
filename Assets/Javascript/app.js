$(document).ready(function(){
    
    var userIng = [];

    var ingredients = [{
            ingredient: "Eggs",
            savory: true,
            sweet: true
        }, {
            ingredient: "Butter",
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
        }]
 
        function flavorCheck()
    // when we click one of the flavor buttons run displayIngredients
    // now we need to add a check in displayIngredients to display sweet ingrdients if sweet is pressed, and savory ingredients if savory is pressed

    function displayIngredients() {
        $("#ingredientColumn").empty(); // clears out buttons before we change flavors!
        for (var i = 0; i < ingredients.length; i++) {
            var ingBtn = $("<button>");
            ingBtn.addClass("ingredient");
            ingBtn.addClass("btn btn-lg btn-primary");
            ingBtn.attr("id", ingredients[i].ingredient);
            ingBtn.text(ingredients[i].ingredient);
            $("#ingredientColumn").prepend(ingBtn);
        }
    }

    function userInput(event) {
        var selectedIng = event.target.id;
        var targetBtn = $(event.target);
        if (userIng.includes(selectedIng)) {
            console.log(selectedIng.indexOf());
            userIng.splice(selectedIng.indexOf()); // removing the wrong ingredient i will fix this
            console.log(userIng);
            console.log(selectedIng);
            targetBtn.removeClass("active");
            return;
        } else {
            userIng.push(selectedIng);
            console.log(userIng);
            console.log(selectedIng);
            targetBtn.addClass("active");
        }
    }

    $(document).on("click", ".flavor", displayIngredients);
    $(document).on("click", ".ingredient", userInput);
});
