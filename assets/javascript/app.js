//----------------------------Loading Animation-----------------------------------//
$(".lds-hourglass").hide();
$(document).on({
  ajaxStart: function() {
    $(".lds-hourglass").show();
  },
  ajaxStop: function() {
    $(".lds-hourglass").hide();
  }
});
//----------------------------Loading Animation-----------------------------------//

//--------------------------------Welcome page------------------------------------//
let openingPage = $("#openingPage");
let openingBtn = $("#openingBtn");

$(openingBtn).on("click", function() {
  $(openingPage).hide();
  // $(openingPage).addClass("fadeOut");
  $(openingBtn).attr("disabled", "disabled");
});
//--------------------------------Welcome page------------------------------------//

//--------------------------------Search page------------------------------------//
var searchPage = $(".search-page");
var searchBtn = $("#searchBtn");
var searchItems = $(".search-items");

$(searchBtn).hide();
$(searchPage).hide();
$(searchItems).hide();

$(openingBtn).on("click", function() {
  $(searchPage).show();
  $(searchBtn).show();
  $(searchItems).show();
});

//--------------------------------Search page------------------------------------//

//--------------------------------How-To Video (Emir)------------------------------------//

//This line hides the container holding the youtube video
$(".how-to-video").hide();
$("#recipeList").hide();

//This on click event handler will call the youtube api for the video with highest rating after the user hits search button
$("#searchBtn").on("click", function(event) {
  //This line prevents the user from trying to submit the form, user can hit enter on keyboard or click button
  event.preventDefault();

  //grayson's change----working
  $(".row").addClass("opacity");
  $(".row").removeClass("vh-100");
  $(".row").removeClass("opacity");
  $(".row").addClass("fadeIn");

  //DO NOT REMOVE - HIBAH
  resetRecipe();
  //Calls the recipe API to show the recipe list
  displayRecipe();
  //Calls restaurant API to display restaurants nearby
  dispRestaurant();
  //Calls function to hide restaurant display
  // hideRest();
  //This line empties out the container hilding recipe url iframe (Emir add)
  // $("#urlWindowBox").empty();
  //shows the ID for the recipe list
  // hibah  $("#recipeList").show();
  //shows restaurant container

  //This line makes an empty variable to hold the search
  var userFoodSearch = [];
  //This line will take the value from the textbox, make it lower case, trim spaces, and place inside userInput global variable
  userInput = $("#search-input")
    .val()
    .toLowerCase()
    .trim();
  //This line will push userInput into the userFoodSearch var as a string
  userFoodSearch.push(userInput);
  //This line will empty the textbox so user doesn't need to delete contents after every submission
  $("#search-input").val("");
  //This line will clear the containers holding the display elements when user searches for a new food item
  $("#howToContainer").empty();
  $("#collapseExamples").empty();
  $("#search-input").empty();
  $("#zip-input").empty();
  //This local variable holds the google api key used for requesting youtube data
  var googleApi = "AIzaSyA3LJNRXIx7_MkgahxD09FjInN0RrGgsiU";

  //Graysons' input
  if (userInput === "") {
    return false;
  }
  //Graysons' input

  //This local variable holds the queryUrl used from youTube along with search parameters
  var youTubeUrl =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&q=how+to+make+" +
    userFoodSearch +
    "&regionCode=us&relevanceLanguage=en&safeSearch=strict&type=video&videoCaption=any&videoDefinition=any&videoDimension=2d&videoDuration=any&videoEmbeddable=true&videoLicense=youtube&videoSyndicated=true&videoType=any&key=" +
    googleApi;
  //This starts the ajax call to request data from the youTube api
  $.ajax({
    url: youTubeUrl,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    //This line makes a variable to place the iframe div inside (this holds the youtube video)
    youTubeVideo = $("<div>");
    //This line will give div a class for bootstrap and an id for custom css use
    youTubeVideo.addClass("card card-body").attr("id", "videoContainer");
    //This line will place the div inside the collapsible container
    $("#howToContainer").append(youTubeVideo);
    //This line will place the user search videoId with the most relevance inside cookVideo variable
    cookVideo =
      "https://www.youtube.com/embed/" + response.items[0].id.videoId + "";
    //This line will make the iframe that holds the source video with the attributes for the video player
    cookVideoContainer = $("<iframe>")
      .attr("src", cookVideo)
      .attr("allowFullscreen", "true")
      .attr("frameBorder", "0")
      .attr("width", "100%")
      .attr("height", "360px")
      .attr(
        "allow",
        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      );
    //This line will place the video inside the youTubeVideo container that holds the iframe
    youTubeVideo.append(cookVideoContainer);
  });
  //This line will call the displayYouTubeVideo function to display video searched
  displayYouTubeVideo();
});

