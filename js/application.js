$(document).ready(function(){

  $("textarea").on("keyup", transform);
});


function transform() {
  var input = $("textarea").val();
  //regex
  var italic1 = /[*].+[*]/;
  var italic2 = /[_].+[_]/;
  var bold = /[*]{2}.+[*]{2}/;


  // var matches = input.match(italic)
  // matches.addClass("italic");

  $("#preview").html("<span>" + input + "</span>");

  $("span").addClass("italic");
}







// pseudocode:

// $( "div" ).addClass("italic")
