//--------------------------------Welcome page------------------------------------
let openingPage = $("#openingPage");
let openingBtn = $("#openingBtn");

$(openingBtn).on("click", function () {
  $(openingPage).hide();
  // $(openingPage).addClass("fadeOut");
  $(openingBtn).attr("disabled", "disabled");
});
//--------------------------------Welcome page------------------------------------//




var zipPage = $(".zip-page");
var zipBtn = $("#zipBtn");

$(zipBtn).hide();
$(zipPage).hide();

$(openingBtn).on("click", function () {
  $(zipPage).show();
  $(zipBtn).show();
});






//--------------------------------Search page------------------------------------//
var searchPage = $(".search-page");
var searchBtn = $("#searchBtn");

$(searchBtn).hide();
$(searchPage).hide();

$(openingBtn).on("click", function () {
  $(searchPage).show();
  $(searchBtn).show();
});

//--------------------------------Search page------------------------------------//

//--------------------------------How-To Video (Emir)------------------------------------//

//This line hides the container holding the youtube video
$("#howToContainer").hide();

//This on click event handler will call the youtube api for the video with highest rating after the user hits search button
$("#searchBtn").on("click", function (event) {
  //This line prevents the user from trying to submit the form, user can hit enter on keyboard or click button
  event.preventDefault();
  //Calls the recipe API to show the recipe list 
  displayRecipe();
  //Calls restaurant API to display restaurants nearby
  dispRestaurant();
  //shows the ID for the recipe list 
  $("#recipeList").show()
  //shows restaurant container
  $('#restaurantContainer').show()
  //This line makes an empty variable to hold the search
  var userFoodSearch = [];
  //This line will take the value from the textbox, make it lower case, trim spaces, and place inside userInput global variable
  userInput = $("#search-input").val().toLowerCase().trim();
  //This line will push userInput into the userFoodSearch var as a string
  userFoodSearch.push(userInput);
  //This line will empty the textbox so user doesn't need to delete contents after every submission
  $("#search-input").val("");
  //This line will clear the container holding the youTube video when user searches for a new food item
  $("#collapseExample").empty();
  //This local variable holds the google api key used for requesting youtube data
  var googleApi = "AIzaSyA3LJNRXIx7_MkgahxD09FjInN0RrGgsiU";
  //This line will call the displayYouTubeVideo function to display video searched
  displayYouTubeVideo();
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
  }).then(function (response) {
    //This line makes a variable to place the iframe div inside (this holds the youtube video)
    youTubeVideo = $("<div>");
    //This line will give div a class for bootstrap and an id for custom css use
    youTubeVideo.addClass("card card-body").attr("id", "videoContainer");
    //This line will place the div inside the collapsible container
    $("#collapseExample").append(youTubeVideo);
    //This line will place the user search videoId with the most relevance inside cookVideo variable
    cookVideo = "https://www.youtube.com/embed/" + response.items[0].id.videoId + "";
    //This line will make the iframe that holds the source video with the attributes for the video player
    cookVideoContainer = $("<iframe>").attr("src", cookVideo).attr("allowFullscreen", "true").attr("frameBorder", "0").attr("width", "560").attr("height", "315").attr("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    //This line will place the video inside the youTubeVideo container that holds the iframe
    youTubeVideo.append(cookVideoContainer);
  });

});

//This function will display the youTube video
function displayYouTubeVideo() {
  //This line will display the container holding the button and embedded youTube video
  $("#howToContainer").show();
  //This line will change the text of the button to what the user searches for
  $('#restaurantContainer').show()

  $("#restaurantButton").text("Restaurants nearby that serve " + userInput + "!");

  $("#cookButton").text("How to make " + userInput + " video!");
  //This line displays recipe container
  $("#recipeList").show();
}

//--------------------------------How-To Video (Emir)------------------------------------//

//-------------------------------- Recipes ---------------------------------------//

//need to add  $("#recipeList").hide(); in line 12
// $("#openingBtn").on("click", function () {
//   //This line will show the recipelist div from html
//   $("#recipeList").show();
// });


function displayRecipe() {

  var dish = $("#search-input").val().trim();
  //var dish = "chicken";

  var queryURL = "https://api.edamam.com/search?q=" + dish + "&app_id=$385e5d34&app_key=$bf43fe764b8aae11e37d5dc0f21c1e2c&from=0&to=5&calories=0-1000000";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    //console.log(queryURL);
    // storing the data from the AJAX request in the results variable
    var results = response.hits;
    // console.log("hits: image : " + results[0].recipe.image);
    // console.log("hits: URL: " + results[0].recipe.url);
    // console.log("hits: serach name : " + response.q);

    for (var i = 0; i < results.length; i++) {
      var foodResult = $("<div>");
      $(foodResult).attr("data-dish", response.q);
      var foodImage = $("<img>").attr("src", results[i].recipe.image);

      var row = $("<tr>");
      row.append(foodImage);
      row.append("<td>" + results[i].recipe.label + "</td>");
      row.append("<td>" + results[i].recipe.url + "</td>");
      row.append("<td>" + Math.round(results[i].recipe.calories) + "</td>");
      row.append("<ul id=groceryList" + i + "> </ul>")
      //row.append("<td width=100px;>" + results[i].recipe.ingredientLines + "</td>");
      $("#recipes").append(row);
      //for loop for ingredients 

      // var ingr = results[i].recipe.ingredientLines.length;
      // console.log("Testiiiiing :" + ingr);
      for (var j = 0; j < results[i].recipe.ingredientLines.length; j++) {

        var li = $("<li list-style-type:square>");
        li.text(results[i].recipe.ingredientLines[j]);
        $("#groceryList" + i).append(li);

      }



    }//end of for loop
  });

  $("#searchBtn").on("click", function () {
    // console.log(working);
  });

};
//-------------------------------- Recipes ------------------------------------//

//-------------------------------- Restaurant ------------------------------------// 32.776700, -96.797000


$('#restaurantContainer').hide()

function dispRestaurant() {
  var foodChoice = $("#search-input").val().toLowerCase().trim();
  var foodChoiceNoSpace = foodChoice.replace(/\s/g, "");
  var userLocation = $("#zip-input").val()
  var placesUrl = "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=" + foodChoiceNoSpace + "in%20" + userLocation + "&key=ArgtXj8XxrDspnoBAO0ycDFaaCLYYOSjQVk9y02v7TL_FRTyN8bLYzGhVmco4NzV";
  console.log(placesUrl);


  $('#collapseExamples').empty()
  $.ajax({
    url: placesUrl,
    method: "GET"
  }).then(function (response) {
    var resourceResponse = response.resourceSets[0].resources
    console.log(resourceResponse)

    for (var i = 0; i < resourceResponse.length; i++) {


      var restData = $("<div id='restaurant'>");
      var restName = resourceResponse[i].name;
      var restAddy = resourceResponse[i].Address.formattedAddress;
      var restPhone = resourceResponse[i].PhoneNumber;

      var pOne = $("<p class='text-center'>").text(" Restaurant Name: " + restName + " | Address: " + restAddy + " | Phone: " + restPhone);
      pOne.addClass("card card-body")

      restData.append(pOne)
      $("#collapseExamples").append(restData);

    }



  })



}

$("#zipBtn").on("click", function (event) {
  event.preventDefault();
  $(zipBtn).attr("disabled", "disabled");
  dispRestaurant();
  displayRecipe();
  displayYouTubeVideo();
});

//-------------------------------- Restaurant ------------------------------------//


