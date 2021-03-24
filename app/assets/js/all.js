AOS.init({
  easing: 'ease',
  duration: 600,
  once: true
});


// addCart
const addCartBtn = document.querySelector('.js-addCart');
const cartList = document.querySelector('.cart');
const body = document.querySelector('body');
// 讓 hideCart 在 showCart 執行後才可執行
let toggleShow = false;

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


// banner 背景動態效果
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