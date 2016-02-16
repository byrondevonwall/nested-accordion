// $(".firstSection").click(function(){
//   $(".sec1text").toggle().html("If one examines capitalist objectivism, one is faced with a choice: either accept premodern discourse or conclude that the media is capable of significance. It could be said that any number of narratives concerning Lacanist obscurity may be revealed. Baudrillard uses the term ‘realism’ to denote the bridge between society and sexual identity.")
// });

$(".firstSection").click(function(){
  $(".sec1text").toggleClass("hidden");
  $("#arrow-1").toggleClass("rotate");
  $(".sec2text").addClass("hidden");
  $("#arrow-2").removeClass("rotate");
  $(".sec3text").addClass("hidden");
  $("#arrow-3").removeClass("rotate");
});

$(".secondSection").click(function(){
  $(".sec2text").toggleClass("hidden");
  $("#arrow-2").toggleClass("rotate");
  $(".sec1text").addClass("hidden");
  $("#arrow-1").removeClass("rotate");
  $(".sec3text").addClass("hidden");
  $("#arrow-3").removeClass("rotate");
});

$(".thirdSection").click(function(){
  $(".sec3text").toggleClass("hidden");
  $("#arrow-3").toggleClass("rotate");
  $(".sec2text").addClass("hidden");
  $("#arrow-2").removeClass("rotate");
  $(".sec1text").addClass("hidden");
  $("#arrow-1").removeClass("rotate");
});
// comment


// $( "*", document.body ).click(function( event ) {
//   event.stopPropagation();
//   var domElement = $( this ).get( 0 );
//   $( "span:first" ).text( "Clicked on - " + domElement.nodeName );
//   console.log(domElement.children);
// });
