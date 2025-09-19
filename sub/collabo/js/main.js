$(document).ready(function () {
  $(".heart_wrap").click(function () {
    $(this).children(".fill_heart").toggleClass("active");
  });

  $(window).scroll(function () {
    var pageY = $(window).scrollTop();

    if (pageY > 500) {
      $("header").css({
        position: "fixed",
      });
    } else if (pageY < 500) {
      $("header").css({
        position: "relative",
      });
    }
  }); // scroll event end

  var swiper = new Swiper(".tab_sub_con_wrap", {
    slidesPerView: 2.4,
    spaceBetween: 12,
    freeMode: true
  });

  $(".ham").click(function () {
    $(".mob_menu_wrap").addClass("active_wrap");
  });

  $(".exit").click(function () {
    $(".mob_menu_wrap").removeClass("active_wrap");
  });

  $(".mob_menu_con").click(function () {
    var clicked = $(this).index();

    $(".mob_menu_con")
      .removeClass("active_menu")
      .eq(clicked)
      .addClass("active_menu");
    $(".mob_menu_con")
      .removeClass("active_line")
      .eq(clicked)
      .addClass("active_line");
  }); //click event end
}); //end
