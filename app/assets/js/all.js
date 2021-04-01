/* DOM */
// loading
const loading = document.querySelector('.loading');
const textWrapper = document.querySelector('.js-loadingText');
const time = 1500;
// addCart
const addCartBtn = document.querySelector('.js-addCart');
const cartList = document.querySelector('.cart');
const body = document.querySelector('body');
// 讓 hideCart 在 showCart 執行後才可執行
let toggleShow = false;



/* Anime */
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='inline-block'>$&</span>");

anime.timeline({
    loop: true
  })
  .add({
    targets: '.js-loadingText .inline-block',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.js-loadingText .inline-block',
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });


// loading 消失
setTimeout(function () {
  loading.classList.add('loading--fadeOut');

  /* AOS */
  AOS.init({
    easing: 'ease',
    duration: 600,
    once: true
  });

}, time);



// 當裝置寬度為 768px 時執行
if (window.screen.width >= 768) {
  const isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
  const isEdge = window.navigator.userAgent.indexOf("Edge") !== -1;

  if (isChrome || isEdge) {
    /* banner 背景動態效果 */
    const banner = document.querySelector('.banner');
    const bannerImg = document.getElementsByClassName('banner__img')[0];
    const bannerItem = document.getElementsByClassName('banner__img__item');
    banner.classList.add('js-bannerEffect');

    window.onload = init;

    function init() {
      for (let i = 1; i < 400; i++) {
        bannerImg.innerHTML += `<div class="banner__img__item"></div>`;
        const duration = Math.random() * 1100;
        bannerItem[i].style.animationDuration = duration + 250 + 'ms';
        bannerItem[i].style.animationDelay = duration - 50 + 'ms';
      }
    }
  }



  /* swiper */
  const swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 3,
    spaceBetween: 30
  });

  // 滑鼠摸到暫停輪播
  swiper.el.onmouseover = function () {
    swiper.autoplay.stop();
  };
  // 滑鼠離開繼續輪播
  swiper.el.onmouseleave = function () {
    swiper.autoplay.start();
  };
}



/* cartToggle*/
// 顯示 aside
function showCart(e) {
  e.stopPropagation();
  cartList.classList.add('cart--toggle');
  toggleShow = true;
}

// 讓 aside 區域點擊不會被 hideCart 隱藏
function unClick(e) {
  e.stopPropagation();
}

// 隱藏 aside
function hideCart(e) {
  if (toggleShow) {
    cartList.classList.remove('cart--toggle');
    toggleShow = false;
  }
}

addCartBtn.addEventListener('click', showCart, false);
cartList.addEventListener('click', unClick, false);
body.addEventListener('click', hideCart, false);