//This function will display the youTube video
function displayYouTubeVideo() {
  //This line will display the container holding the button and embedded youTube video
  $(".how-to-video").show();

  //This line will change the text of the button to what the user searches for
  // $("#cookButton").text("How to make " + userInput + " video!"); Commented out by Grayson
  //This line displays recipe container
  //hibah $("#recipeList").show();
}

//--------------------------------How-To Video (Emir)------------------------------------//

//-------------------------------- Recipes ---------------------------------------//
//NEEDS TO BE DELETED
//need to add  $("#recipeList").hide(); in line 12
// $("#openingBtn").on("click", function () {
//   //This line will show the recipelist div from html
//   $("#recipeList").show();
// });

// $("#openingBtn").on("click", function () {
//   //This line will show the recipelist div from html
//   $("#recipeList").show();
// });

//START - DO NOT REMOVE PLEASE -- HIbah

var optionSelected = [];

function displayRecipe() {
  $("#recipeList").show();
  var dish = $("#search-input")
    .val()
    .trim();
  //var dish = "chicken";
  var calorieMAX = $("#calorie-input").val();

  //console.log($("#healthLabels").val());
  //creating the array with health option
  var optionSelected = $("#healthLabels").val();
  //console.log(optionSelected);
  var parameter = "";

  for (a = 0; a < optionSelected.length; a++) {
    parameter += "&health=" + optionSelected[a];
    console.log("inside loop for health parameter :" + parameter);
  }
  // console.log("Labels" + $("#healthLabels option:selected").text());
  // userFoodSearch.push(userInput);

  // healthLabels.push($("#healthLabels").val());
  //console.log("array :" + healthLabel);
  // console.log("calories:" + calorieMAX);
  var queryURL =
    "https://api.edamam.com/search?q=" +
    dish +
    "&app_id=$385e5d34&app_key=$bf43fe764b8aae11e37d5dc0f21c1e2c&from=0&to=1&calories=0-" +
    calorieMAX +
    parameter +
    "";
  // var queryURL =
  //   "https://api.edamam.com/search?q=chicken&app_id=$385e5d34&app_key=$bf43fe764b8aae11e37d5dc0f21c1e2c&from=0&to=5&calories=0-1000&" + parameter + "";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(queryURL);
    // storing the data from the AJAX request in the results variable
    var results = response.hits;
    // console.log("hits: image : " + results[0].recipe.image);
    // console.log("hits: URL: " + results[0].recipe.url);
    // console.log("hits: serach name : " + response.q);

    for (var i = 0; i < results.length; i++) {
      var foodResult = $("<div>");
      var caloriePerServing = 0;
      var kCal = results[i].recipe.calories;
      var serving = results[i].recipe.yield;
      caloriePerServing = parseInt(kCal / serving);

      var foodImage = $("<img>").attr("src", results[i].recipe.image);

      $("#foodImage").append(foodImage);
      //append title to h2
      $(".recipeName").text(results[i].recipe.label);
      //for each info need to add title
      // foodResult.append("<p id=label><span class='title'>Recipe Name: </span> <br>" + results[i].recipe.label + "</p>");
      var recipeURL = results[i].recipe.url;
      var ingredients = $(".ingredients");
      ingredients.append(
        "<a href=" +
          recipeURL +
          " target='_blank' id='recipeLink'> " +
          "Link to the Recipe" +
          "</a > "
      );
      console.log("<a href=" + recipeURL + ">");
      ingredients.append(
        "<p id=caloriesForDish><span class='title'>Total Calories</span> <br>" +
          Math.round(results[i].recipe.calories) +
          "</p>"
      );
      ingredients.append(
        "<p id=serving><span class='title'>Serving Size</span> <br>" +
          results[i].recipe.yield +
          "</p>"
      );
      foodResult.append(
        "<ol id=groceryList" +
          i +
          "><span class='title'>Ingredients</span> <br> </ol>"
      );
      caloriePerServing = parseInt(kCal / serving);
      foodResult.append(
        "<p id=calories><span class='title'>Calories Per Serving</span> <br>" +
          caloriePerServing +
          "<p>"
      );
      foodResult.append(
        "<ul id=healthTags" +
          i +
          "><span class='title'>Health Labels</span> <br> </ul>"
      );
      $("#facts").append(foodResult);
      console.log(foodResult);

      //DO NOT REMOVE

      // Commented out table format
      // var foodResult = $("<div>");
      // $(foodResult).attr("data-dish", response.q);
      // var foodImage = $("<img>").attr("src", results[i].recipe.image);
      // var caloriePerServing = 0;
      // var kCal = results[i].recipe.calories;
      // var serving = results[i].recipe.yield;
      // var row = $("<tr>");
      // row.append(foodImage);
      // row.append("<td>" + results[i].recipe.label + "</td>");
      // row.append("<td>" + results[i].recipe.url + "</td>");
      // row.append("<td>" + Math.round(results[i].recipe.calories) + "</td>");
      // row.append("<td>" + results[i].recipe.yield + "</td>")
      // row.append("<ul id=groceryList" + i + "> </ul>");
      // caloriePerServing = parseInt(kCal / serving);
      // row.append("<td>" + caloriePerServing + "</td>");
      // row.append("<ul id=healthTags" + i + "> </ul>");
      // //row.append("<td width=100px;>" + results[i].recipe.ingredientLines + "</td>");
      // $("#recipes").append(row);
      //for loop for ingredients

      // var ingr = results[i].recipe.ingredientLines.length;
      // console.log("Testiiiiing :" + ingr);
      for (var j = 0; j < results[i].recipe.ingredientLines.length; j++) {
        var li = $("<li list-style-type:square>");
        li.text(results[i].recipe.ingredientLines[j]);
        $("#groceryList" + i).append(li);
      }

      for (var k = 0; k < results[i].recipe.ingredientLines.length; k++) {
        var li = $("<li list-style-type:square>");
        li.text(results[i].recipe.healthLabels[k]);
        $("#healthTags" + i).append(li);
      }
    } //end of for loop
  });
}

