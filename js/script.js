/*
$('li').click(function(){
    $(this).css("color","grey");
    $(this).css("text-decoration","line-through")
    
    >>>this is not a good way because we have to write many lines for many styles.....

    >>>method 2............@@@@@@

    >>>make object with key values pair as styles and properties...

    if($(this).css("color") === "rbg(128, 128, 128)"){

        $(this).css("color","black");
        $(this).css("text-decoration","none");
    } 
    >>>here ,there is little error that .css("color")   return ,color of format RGBA but we are comparing it to grey....
    spaces are important in rgba

    else{
    $(this).css({

         >>>agar this ki jgh $('li') likhti toh sab list ke uper ek sath kaam krte pr ab sirf tab chalega jb ek element ko click kra jaega

      color: "grey",//remeber , here and " "
      textDecoration:"line-through"
    });
 }
comments -- >>>
});
*/



//_____________________________________________rather than doing uper wala whole drama we use toggleclass




// 1) easy this below------------------------------

$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// it will add and remove class styles one after other whenever we click on any li.................



//2) deleting todos

// $("span").click(function(event){  ye isleye use nhi kra kyoki jb add kr rhe new li tab unpr bhi sare function kaam kre isleye on('click') use kra..
$("ul").on("click", "span", function(event){
  //---------------------------------------

  //$('this').remove();
  /*the above line removes that span (X) but we want
  to remove the li which is parent of this span.*/

  //-----------------------------
  // so do this...

   $(this).parent().fadeOut(500,function(){ // ye wala this span ko denote kr rha
       $(this).remove(); //ye wali "this" parent ko denote kr rha..
       
   });
   // it will remove parent of span/this which is <li> complete...actually it will first fades and then wait for 500 msecond and then remove that li...

  event.stopPropagation();
  // stops bubbling here at span only
});
/* list element ke ader x haiiii....
 when i click on span(X) the functionality of X clickevent and the functionality of list also work 
kyoki x li ke ander hai toh tumne x dabaya mtlb li dbaii*/


// 3) adding new todo

$("input[type='text']").keypress(function(event){

  if(event.which===13)
  {
    var todo = $(this).val();
    $(this).val("");

    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo + "</li>");
  }
});

// for opening and closing input bar by clicking on + icon

$(".fa-plus-square").click(function(){
  $("input[type='text']").fadeToggle();
  // fadeOut only fades out so use fadeToggle...
});