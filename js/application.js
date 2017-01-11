$(document).ready(function(){

  $("textarea").on("keyup", transform);
});


function transform() {
  var input = $("textarea").val();
  var output = input;
  //regex
  var italic1 = /[*].+[*]/;
  var italic2 = /[_].+[_]/;
  var bold = /[*]{2}.+[*]{2}/;

  var italics = input.match(italic1);


  if (italics !== null) {
    output = input.replace(/[*].+[*]/, "<span class = 'italic'>" + italics[0].slice(1, -1) + "</span>");
  }

  $("#preview").html(output);

}







// pseudocode:

// $( "div" ).addClass("italic")
