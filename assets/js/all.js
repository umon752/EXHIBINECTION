"use strict";

// DOM 
var loading = document.querySelector('.js-loading');
var textWrapper = document.querySelector('.js-loadingText'); // Anime Loading 動畫

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='inline-block'>$&</span>");
var animation = anime.timeline({
  loop: true
}).add({
  targets: '.js-loadingText .inline-block',
  translateX: [40, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1200,
  delay: function delay(el, i) {
    return 500 + 30 * i;
  }
}).add({
  targets: '.js-loadingText .inline-block',
  translateX: [0, -30],
  opacity: [1, 0],
  easing: "easeInExpo",
  duration: 1100,
  delay: function delay(el, i) {
    return 100 + 30 * i;
  }
});

window.onload = function () {
  // Loading 消失
  loading.classList.add('loading--fadeOut'); // Anime 停止

  animation.pause(); // 載入 AOS 

  AOS.init({
    easing: 'ease',
    duration: 600,
    once: true
  }); // 載入 Banner 動態效果

  bannerEffect();
};

function init() {
  swiper();
  detailPage();
}

;
init();

function bannerEffect() {
  // 當裝置寬度為 768px 時
  if (window.screen.width >= 768) {
    // 只在 index 時執行
    if (window.location.pathname === '/EXHIBINECTION/' || window.location.pathname === '/' || window.location.pathname.match('index')) {
      var isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
      var isEdge = window.navigator.userAgent.indexOf("Edge") !== -1;
      var banner = document.querySelector('.banner');
      var bannerImg = document.getElementsByClassName('banner__img')[0];
      var bannerItem = document.getElementsByClassName('banner__img__item'); // 只有在 Chrome 和 Edge 瀏覽器時才會執行背景動態效果 (僅 Chrome 和 Edge 支援)

      if (isChrome || isEdge) {
        banner.classList.add('js-bannerEffect');

        for (var i = 1; i < 400; i++) {
          bannerImg.innerHTML += "<div class=\"banner__img__item\"></div>";
          var duration = Math.random() * 1100;
          bannerItem[i].style.animationDuration = duration + 250 + 'ms';
          bannerItem[i].style.animationDelay = duration - 50 + 'ms';
        }
      }
    }
  }
}

;

function swiper() {
  // 只在 index、product、product_detail 時執行
  if (window.location.pathname === '/EXHIBINECTION/' || window.location.pathname === '/' || window.location.pathname.match('index') || window.location.pathname.match('/product')) {
    // 當裝置寬度為 768px 時執行
    if (window.screen.width >= 768) {
      // 載入 Swiper 
      var _swiper = new Swiper('.js-swipwer-product', {
        autoplay: {
          delay: 2000
        },
        slidesPerView: 3,
        spaceBetween: 30
      }); // 滑鼠摸到暫停輪播


      _swiper.el.onmouseover = function () {
        _swiper.autoplay.stop();
      }; // 滑鼠離開繼續輪播


      _swiper.el.onmouseleave = function () {
        _swiper.autoplay.start();
      };
    }
  }
}

;

function detailPage() {
  // 只在 product_detail 時執行
  if (window.location.pathname.match('/product_detail')) {
    // 讓 hideCart 在 showCart 執行後才可執行
    // 顯示 aside
    var showCart = function showCart(e) {
      e.stopPropagation(); // 讓 body 不會被點擊到

      cartList.classList.add('cart--toggle');
      toggleShow = true;
    }; // 讓 aside 區域點擊不會被 hideCart 隱藏


    var unClick = function unClick(e) {
      e.stopPropagation(); // 讓 body 不會被點擊到
    }; // 隱藏 aside


    var hideCart = function hideCart(e) {
      if (toggleShow) {
        cartList.classList.remove('cart--toggle');
        toggleShow = false;
      }
    };

    // DOM
    var addCartBtn = document.querySelector('.js-addCart');
    var cartList = document.querySelector('.js-cart');
    var body = document.querySelector('body');
    var toggleShow = false;
    addCartBtn.addEventListener('click', showCart, false);
    cartList.addEventListener('click', unClick, false);
    body.addEventListener('click', hideCart, false);
  }
}

;
//# sourceMappingURL=all.js.map
