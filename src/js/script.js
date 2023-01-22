$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        centerPadding: '50px',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/fouth-section/chevron-left-solid.png" alt="left" class="carousel_img"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/fouth-section/chevron-right-solid.png" alt="right" class="carousel_img"></button>',
        responsive: [
            {
              breakpoint: 985,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('.container').find('div.catalog__wrapper').removeClass('catalog__wrapper_active').eq($(this).index()).addClass('catalog__wrapper_active');
    });

    function toggleItem(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })
    }
    
    toggleItem('.catalog-item__link');
    toggleItem('.catalog-item__back');
    
    //consultation btn
/*     $('[data-modal = consultation]').fadeOut; */

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').css('display', 'flex')
    });

    //close modal

    $('.modal__close').on('click', function() {
      $('.overlay, .modal').fadeOut();
    });

    $('.button_product-buy').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__title').text($('catalog-item__title').eq(i).text());
        $('.overlay, #order').css('display', 'flex');
      })
    });
  
  function validateForms(form){
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
              },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
        }
    });
  };

  $(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
      $('.scroll-up').fadeIn();
    } else {
      $('.scroll-up').fadeOut();
    }
  });

validateForms('#consultation-form');
validateForms('#consultation form');
validateForms('#order form');

$("input[name=phone]").mask("+38(999) 999-99-99");

/* $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $("#consultation, #order").fadeOut();
      $(".overlay, #thanks").css('display', 'flex');
    });

    $('form').trigger('reset');
});
return false; */

$('form').submit(function(e) {
  e.preventDefault();

  if (!$(this).valid()) {
      return;
  }

  $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').css('display', 'flex');
      $('form').trigger('reset');
  });
  return false;
});

});
