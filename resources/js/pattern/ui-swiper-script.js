$(document).ready(function () {
  var swiper = new Swiper('.swiper_container', {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    effect: 'coverflow',
    speed: 800,
    parallax: true,
    coverflowEffect: {
      rotate: 30,
      stretch: 10,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 1500,
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

// $(document).ready(function () {
//   var swiper = new Swiper('.swiper_video', {
//     direction: 'vertical',
//     rewind: true,
//     // slidesPerView: 0,
//     // spaceBetween: 30,
//     mousewheel: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });
// });