function resetRecipe() {
  $("#foodImage").empty();
  $("#facts").empty();
  optionSelected = [];
}

//END - DO NOT REMOVE PLEASE -- Hibah
//-------------------------------- Recipes ------------------------------------//

//-------------------------------- Restaurant ------------------------------------// 32.776700, -96.797000

$(".restaurantContainer").hide();

function dispRestaurant() {
  var foodChoice = $("#search-input")
    .val()
    .toLowerCase()
    .trim();

  //takes spaces out of user input to insert as query
  var foodChoiceNoSpace = foodChoice.replace(/\s/g, "");

  userLocation = $("#zip-input").val();

  var placesUrl =
    "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=" +
    foodChoiceNoSpace +
    "in%20" +
    userLocation +
    "&key=ArgtXj8XxrDspnoBAO0ycDFaaCLYYOSjQVk9y02v7TL_FRTyN8bLYzGhVmco4NzV";

  //If user doesnt input anything, container won't display and function won't run
  if (foodChoice === "") {
    $(".restaurantContainer").hide();
    return false;
  }

  $.ajax({
    url: placesUrl,
    method: "GET"
  }).then(function(response) {
    var resourceResponse = response.resourceSets[0].resources;
    console.log(resourceResponse);

    for (var i = 0; i < resourceResponse.length; i++) {
      //div containing restaurant info
      var restData = $("<div id='restaurant'>");

      var restName = resourceResponse[i].name;
      var restAddy = resourceResponse[i].Address.formattedAddress;
      var restPhone = resourceResponse[i].PhoneNumber;

      var pOne = $("<p class='text-center'>").text(
        " Restaurant Name: " +
          restName +
          " | Address: " +
          restAddy +
          " | Phone: " +
          restPhone
      );

      //additional class for styling purposes
      pOne.addClass("card card-body");

      //appending data to restaurant div
      restData.append(pOne);

      $("#collapseExamples").append(restData);
      $(".restaurantContainer").show();
    }

    // food choice selected has no nearby restaurants serving it
    if (resourceResponse.length === 0) {
      $("#collapseExamples")
        .text(
          "NO restaurants nearby serve " +
            userInput +
            "! Check out the recipe and/or 'How to...' section for tips on making it!"
        )
        .css({
          "text-align": "center",
          color: "white"
        });
      $(".restaurantContainer").show();
    }

    // if user hasn't inputed a zip code
    if (userLocation === "") {
      $("#collapseExamples").text(
        "Please enter a zip code for places nearby that serve " +
          userInput +
          "!"
      );
    }
    $(".restaurantContainer").show();
    window.sr = ScrollReveal();
    sr.reveal(".card", {
      duration: 2000,
      origin: "left",
      distance: "300px"
    });
  });
}
//-------------------------------- Restaurant ------------------------------------//
