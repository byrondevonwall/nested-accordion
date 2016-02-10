//set toggle


//section one click event
var showSecOne = document.querySelector(".firstSection");
var secOneContent = document.querySelector(".sec1text");
var arrowOne = document.querySelector("#arrow-1")
var toggle1 = false;
var toggle2 = false;
var toggle3 = false;

showSecOne.addEventListener("click", function addText1(){
toggle1 = !toggle1;
if(toggle1){
secOneContent.textContent = "If one examines capitalist objectivism, one is faced with a choice: either accept premodern discourse or conclude that the media is capable of significance. It could be said that any number of narratives concerning Lacanist obscurity may be revealed. Baudrillard uses the term ‘realism’ to denote the bridge between society and sexual identity.";
arrowOne.className = "fa fa-arrow-down";
toggle2 = false;
toggle3 = false;
}
else{
  secOneContent.textContent = "";
  arrowOne.className = "fa fa-arrow-right";
}
}
// function close23(elemId){
//   var a = document.getElementById(elemId);
//   var b = document.getElementByClass("accordionBody").getElementsByTagName('div')
// }


);

//section two click event
var showSecTwo = document.querySelector(".secondSection");
var secTwoContent = document.querySelector(".sec2text");
var arrowTwo = document.querySelector("#arrow-2")


showSecTwo.addEventListener("click", function addText2(){
  toggle2 = !toggle2;
  if(toggle2){
  secTwoContent.textContent = "Therefore, Bataille promotes the use of predialectic narrative to challenge and analyse class. If neosemantic socialism holds, we have to choose between premodern discourse and the capitalist paradigm of narrative.  Thus, Lacan suggests the use of realism to attack class divisions. The main theme of Dietrich’s[2] critique of neosemantic socialism is not theory as such, but neotheory.  It could be said that the subject is interpolated into a premodern discourse that includes art as a paradox. Marx’s model of neosemantic socialism states that sexual identity, somewhat ironically, has significance.";
  arrowTwo.className = "fa fa-arrow-down";
  }
  else{
    secTwoContent.textContent = "";
    arrowTwo.className = "fa fa-arrow-right"
  }
}
);

//section three click event
var showSecThree = document.querySelector(".thirdSection");
var secThreeContent = document.querySelector(".sec3text");
var arrowThree = document.querySelector("#arrow-3")


showSecThree.addEventListener("click", function addText3(){
  toggle3 = !toggle3;
  if(toggle3){
    secThreeContent.textContent = "In a sense, the subject is contextualised into a premodern discourse that includes culture as a reality. Drucker[5] suggests that we have to choose between realism and prematerialist construction.  It could be said that Debord promotes the use of premodern discourse to read society. The primary theme of Brophy’s[6] essay on realism is the failure, and eventually the futility, of neosemioticist reality.";
    arrowThree.className = "fa fa-arrow-down";
  }
  else {
    secThreeContent.textContent = "";
    arrowThree.className = "fa fa-arrow-right"
  }
  }
);
