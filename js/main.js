$ (function(){

    $('.header__language-ru').on('click', function(){
        $(this).addClass('header__language-btn--active');
        $('.header__language-ua').removeClass('header__language-btn--active');
    });
    
    $('.header__language-ua').on('click', function(){
        $(this).addClass('header__language-btn--active');
        $('.header__language-ru').removeClass('header__language-btn--active');
    });




    $('.header-bottom__catalog, .header-bottom__goods, .header-info__phone-city, .header-info__phone-address, .mobile-img__menu-menu, .category-page__filter-mobile').on('click', function(){
        $(this).toggleClass('header-bottom__catalog--active');
        $(this).next().slideToggle('500')
    });


    $('.section__slider-inner').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '  <button class="section__slider-btn section__slider-btnprev"><img src="images/arrow-slider-left.svg" alt=""></button>',
        nextArrow: ' <button class="section__slider-btn section__slider-btnnext"><img src="images/arrow-slider-right.svg" alt=""></button>',
        responsive: [
            {
            breakpoint: 1466,
            settings: {
                arrows: false,
                dots: true,
              }
            },
        ]
    });




    $('.product-one__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product-one__tabs .tabs').find('.tab').removeClass('active');
            $($(this).closest('.tabs').siblings().find('div')).removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            $('.product-slider').slick('setPosition');
            return false;
    
        });





    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
            breakpoint: 1236,
            settings: {
                slidesToShow: 3,
                dots: true,
              }
            },
            {
            breakpoint: 1071,
            settings: {
                slidesToShow: 2,
                dots: true,
                }
            },
            {
            breakpoint: 701,
            settings: {
                slidesToShow: 1,
                arrows: true,
                dots: false,
                prevArrow: '  <button class="section__slider-btn section__slider-btnprev"><img src="images/arrow-slider-left.svg" alt=""></button>',
                nextArrow: ' <button class="section__slider-btn section__slider-btnnext"><img src="images/arrow-slider-right.svg" alt=""></button>',
                }
            },
            
        ]
    });


    $('.product-new__slider-inner').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
    });

    $('.last-news__slider-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
            breakpoint: 1425,
            settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true,
              }
            },
            {
            breakpoint: 1151,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
                }
            },
            {
            breakpoint: 771,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
                }
            },
            
        ]

    });


    $(".rate-star").rateYo({
        rating: 4,
        starWidth: "22px",
        normalFill: "#248081",
        ratedFill: "#fff",
        halfStar: true,
        spacing: "9px",
    });

    $(".rateyo-star, rateyo-star__product").rateYo({
        rating: 4,
        starWidth: "22px",
        normalFill: "#E5E5E5",
        ratedFill: "#50CCCD",
        halfStar: true,
        spacing: "9px",
    });

    $('.reviews__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
            breakpoint: 1051,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
              }
            },
            {
            breakpoint: 701,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
                }
            },
            
        ]

    });

// ---------------кнопка вверх------------------
     let button = $('.back-to-top');

     $(window).on('scroll', () => {
         if ($(this).scrollTop() >= 250){
             button.fadeIn();
         }else{
             button.fadeOut();
         }
     });

     button.on('click', (e) => {
         e.preventDefault();
         $('html').animate({scrollTop: 0}, 1000);
     });
    
// ---------------/кнопка вверх------------------

     $('.category-page__content-style, .product-choice__content-style, .product-choice__radio-style').styler();

     $('.filter__item-drop').on('click', function(){
        $(this).toggleClass('category-page__menu-title--active');
        $(this).next().slideToggle('500')
    });




    
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 200,
        to: 500,
        grid: true
    });

    $('.product-card__slider-inner').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
            breakpoint: 801,
            settings: {
                slidesToShow: 4,
                dots: true,
              }
            },
            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                  }
                },
                {
                    breakpoint: 461,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                      }
                    },
        ]

    });


    $('.tab').on('click', function(e){
        e.preventDefault();
    $($(this).siblings()).removeClass('tab--active');
    // ---------перед добавлением класса overflow------------
    // $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
    // --------------------------------------------------------
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
    
    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

    $('.product-slider').slick('setPosition');
    
    });


    $(".buyers-reviews__rateyo").rateYo({
        rating: 4,
        starWidth: "16px",
        normalFill: "#E5E5E5",
        ratedFill: "#50CCCD",
        halfStar: true,
        spacing: "9px",
    });


    $('.mobile-img__menu-popup').magnificPopup({

      });


      $('.mobile__topdrop').on('click', function(){
        $(this).next().slideToggle();
        $(this).toggleClass('mobile__topdrop--active');
    });

    $('.header-bottom__list-menu-btn').on('click', function(){
        $('.header-bottom__list-menu').toggleClass('header-bottom__list-menu--active');
    });

    $('.footer__topdrop').on('click', function(){
        $(this).next().slideToggle();
        $(this).toggleClass('footer__topdrop--active');
    });


    $('.category-page__filter-mobile').on('click', function(){
        $(this).toggleClass('catalog-menu__mobile--active');
        // $(this).next().slideToggle('500')
    });

    $('.category-page__filter-inner-block').on('click', function(){
        $(this).toggleClass('category-page__catalog-menu-block--active');
        $(this).next().slideToggle('500')
    });


});