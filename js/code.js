$(function () {

    //*active logo here*/

    $(".menu_icon").click(function () {

        let logo = $("nav .logo");
        let navMenu = $("#navbarSupportedContent ul");
        logo.toggleClass("activeLogo");
        navMenu.fadeToggle();
    });

    //* banner slide 

    $("#banner").slick({
        

        
      });

      //*service slider

      $(".service_slider").slick({

        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
              }
            },


            {
                breakpoint: 950,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                }
              },


              {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                }
              },
           
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });




});