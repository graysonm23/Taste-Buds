//--------------------------------Welcome page------------------------------------
let welcomePage = $(".welcome-page");

$(searchPage).hide();
$('#searchBtn').hide();

$("#openingBtn").on("click", function () {
  $(welcomePage).hide();
  $(searchPage).show();
  $('#searchBtn').show();
  $('input')[0].reset();
});
//--------------------------------Welcome page------------------------------------

//--------------------------------Search  page------------------------------------

var searchPage = $('.search-page')
