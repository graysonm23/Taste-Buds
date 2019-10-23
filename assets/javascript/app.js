//--------------------------------Welcome page------------------------------------//
let welcomePage = $(".welcome-page");
var searchPage = $(".search-page")

$('#searchBtn').hide();
//added - Hibah 
$("#recipeList").hide();


$("#openingBtn").on("click", function () {
  $(welcomePage).hide();
  $(searchPage).show();
  $("#searchBtn").show();

});
//--------------------------------Welcome page------------------------------------//

//--------------------------------How-To Video------------------------------------//

/*This on click event will handle when the video card will show, for now it is
set to openingBtn user click*/
// $("#openingBtn").on("click", function () {
//   //This line will show the howToContainer from html
//   $("#howToContainer").show();
// });

// var youTubeApi = AIzaSyA3LJNRXIx7_MkgahxD09FjInN0RrGgsiU;
// var youTubeUrl = "https://www.googleapis.com/youtube/v3/videos"



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

