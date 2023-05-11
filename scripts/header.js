$(function() {
    let target = $(".header").offset().top;
    $(window).on("scroll", function() {
      let currentPos = $(window).scrollTop();
      if(currentPos > target) {
        $(".header").addClass('sticky');
      } else{
        $(".header").removeClass('sticky');
      }
    });
});