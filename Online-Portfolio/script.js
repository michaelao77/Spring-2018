

$(function() {
  $(".carousel").carousel({
    interval: 3000
  });

  $("#pause").click(function() {
    $("#infographic-content").carousel("pause");
  });
});

function openDD() {
  var x = document.getElementById("dropdown-background");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
