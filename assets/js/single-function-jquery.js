$(".wrapper").click(function(e){
  e.preventDefault();
  console.log($(this.child).find(".content"));//this prints out the article tag im looking for.
  $(this).find(".content").toggleClass("hidden");
  $(this).find(".fa-arrow-right").toggleClass("rotate")
});
