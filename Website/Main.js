$(document).ready(function(){
    $('.toggle').click(function(){
        $('nav').toggleClass('active');
    });

    $('.LQcarousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.LQnext'),
        prevArrow: $('.LQprev'),
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      }); 
      
      $('.TRcarousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.TRnext'),
        prevArrow: $('.TRprev'),
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
});
    