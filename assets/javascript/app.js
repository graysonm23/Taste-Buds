//--------------------------------Welcome page------------------------------------//
let welcomePage = $(".welcome-page");
$("#openingBtn").on("click", function () {
  $(welcomePage).hide();
  $("#search-Page").show();
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

var youTubeApi = AIzaSyA3LJNRXIx7_MkgahxD09FjInN0RrGgsiU;
var youTubeUrl = "https://www.googleapis.com/youtube/v3/videos"



//--------------------------------How-To Video------------------------------------//
