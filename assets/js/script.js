
// var showSecOne = document.querySelector(".firstSection");
// showSecOne.addEventListener("click", addS1Txt(text){
//   var s1txt = document.createTextNode("text");
//       s1 = document.querySelector(".sec1text");
//
//   s1.appendChild("new text")
// });
//
// function addS1Txt(text){
//   var s1txt = document.createTextNode("text");
//       s1 = document.querySelector(".sec1text");
//
//   s1.appendChild("new text")

// var secOneWrap = document.querySelector(".firstSection");
// var secOneTxt = document.querySelector(".sec1text");
//
// var sec1state = "full";
// var sec1content = secOneTxt.textContent;

var showSecOne = document.querySelector(".firstSection");
var secOneContent = document.querySelector(".sec1text")

var toggle = false;

showSecOne.addEventListener("click", function(){
toggle = !toggle;
if(toggle){
secOneContent.textContent = "If one examines capitalist objectivism, one is faced with a choice: either accept premodern discourse or conclude that the media is capable of significance. It could be said that any number of narratives concerning Lacanist obscurity may be revealed. Baudrillard uses the term ‘realism’ to denote the bridge between society and sexual identity.";
}
else{
  secOneContent.textContent = "";
}
}
);
//
// function sec1clicked(){
//   toggle = !toggle;
//   if(toggle)
//
// }
