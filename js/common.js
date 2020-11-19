$('.single').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    dots: false,
    arrows: false,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplaySpeed: 6000,
    fade: true,
    cssEase: 'linear'
});

$('.single-2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    dots: false,
    arrows: false,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplaySpeed: 8000,
});

$("nav li").each(function() {
    this_li = $(this);
    if ($(this_li).find("ul").length > 0) {
        $(this_li).append('<p class="arrow_mob"></p>')
    }
});

$(".arrow_mob").on("click", function(e) {
    $(this).siblings(".sub-menu").slideToggle(300);
});

$(".burger_box").on("click", function(e) {
    $("nav").slideToggle(300);
});