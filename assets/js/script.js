//set toggle


//section one click event
var showSecOne = document.querySelector(".firstSection");
var secOneContent = document.querySelector(".sec1text");
var toggle1 = false;
showSecOne.addEventListener("click", function(){
toggle1 = !toggle1;
if(toggle1){
secOneContent.textContent = "If one examines capitalist objectivism, one is faced with a choice: either accept premodern discourse or conclude that the media is capable of significance. It could be said that any number of narratives concerning Lacanist obscurity may be revealed. Baudrillard uses the term ‘realism’ to denote the bridge between society and sexual identity.";
}
else{
  secOneContent.textContent = "";
}
}
);

//section two click event
var showSecTwo = document.querySelector(".secondSection");
var secTwoContent = document.querySelector(".sec2text");
var toggle2 = false;

showSecTwo.addEventListener("click", function(){
  toggle2 = !toggle2;
  if(toggle2){
  secTwoContent.textContent = "Therefore, Bataille promotes the use of predialectic narrative to challenge and analyse class. If neosemantic socialism holds, we have to choose between premodern discourse and the capitalist paradigm of narrative.  Thus, Lacan suggests the use of realism to attack class divisions. The main theme of Dietrich’s[2] critique of neosemantic socialism is not theory as such, but neotheory.  It could be said that the subject is interpolated into a premodern discourse that includes art as a paradox. Marx’s model of neosemantic socialism states that sexual identity, somewhat ironically, has significance.";
  }
  else{
    secTwoContent.textContent = "";
  }
}
);

//section three click event
var showSecThree = document.querySelector(".thirdSection");
var secThreeContent = document.querySelector(".sec3text");
var toggle3 = false;

showSecThree.addEventListener("click", function(){
  toggle3 = !toggle3;
  if(toggle3){
    secThreeContent.textContent = "In a sense, the subject is contextualised into a premodern discourse that includes culture as a reality. Drucker[5] suggests that we have to choose between realism and prematerialist construction.  It could be said that Debord promotes the use of premodern discourse to read society. The primary theme of Brophy’s[6] essay on realism is the failure, and eventually the futility, of neosemioticist reality.";
  }
  else {
    secThreeContent.textContent = "";
  }
  }
);
