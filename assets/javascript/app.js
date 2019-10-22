//--------------------------------Welcome page------------------------------------
let welcomePage = $(".welcome-page");

$(searchPage).hide();
$('#searchBtn').hide();

$("#openingBtn").on("click", function () {
  $(welcomePage).hide();
  $(searchPage).show();
  $('#searchBtn').show();
});
//--------------------------------Welcome page------------------------------------

//--------------------------------Search  page------------------------------------

var searchPage = $('.search-page')
