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
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
  });