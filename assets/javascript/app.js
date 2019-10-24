//--------------------------------Welcome page------------------------------------
let openingPage = $("#openingPage");
let openingBtn = $("#openingBtn");

$(openingBtn).on("click", function () {
  $(openingPage).hide();
  // $(openingPage).addClass("fadeOut");
  $(openingBtn).attr("disabled", "disabled");
});
//--------------------------------Welcome page------------------------------------//

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

//--------------------------------How-To Video------------------------------------//

//This on click event handler will call the youtube api for the video with highest rating after the user hits search button
$("#searchBtn").on("click", function (event) {
  //This line prevents the user from trying to submit the form, user can hit enter on keyboard or click button
  event.preventDefault();
  //This line makes an empty variable to hold the search
  var userFoodSearch = [];
  //This line will take the value from the textbox, make it lower case, trim spaces, and place inside userInput global variable
  userInput = $("#search-input").val().toLowerCase().trim();
  //This line will push userInput into the userFoodSearch var as a string
  userFoodSearch.push(userInput);
  //This line will empty the textbox so user doesn't need to delete contents after every submission
  $("#search-input").val("");
  //This line will clear the container holding the youTube video when user searches for a new food item
  $("#player").empty();
  //This local variable holds the google api key used for requesting youtube data
  var googleApi = "AIzaSyA3LJNRXIx7_MkgahxD09FjInN0RrGgsiU";
  //This line will call the displayYouTubeVideo function to display video searched
  displayYouTubeVideo();
  //This local variable holds the queryUrl used from youTube along with search parameters
  var youTubeUrl =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=relevance&q=how+to+make+" +
    userFoodSearch +
    "&regionCode=us&relevanceLanguage=en&safeSearch=strict&type=video&videoCaption=any&videoDefinition=any&videoDimension=2d&videoDuration=any&videoEmbeddable=true&videoLicense=youtube&videoSyndicated=true&videoType=any&key=" +
    googleApi;
  //This starts the ajax call to request data from the youTube api  
  $.ajax({
    url: youTubeUrl,
    method: "GET"
  }).then(function (response) {
    videoIdSearch = [];
    videoIdSearch.push(response.items[0].id.videoId);
    //This is for the embedded youTube video
    //This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


  });

});

//This function will display the youTube video
function displayYouTubeVideo() {
  //This line will display the container holding the button and embedded youTube video
  $("#howToContainer").show();
  //This line will change the text of the button to what the user searches for
  $("#cookButton").text("How to make " + userInput + " video!");
  //This line displays recipe container
  $("#recipeList").show();
}

//The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

//The API calls this function when the player's state changes.
//The function indicates that when playing a video (state=1),
//the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    // setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

//This function creates an <iframe> (and YouTube player)
//after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    //This id was temporarily plugged in from the response
    videoId: videoIdSearch,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}


//--------------------------------How-To Video------------------------------------//

//-------------------------------- Recipes ---------------------------------------//

//need to add  $("#recipeList").hide(); in line 12
$("#openingBtn").on("click", function () {
  //This line will show the recipelist div from html
  $("#recipeList").show();
});

//displayRecipe();
function displayRecipe() {
  var dish = $("#search-input");
  //var dish = "chicken";

  var queryURL =
    "https://api.edamam.com/search?q=" +
    dish +
    "&app_id=$385e5d34&app_key=$bf43fe764b8aae11e37d5dc0f21c1e2c&from=0&to=10&calories=0-1000000";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    //console.log(queryURL);
    // storing the data from the AJAX request in the results variable
    var results = response.hits;
    console.log("hits: recipe : " + results[0].recipe.image);
    console.log("hits: recipe : " + results[0].recipe.url);

    for (var i = 0; i < results.length; i++) {
      var foodResult = $("<div>");
      $(foodResult).attr("data-dish", response.q);
      var p = $("<p>").text("Recipe: " + results[i].recipe.url);
      var foodImage = $("<img>").attr("src", results[i].recipe.image);
      console.log("inside loop -  : " + results[0].recipe.url);
    } //end of for loop
  });
}

$("#searchBtn").on("click", function () {
  // console.log(working);
});
//-------------------------------- Recipes ------------------------------------//
