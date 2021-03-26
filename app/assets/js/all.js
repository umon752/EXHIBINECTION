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











/* banner 背景動態效果 */
window.onload = init;
const banner = document.getElementsByClassName('banner__img')[0];
const bannerItem = document.getElementsByClassName('banner__img__item');

function init() {
  for (let i = 1; i < 400; i++) {
    banner.innerHTML += `<div class="banner__img__item"></div>`;
    const duration = Math.random() * 1100;
    bannerItem[i].style.animationDuration = duration + 250 + 'ms';
    bannerItem[i].style.animationDelay = duration - 50 + 'ms';
  }
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