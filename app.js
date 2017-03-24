var main = function (){ 
    
   $(".menu-toggle").click(function(){
    $(".menu").animate({
            left:"0px"
        },600);      

   $("body").animate({
            left:"180px"
        },600);
 
   $(".menu-toggle").hide(100);    
   });
    
   
   $(".menu-toggle").click(function(){
   $(".menu").animate({
            left:"-180px"
        },600);      

   $("body").animate({
            left:"0px"
        },600);
   
});
  };

$(document).ready(main);
