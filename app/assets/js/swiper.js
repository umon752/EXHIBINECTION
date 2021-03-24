// 當裝置寬度為 768px 時執行 swiper
if (window.screen.width >= 768) {
    // swiper.destroy(false);

    const swiper = new Swiper('.swiper-container', {
        // slidesPerView: 3,
        // centeredSlides: true,
        // spaceBetween: 30,
        // effect: 'coverflow',
        // grabCursor: true,
        // centeredSlides: true,
        slidesPerView: '3',
        // centeredSlides: true,
        spaceBetween: 30,
        // coverflowEffect: {
        //     rotate: 50,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 1,
        //     slideShadows: true,
        // },
        // pagination: {
        //     el: '.swiper-pagination',
        // },
        // loop: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        // virtual: {
        //     slides: (function () {
        //         var slides = [];
        //         for (var i = 0; i < 600; i += 1) {
        //             slides.push('Slide ' + (i + 1));
        //         }
        //         return slides;
        //     }()),
        // },
    });
}