$(document).ready(function(){

  $("textarea").on("keyup", transform);
});


function transform() {
  $("#preview").html($("textarea").val());
}
