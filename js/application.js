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



  var bolds = input.match(bold);

  if (bolds !== null) {
    output = output.replace(bold, "<span class = 'bold'>" + bolds[0].slice(2, -2) + "</span>");
  }

  var italics = output.match(italic1);
  if (italics !== null) {
    output = output.replace(italic1, "<span class = 'italic'>" + italics[0].slice(1, -1) + "</span>");
  }

  var italics2 = output.match(italic2);
  if (italics2 !== null) {
    output = output.replace(italic2, "<span class = 'italic'>" + italics2[0].slice(1, -1) + "</span>");
  }


  $("#preview").html(output);

}







// pseudocode:

// $( "div" ).addClass("italic")
