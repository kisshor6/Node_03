$(document).ready(function(){
    $('.company').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
    });
  });
  
  AOS.init({
    offset: 120,
    delay: 0,
    duration: 1200,
    easing: 'ease',
    once: true, 
    mirror: true, 
    anchorPlacement: 'top-bottom', 
  });
  
  
  $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
          $(".navbar").css("background" , "#909090");
        }
  
        else{
            $(".navbar").css("background" , "");  	
        }
    })
  })
  