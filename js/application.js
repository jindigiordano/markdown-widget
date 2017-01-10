$(document).ready(function(){

  $("textarea").on("keyup", function() {
    $("#preview").html($("textarea").val());
  })

});



// $( "#target" ).keyup(function() {
//   alert( "Handler for .keyup() called." );
// });
