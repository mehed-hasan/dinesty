

// Cookies modal 
$(".cookie_btn .btn").click(function(){
  $(".cookies_modal").slideUp(500);
})

// Code for preloader will be disappeared after all contents being loaded ----------------------------------------------------------*****
$(window).on('load', function () {
    $("#preloader ").fadeOut(500); 
    $("#main").css({'overflow':'unset'}); 
    $(".cookies_modal").slideDown(700);

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
        $("#chat").css({
          "opacity":"1",
          "visibility":"visible"
        });
        $(this).fadeOut(500);
      });

      $(".close_chat").click(function(){
        $("#chat").css({
          "opacity":"0",
          "visibility":"hidden"
        });
        $(".chat_btn").fadeIn(500);
      });


















      // Add to cart  -------------------------------------------------------

      var cartedData =[];
      let is_exist = "";

      let prevData = window.localStorage.getItem("cartedData");
      prevData = JSON.parse(prevData);

      if(prevData === null){
        cartedData =[];
      }
      else{
         cartedData = prevData ;
      }
      



//       $(".__").click(function(){
//         var item = $(this).parent().parent();
//         var item_id = item.find(".product_info").attr("id");
//         var item_img = item.find(".products_img").attr("style");
//         var item_name = item.find(".heading_2").text();
//         var item_price = parseInt(item.find(".filter_btn_active").attr('data-price'));
//         var item_ml = item.find(".filter_btn_active").text();

//         var data = {
//           product_name:item_name, 
//           product_id : item_id,
//           product_img: item_img,
//           product_price:item_price,
//           product_ml:item_ml
//         }

       

//         if(cartedData.length < 1){
//           cartedData.push(data);
//         }else{
//           //  If already carted 

//           for (let index = 0; index < cartedData.length; index++) {
//             if(cartedData[index].product_id == item_id){
//               is_exist = "y"; //Marked as exist
//              } else{
//               // Not Available so dont push it 
//                is_exist = "n"; //Marked as not exist

//              }
//           }

//           if(is_exist == "n"){
//             // Push 
//             cartedData.push(data);
//           }else{
//             // Dont push  update carted quantity....
           
            
//           }
//         }

        
//       // console.log(cartedData);

//       window.localStorage.setItem("cartedData", JSON.stringify(cartedData));

//       fetch_console_data();
//       fetch_cart_data ();
// });


// fetch_console_data();

// function fetch_console_data(){
// let localData = window.localStorage.getItem("cartedData");
// var array = JSON.parse(localData);
// if(array === null ){
//   console.log("No data");
// }else{
//   console.log(array);
// }

// }







// fetch_cart_data ();

// function fetch_cart_data(){
//   var cart_items = document.querySelector('.all_carteds');
//   $(".carted").remove();

//   let localData = window.localStorage.getItem("cartedData");
//   var array = JSON.parse(localData);

//   if(array === null){
//     //No data
//   }else{



//     for (var i = 0; i < array.length; i++) {
//       var product_id = array[i].product_id;
//       var product_img = array[i].product_img;
//       var product_ml = array[i].product_ml;
//       var product_name = array[i].product_name;
//       var product_price = array[i].product_price;
  
//       console.log(array.length);
  
//       var carted = document.createElement('div');
//       carted.className = 'carted';
//       carted.id = product_id ;
//       carted.innerHTML =
        
//       `<a role="button" class="item_delete">
//                     <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M25 7L7 25" stroke="#25306C" stroke-width="2" stroke-linecap="round"
//                         stroke-linejoin="round" />
//                       <path d="M25 25L7 7" stroke="#25306C" stroke-width="2" stroke-linecap="round"
//                         stroke-linejoin="round" />
//                   </svg> 
//       </a>
  
  
//       <div class="product_img carted_product text">
//       <img class="img-fluid" src="assets/images/products/Frame 89.svg" alt="">
  
//       <div class="heading_title">
//         <h3 class="title">`+product_name+`</h3>
//         <a class="filter_btn_active align-text-bottom">`+product_ml+`</a>
//       </div>
  
  
//       <div class="quantity">
//         <div class="btn-group counter_btn" role="group" aria-label="Basic outlined example"
//           style="display: flex;">
//           <button type="button" class="btn  add_btn">+</button>
//           <input class="text-center" type="number" disabled="" value="1">
//           <button type="button" class="btn remove_btn"> - </button>
//         </div>
  
//         <div class="quantity_price justify-content-center justify-content-md-start">
//           <small>BDT</small> <span>` +product_price+`</span>
//         </div>
//       </div>
//     </div>
//       `
//      cart_items.append(carted);
//     }
//   }


  
// }

// // reset();

// function reset(){
//   localStorage.clear();
//   is_exist = "";
// }
