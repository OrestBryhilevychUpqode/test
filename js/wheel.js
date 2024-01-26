const swiperWheel = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    mousewheel: true,
    slidesPerView: 7,
    spaceBetween: 40,
    watchOverflow: true,
    centeredSlides: true,
    on: {
        slideChange: function () {
            setTimeout(() => {
                $('.hb-wheel-content-con.swiper-slide').css('display', 'none');
                $('.hb-wheel-content-con.swiper-slide').css('opacity', '0');

                id = $('.swiper .swiper-slide.swiper-slide-active').attr(
                    'data-w-slide-id'
                );
                $(`[data-w-slide-con="${id}"]`).css('display', 'block');
            }, 10);

            setTimeout(() => {
                $(`[data-w-slide-con="${id}"]`).css('opacity', '1');
            }, 20);
        },
    },
});

$('.hb-wheel-content-con.swiper-slide').css('display', 'none');
