// 當裝置寬度為 768px 時執行 swiper
if (window.screen.width >= 768) {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30
    });
}