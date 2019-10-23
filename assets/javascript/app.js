//--------------------------------Welcome page------------------------------------//
let welcomePage = $(".welcome-page");
var searchPage = $(".search-page")

$('#searchBtn').hide();


$("#openingBtn").on("click", function () {
  $(welcomePage).hide();
  $(".search-page").show();
  $("#searchBtn").show();

});
//--------------------------------Welcome page------------------------------------//

//--------------------------------How-To Video------------------------------------//

/*This on click event will handle when the video card will show, for now it is
set to openingBtn user click*/
$("#openingBtn").on("click", function () {
  //This line will show the howToContainer from html
  $("#howToContainer").show();
});

var userFoodSearch = "how to cook chicken marsala";
var youTubeApi = "AIzaSyA3LJNRXIx7_MkgahxD09FjInN0RrGgsiU";
var youTubeUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=rating&q=" + userFoodSearch + "&regionCode=us&relevanceLanguage=en&safeSearch=strict&type=video&videoCaption=any&videoDefinition=any&videoDimension=2d&videoDuration=any&videoEmbeddable=true&videoLicense=youtube&videoSyndicated=true&videoType=any&key=" + youTubeApi;


$.ajax({
  url: youTubeUrl,
  method: "GET"
}).then(function (response) {
  console.log(response);
}

//--------------------------------How-To Video------------------------------------//
