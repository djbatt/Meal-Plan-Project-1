
var myPageResults = '';
var clickInput = true;


// Initialize Firebase
var config = {
    apiKey: "AIzaSyA6XxeybV4DUn3pZpGhPyMMj4k4B2VyCH0",
    authDomain: "project1-recipes.firebaseapp.com",
    databaseURL: "https://project1-recipes.firebaseio.com",
    projectId: "project1-recipes",
    storageBucket: "",
    messagingSenderId: "444267984018"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

//   database.ref().on("value", function (snapshot) {

//     console.log(snapshot.val());
    
 // Change the html to reflect the initial value.
 



 $("#sweet").on("click", function () {

    database.ref().set([{
        recipeName: "Fast and Delicious Peanut Butter!",
        link: "https://pinchofyum.com/5-minute-homemade-peanut-butter",
        ingredients: ["peanuts"]
    },{
        recipeName: "10 Creative Ways of Cooking an Egg ",
        link: "https://www.youtube.com/watch?v=mfRNLcaxTeo",
        ingredients: ["eggs"]
    }, {
        recipeName: "Poach an Egg",
        link: "https://www.thedailymeal.com/cook/12-one-egg-wonder-dishes-you-can-make-carton-eggs",
        ingredients: ["eggs"]
    }, {
        recipeName: "Peanut Butter Scramble",
        link: "https://www.refinery29.com/2017/02/139786/peanut-butter-scrambled-eggs-review",
        ingredients: ["peanuts", "eggs"]
    }, {
        recipeName: "Make Your Pasta ",
        link: "http://foodparsed.com/eggless-pasta",
        ingredients: ["flour"]
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
    }]);
  




  });