

// Code for preloader will be disappeared after all contents being loaded ----------------------------------------------------------*****
$(window).on('load', function () {
    $("#preloader ").fadeOut(500); 
    $("#main").css({'overflow':'unset'}); 

});
// Code for preloader will be disappeared after all contents being loaded ######################################-------------------------- Ended 
