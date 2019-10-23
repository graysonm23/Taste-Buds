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
// $("#openingBtn").on("click", function () {
//   //This line will show the howToContainer from html
//   $("#howToContainer").show();
// });

// var youTubeApi = AIzaSyA3LJNRXIx7_MkgahxD09FjInN0RrGgsiU;
// var youTubeUrl = "https://www.googleapis.com/youtube/v3/videos"



var userFoodSearch = "how to cook chicken marsala";
var youTubeApi = "AIzaSyA3LJNRXIx7_MkgahxD09FjInN0RrGgsiU";
var youTubeUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=rating&q=" + userFoodSearch + "&regionCode=us&relevanceLanguage=en&safeSearch=strict&type=video&videoCaption=any&videoDefinition=any&videoDimension=2d&videoDuration=any&videoEmbeddable=true&videoLicense=youtube&videoSyndicated=true&videoType=any&key=" + youTubeApi;
$.ajax({
  url: youTubeUrl,
  method: "GET"
}).then(function (response) {
  console.log(response);
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

