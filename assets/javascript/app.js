//--------------------------------Welcome page------------------------------------//
let welcomePage = $(".welcome-page");

$('#searchBtn').hide();
//added - Hibah 
$("#recipeList").hide();


$("#openingBtn").on("click", function () {
  $(welcomePage).hide();
  $(searchPage).show();
  $("#searchBtn").show();

});
//--------------------------------Welcome page------------------------------------//

//--------------------------------Search page------------------------------------//
var searchPage = $(".search-page")

$('#searchBtn').hide();


$("#openingBtn").on("click", function () {
  $(welcomePage).hide();
  $(".search-page").show();
  $("#searchBtn").show();

});



//--------------------------------Search page------------------------------------//


//--------------------------------How-To Video------------------------------------//

/*This on click event will handle when the video card will show, for now it is
set to openingBtn user click*/
<<<<<<< HEAD
$("#searchBtn").on("click", function () {
  //This line will show the howToContainer from html
  $("#howToContainer").show();
});
=======
// $("#openingBtn").on("click", function () {
//   //This line will show the howToContainer from html
//   $("#howToContainer").show();
// });

// var youTubeApi = AIzaSyA3LJNRXIx7_MkgahxD09FjInN0RrGgsiU;
// var youTubeUrl = "https://www.googleapis.com/youtube/v3/videos"


>>>>>>> 9cea35d7981978508047a3716a36424425fa2cb0

var userFoodSearch = "how to cook chicken marsala";
var youTubeApi = "AIzaSyA3LJNRXIx7_MkgahxD09FjInN0RrGgsiU";
var youTubeUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=rating&q=" + userFoodSearch + "&regionCode=us&relevanceLanguage=en&safeSearch=strict&type=video&videoCaption=any&videoDefinition=any&videoDimension=2d&videoDuration=any&videoEmbeddable=true&videoLicense=youtube&videoSyndicated=true&videoType=any&key=" + youTubeApi;
$.ajax({
  url: youTubeUrl,
  method: "GET"
}).then(function (response) {
  console.log(response);
<<<<<<< HEAD
});

//This is for the embedded video
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    //This id was temporarily plugged in from the response
    videoId: "wOZFqf0ojkQ",
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
//--------------------------------How-To Video------------------------------------//
=======
})
//--------------------------------How-To Video------------------------------------//
//need to add  $("#recipeList").hide(); in line 12 
$("#openingBtn").on("click", function () {
  //This line will show the recipelist div from html
  $("#recipeList").show();
});

//displayRecipe();
function displayRecipe() {

  var dish = "chicken";

  var queryURL = "https://api.edamam.com/search?q=" + dish + "&app_id=$385e5d34&app_key=$bf43fe764b8aae11e37d5dc0f21c1e2c&from=0&to=10&calories=0-1000000";

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
  });

}


$("#searchBtn").on("click", function () {
  console.log(working);

});

>>>>>>> 9cea35d7981978508047a3716a36424425fa2cb0
