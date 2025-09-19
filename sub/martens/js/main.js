$(document).ready(function(){

    
      var swiper = new Swiper(".mySwiper", {
        pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        },

        slidesPerView: 1 ,
        
        breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 1,
                    spaceBetween: 40
                }
        }
        
    });

    $('.heart_wrap').click(function(){
        $(this).children('.fill_heart').toggleClass('active');
    });


    $(window).scroll(function(){

        var pageY = $(window).scrollTop();

        if(pageY > 500){

            $("header").css({
                position: 'fixed'
            });

        }else if(pageY < 500){

            $("header").css({
                position: 'relative'
            });

        };
    }); // scroll event end

     $(".ham").click(function(){
        $(".mob_menu_wrap").addClass("active_wrap"); 
    });

    $(".exit").click(function(){
        $(".mob_menu_wrap").removeClass("active_wrap");
    });


    $(".mob_menu_con").click(function(){
        
        var clicked = $(this).index();

        $(".mob_menu_con").removeClass("active_menu").eq(clicked).addClass("active_menu");
        $(".mob_menu_con").removeClass("active_line").eq(clicked).addClass("active_line");

    }); //click event end



}); //end
