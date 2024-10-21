// const progressCircle = document.querySelector('.autoplay-progress svg');
// const progressContent = document.querySelector('.autoplay-progress span');
// var swiper = new Swiper('.swiper.intro.swiper-container', {
//   spaceBetween: 30,
//   centeredSlides: true,
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

$(document).ready(function () {
  var swiper = new Swiper('.swiper_container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
