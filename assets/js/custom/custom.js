

// Code for preloader will be disappeared after all contents being loaded ----------------------------------------------------------*****
$(window).on('load', function () {
    $("#preloader ").fadeOut(500); 
    $("#main").css({'overflow':'unset'}); 

});



$(".nav_search, #navbar form svg").click(function () {
  $(".search_modal").modal('show');
});

    $(".filter_btn_active").each(function(){
        $price_val = $(this).parent().find(".filter_btn_active").attr("data-price");
        $(this).parent().parent().find(".p_price").text($price_val+".00");
      });

    $(".filter_btn, .filter_btn_active").click(function(){
        $(this).parent().find(".filter_btn_active").attr("class","filter_btn");
        $(this).attr("class","filter_btn_active");

        $price_val = $(this).parent().find(".filter_btn_active").attr("data-price");
        $(this).parent().parent().find(".p_price").text($price_val+".00");
    });



    
        // counter btn script
        $initial_price = $(".quantity_price span").text();
        $(".add_btn").click(function(){
            $current_val = parseInt($(this).parent().parent().parent().find("input").val());
            $update_val = $current_val + 1;
            $(this).parent().parent().parent().find("input").val($update_val);

          calculate_price($update_val);
        });
    
        $(".remove_btn").click(function(){
            $current_val = parseInt($(this).parent().parent().parent().find("input").val());

            $update_val = $current_val - 1;
            $(this).parent().parent().parent().find("input").val($update_val);
    
            if($update_val < 1){
              $(this).parent().parent().parent().find("input").val(1);
              $(".quantity_price span").text($initial_price+".00");

            }else{
              calculate_price($update_val);
            }
            
        });

        function calculate_price($updated_val){
          
          $initial_price = parseInt($initial_price);
          $total_price = $initial_price * $updated_val;
          $(".quantity_price span").text($total_price+".00");
        }

        // Cart Sliding functionalties

        $(".cart_btn").click(function(){
          $(".cart_body").addClass("cart_body_active ");
          $("body").css({'overflow':'hidden'});


        });

   
        $(".closer, .closer_btn").click(function(){
          $(".cart_body").removeClass("cart_body_active");
          $("body").css({'overflow':'unset'});
        });

        // Cart Sliding functionalties









        // Search nav js 

        $.expr[":"].icontains = $.expr.createPseudo(function(arg) {
          return function( elem ) {
              return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
          };
      });
      
      
      $('.data_search').keyup(function(){
        var query = $(this).val();
        
        $('.search_results a:not(:icontains('+ query +'))').slideUp(100);
        $('.search_results a:not(:icontains('+ query +'))').next('div').slideUp(100);
        $('.search_results a:icontains('+ query +')').slideDown(100);
        $('.search_results a:icontains('+ query +')').next('div').slideDown(100);
        
        
        
      });




      $(".chat_btn").click(function(){
        $(".chat_panel").css({
          "opacity":"1",
          "visibility":"visible"
        });
        $(this).fadeOut(500);
      });

      $(".close_chat").click(function(){
        $(".chat_panel").css({
          "opacity":"0",
          "visibility":"hidden"
        });
        $(".chat_btn").fadeIn(500);
      });
      
      