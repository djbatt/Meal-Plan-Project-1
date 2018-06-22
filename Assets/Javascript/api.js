
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


  database.ref().on("value", function (snapshot) {

    console.log(snapshot.val());
    
 // Change the html to reflect the initial value.

 $("#sweet").on("click", function () {

  var recipeObj = {
      name: 
      link:
      ingredients:
  }




  });