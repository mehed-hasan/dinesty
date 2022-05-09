

// Code for preloader will be disappeared after all contents being loaded ----------------------------------------------------------*****
$(window).on('load', function () {
    $(".left_bar ").fadeOut(500); 
    $(".left_bar img").fadeOut(200);
    $("#main").css({'overflow':'unset'}); 


});
// Code for preloader will be disappeared after all contents being loaded ######################################-------------------------- Ended 
