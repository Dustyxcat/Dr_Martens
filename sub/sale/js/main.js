$(document).ready(function () {
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



  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.4,
    spaceBetween: 30,
    freeMode: true,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2.4,
        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 3.4,
        spaceBetween: 20,
      },
    },
  });
}); //end