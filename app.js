var main = function (){ 
    
   $(".menu-toggle").click(function(){
    $(".menu").animate({
            left:"0px"
        },200);      

   $("body").animate({
            left:"180px"
        },200);
 
   $(".menu-toggle").hide("fast");    
   });
    
   
   $("i").click(function(){
   $(".menu").animate({
            left:"-180px"
        },200);      

   $("body").animate({
            left:"0px"
        },200);
   $(".menu-toggle").show(100);
});
  };

$(document).ready(main);
