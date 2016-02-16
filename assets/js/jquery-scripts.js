//first section toggles
$(".firstSection").click(function(){
  $(".sec1text").toggleClass("hidden");
  $("#arrow-1").toggleClass("rotate");
  $(".sec2text").addClass("hidden");
  $("#arrow-2").removeClass("rotate");
  $(".sec3text").addClass("hidden");
  $("#arrow-3").removeClass("rotate");
  $(".nest1body").toggleClass("hidden")
  $(".nest2body").addClass("hidden")
  $(".nest3body").addClass("hidden")
});
//first nest toggles
$(".firstNest1").click(function(){
  $(".nest1text1").toggleClass("hidden");
  $("#circle1-1").toggleClass("rotate");
})
$(".secondNest1").click(function(){
  $(".nest2text1").toggleClass("hidden");
  $("#circle1-2").toggleClass("rotate");
})
$(".thirdNest1").click(function(){
  $(".nest3text1").toggleClass("hidden");
  $("#circle1-3").toggleClass("rotate");
})



//second section toggles
$(".secondSection").click(function(){
  $(".sec2text").toggleClass("hidden");
  $("#arrow-2").toggleClass("rotate");
  $(".sec1text").addClass("hidden");
  $("#arrow-1").removeClass("rotate");
  $(".sec3text").addClass("hidden");
  $("#arrow-3").removeClass("rotate");
  $(".nest2body").toggleClass("hidden")
  $(".nest1body").addClass("hidden")
  $(".nest3body").addClass("hidden")
});
//second nest toggles
$(".firstNest2").click(function(){
  $(".nest1text2").toggleClass("hidden");
  $("#circle2-1").toggleClass("rotate");
})
$(".secondNest2").click(function(){
  $(".nest2text2").toggleClass("hidden");
  $("#circle2-2").toggleClass("rotate");
})
$(".thirdNest2").click(function(){
  $(".nest3text2").toggleClass("hidden");
  $("#circle2-3").toggleClass("rotate");
})



//third section toggles
$(".thirdSection").click(function(){
  $(".sec3text").toggleClass("hidden");
  $("#arrow-3").toggleClass("rotate");
  $(".sec2text").addClass("hidden");
  $("#arrow-2").removeClass("rotate");
  $(".sec1text").addClass("hidden");
  $("#arrow-1").removeClass("rotate");
  $(".nest3body").toggleClass("hidden")
  $(".nest1body").addClass("hidden")
  $(".nest2body").addClass("hidden")
});
//third nest toggles
$(".firstNest3").click(function(){
  $(".nest1text3").toggleClass("hidden");
  $("#circle3-1").toggleClass("rotate");
})
$(".secondNest3").click(function(){
  $(".nest2text3").toggleClass("hidden");
  $("#circle3-2").toggleClass("rotate");
})
$(".thirdNest3").click(function(){
  $(".nest3text3").toggleClass("hidden");
  $("#circle3-3").toggleClass("rotate");
})
