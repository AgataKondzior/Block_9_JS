var main = function()
{   
   $(".menu").hide();
   $(".menu-toggle").click(function()
    {
       
       $(".menu").toggle();
       
       $("i").removeClass("fa fa-bars");   
       $("i").addClass("fa fa-times");

  if( $(".menu").is(':visible') )   
        {
            $(".menu").animate({
            left:"0px"
            },200);   
          
            $("body").animate({
            left:"180px"
            },200);
        }
       
   else
        {
            $(".menu").animate({
            left:"-180px"
            },200);
            
            $("body").animate({
            left:"0px"
            },200);    
     
            $("i").removeClass("fa fa-times");   
            $("i").addClass("fa fa-bars");
        }

    });
        
};

$(document).ready(main);

