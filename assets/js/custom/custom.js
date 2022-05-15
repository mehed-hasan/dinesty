

// Code for preloader will be disappeared after all contents being loaded ----------------------------------------------------------*****
$(window).on('load', function () {
    $("#preloader ").fadeOut(500); 
    $("#main").css({'overflow':'unset'}); 

});
// Code for preloader will be disappeared after all contents being loaded ######################################-------------------------- Ended 



    $(window).scroll(function(){
        change_nav_color();
    });

    $(window).ready(function(){
        change_nav_color();
    });



    function change_nav_color(){
        var scroll = $(window).scrollTop();
        if (scroll > 5) {
          $(".navbar").removeClass("change_nav");
        }

        else{
            $(".navbar").addClass("change_nav");
        }
    }


    $(".filter_btn").click(function(){
        $(this).parent().find(".filter_btn_active").attr("class","filter_btn");
        $(this).attr("class","filter_btn_active");

    });
