//--------------------------------Welcome page------------------------------------
let welcomePage = $(".welcome-page");

// Hide search button on page load
$('#searchBtn').hide();

$("#openingBtn").on("click", function () {
  $(welcomePage).hide();
  $(searchPage).show();
  $("#searchBtn").show();

});
//--------------------------------Welcome page------------------------------------

//--------------------------------Search  page------------------------------------

var searchPage = $('.search-page')
