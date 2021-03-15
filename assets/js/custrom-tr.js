$(document).ready(function() {
	new WOW().init();

  $('.top_header .search_box p').click(function() {
    $('.search_box').toggleClass('active');
  });

  $('.item_video .box_video').click(function() {
    $('.video').addClass('active');
  });

  $('.close_btn').click(function() {
    $('.video').removeClass('active');
  });

  $('.slider_banner').slick({
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
    lazyLoad: 'ondemand',
  });

  /*$('.itemlist').slick({
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
    lazyLoad: 'ondemand',
  });*/

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
      duration: 4000,
      postfix: "+"
    }
  );

  $("#num-2")
  .delay(0)
  .animate(
    { number: 1000 },
    {
      duration: 4000,
      postfix: "+"
    }
  );

  $("#num-3")
  .delay(0)
    .animate(
    { number: 100 },
    {
        duration: 4000,
        postfix: "+"
    }
  );
    $("#num-4")
  .delay(0)
    .animate(
    { number: 56 },
    {
        duration: 4000,
        postfix: "+"
    }
  );

  $('.slider_video_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider_video_nav'
  });
  $('.slider_video_nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider_video_for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next3.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next4.png' alt=''></button>",
  });

  $('.slider_img_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider_img_nav',
    arrows: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/l.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/r.png' alt=''></button>",
  });
  $('.slider_img_nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider_img_for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
  });

  $('.element_testimonial').slick({
    dots: false,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next1.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next2.png' alt=''></button>",
    lazyLoad: 'ondemand',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $('.slider_hotnew').slick({
    dots: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/trai.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/phai.png' alt=''></button>",
    lazyLoad: 'ondemand',
  });

  $('.slider_partner').slick({
    dots: false,
    slidesToShow: 6,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $(window).scroll(function(){
      if ($(this).scrollTop() > 500) {
          $('.top_up').fadeIn();
      } else {
          $('.top_up').fadeOut();
      }
  });

  $('.top_up').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('.section_header').addClass('section_header_fixed');

    } else {
      $('.section_header').removeClass('section_header_fixed');
    }
  });

  $('.main_menu li.hightline').click(function(event) {
    if ($('.main_menu').hasClass('menu_tab')) {
      $('.main_menu li.hightline').not($(this)).removeClass('active');
    }
    $(this).addClass('active');
  });

  $('li.hightline .list_submenu li').click(function(event) {
    if ($('li.hightline').hasClass('active')) {
      $('li.hightline .list_submenu li').not($(this)).removeClass('active');
    }
    $(this).toggleClass('active_hightline');
  });

  $('.header_main .main_menu > li.hightline').click(function(event) {
    if ($('li.hightline').hasClass('active')) {
      $(this).not($(this)).removeClass('active');
    }
  });

  $('.icon_menu').click(function(){
    $('.header_main').toggleClass('active');
    $(this).toggleClass('active');
  });

  $('.footer_item_mobi .mobi_tab .item').click(function(event) {
    if ($('.mobi_tab').hasClass('footer_mobi_click')) {
      $('.footer_item_mobi .mobi_tab .item').not($(this)).removeClass('active');
    }
    $(this).toggleClass('active');
  });

  $('.close_btn_popup').click(function() {
    $('.section_popup').addClass('removepopup');
  });

  
  setTimeout(function(){
    $('.section_popup').css('display','flex');
  },15000);
    
});
