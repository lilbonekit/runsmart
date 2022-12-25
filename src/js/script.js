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

    toggleItem('.catalog-item__link')
    toggleItem('.catalog-item__back')
  });