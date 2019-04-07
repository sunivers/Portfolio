$(document).ready(function() {
  $(".btn").on("click", function(event) {
    var offset = $("#contents").offset();
    console.log(offset);
    $("html body").animate({scrollTop:offset.top}, 500);
  });
}); //end of ready()
