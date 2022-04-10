$('.latest-articles-slider').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 576) {
        $('.cities-slider:not(.slick-initialized)').slick({
            dots: false,
            slidesToShow: 1,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        });
    } else {
        $(".cities-slider.slick-initialized").slick("unslick");
    }
});
// slick active

// password view
$('.btn-view-password').on('click', function(){
    if ($(this).siblings('.input-password').attr('type') === 'password'){
        $(this).addClass('view');
        $(this).siblings('.input-password').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $(this).siblings('.input-password').attr('type', 'password');
    }
    return false;
});

$('header .location-item').on('click', function (e) {
    e.preventDefault();
    $('header .location-cities').fadeToggle();
});

$('.mobile-menu .location-item').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu .location-cities').fadeToggle();
});

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});


$('.btn-filter').on('click', function () {
    $(this).toggleClass('open');
    $('.sidebar').slideToggle();
});