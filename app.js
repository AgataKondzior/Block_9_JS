var main = function () { 
    $(".menu-toggle").click(function(){
        $(".menu").animate({
            left:"0px"
        },200);
        
        $("body").animate({
            left:"180px"
        },200);
        });
    
    $(".menu-toggle").click(function(){
         $("i").removeClass("fa fa-bars");     
    });
     
    $(".menu-toggle").click(function(){
         $("i").addClass("fa fa-times");
     });
};


    $(".menu-toggle").click(function(){
        $(".menu").animate({
            left:"-180px"
        },200);
    
        $("body").animate({
            left:"0px"
        },200);  
        });

    $(".menu-toggle").click(function(){
         $("i").removeClass("fa fa-times");     
    });

    $(".menu-toggle").click(function(){
         $("i").addClass("fa fa-bars");
     });


$(document).ready(main);
