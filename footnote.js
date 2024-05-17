$(document).ready(function () {
  $(".dropdown-item").on("click", function () {
    var newText = $(this).text().trim();
    $("#btnFootnote").text(newText);
  });
});
