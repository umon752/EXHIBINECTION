// 當裝置寬度為 768px 時執行 swiper
if (window.screen.width >= 768) {
    const swiper = new Swiper('.swiper-container', {
        // initialSlide: 0,
        // observer: true, //修改swiper自己或子元素時，自動初始化swiper 
        // observeParents: true, //修改swiper的父元素時，自動初始化swiper 
        autoplay: {
            delay: 2000,
        },
        slidesPerView: 3,
        spaceBetween: 30
    });

    swiper.el.onmouseover = function () { // 滑鼠摸到暫停輪播
        swiper.autoplay.stop();
    };
    swiper.el.onmouseleave = function () { // 滑鼠離開繼續輪播
        swiper.autoplay.start();
    };

    // setTimeout(function () {
    //     swiper.init();
    // }, 1000);
}