$(document).ready(function() {
    
    $('#go_about').click(function() {
        $('html, body').animate({
           scrollTop: $("#about").offset().top
       }, 900); 
    })
    
    $("#color_switch").click(function() {
        $(body).toggleClass("switch");
    })
    
    $("#go_brands").click(function() {
       $('html, body').animate({
           scrollTop: $("#brands").offset().top
       }, 900); 
    })
    
    $("#go_location").click(function() {
       $('html, body').animate({
           scrollTop: $("#location").offset().top
       }, 900); 
    })
    
    $("#go_contact").click(function() {
       $('html, body').animate({
           scrollTop: $("#contact").offset().top
       }, 900); 
    })
        
    $(".name_side").click(function() {
        $(this).toggleClass("yellow");
    })
        
    $(".emphasis").click(function() {
        $(this).toggleClass("yellow");
    })
    
    $("#slides").slidesjs({
        width: 940,
        height: 780,
        navigation: {
          effect: "fade"
        },
        pagination: {
          effect: "fade"
        },
        effect: {
          fade: {
            speed: 600
          }
        }
      })
    
});