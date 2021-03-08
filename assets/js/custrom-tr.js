$(document).ready(function() {
	new WOW().init();

  $('.top_header .search_box p').click(function() {
    $('.search_box').toggleClass('active');
  });

  $('.slider_banner').slick({
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
    lazyLoad: 'ondemand',
  });

  $.Tween.propHooks.number = {
    get: function(tween) {
      var num = tween.elem.innerHTML.replace(/^[^\d-]+/, "");
      return parseFloat(num) || 0;
    },

    set: function(tween) {
      var opts = tween.options;
      tween.elem.innerHTML =
        (opts.prefix || "") +
        tween.now.toFixed(opts.fixed || 0) +
        (opts.postfix || "");
    }
  };

  $("#num-1").animate(
    { number: 10 },
    {
      duration: 2000,
      postfix: ""
    }
  );

  $("#num-2")
  .delay(0)
  .animate(
    { number: 1000 },
    {
      duration: 1500,
      postfix: "+"
    }
  );

  $("#num-3")
  .delay(0)
    .animate(
    { number: 100 },
    {
        duration: 2000,
        postfix: "+"
    }
  );



  /*

  $('.slider_news').slick({
    dots: false,
    slidesToShow: 1,
    autoplay: false,
    arrows: false,
  });

  $('.element_donviphanphoi').slick({
    dots: false,
    slidesToShow: 4,
    autoplay: false,
    arrows: false,
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });
  $('.toggle_menu').click(function() {
    $('.section_header').toggleClass('section_header_fixed fixed_color');
    
  });


  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.section_header').removeClass('section_header_fixed');
      $('.section_header').removeClass('fixed_color');

    } else {
      $('.section_header').addClass('section_header_fixed');

    }

    if ($(this).scrollTop() > 400) {
      $('.section_fixed_menu').addClass('change_color');
    } else {
      $('.section_fixed_menu').removeClass('change_color');
    }
  });

  $('.element_tongquanduan').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.img_tongquanduan'
  });
  $('.img_tongquanduan').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.element_tongquanduan',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    dots: false,
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
        $('.top-up').fadeIn();
    } else {
        $('.top-up').fadeOut();
    }
  });
  $('.top-up').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });*/
    
});

/*var widthpage = $(window).width();
if (widthpage <= 1560) {
  $('.container').removeClass('container_fluid');
}

var widthpage = $(window).width();
if (widthpage <= 570) {
  $('.section_header').removeClass('section_header_fixed');
  $('.hotline').addClass('circle');
  $('.dangkinhantin_mobi').addClass('circle');

}

$('.submenu_mobi').click(function(){
  $('.section_header').toggleClass('section_header_fixed_mobi');
});*/