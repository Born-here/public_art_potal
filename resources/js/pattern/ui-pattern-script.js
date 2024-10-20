// document.addEventListener('DOMContentLoaded', function () {
//   // lottie00라는 id를 가진 애니메이션을 선택
//   const lottieAnimation = document.getElementById('lottie00');
// });

// // 애니메이션을 재생
// lottieAnimation.play();

// // 애니메이션 일시정지
// document.querySelector('.circle').addEventListener('click', function () {
//   lottieAnimation.pause(); // 클릭 시 애니메이션 일시 정지
// });

$(document).ready(function () {
  const lottieAnimation = $('#lottie00')[0];
  lottieAnimation.play();
  // lottieAnimation.seek();
});

// window.addEventListener('DOMContentLoaded', function () {
//   const header = document.querySelector('.header');
//   const gnbBtn = header.querySelector('.btn_gnb');
//   const subMenuBtn = header.querySelector('.gnb_link.link_04');
//   const subMenuArea = header.querySelector('.sub_menu_area');

//   gnbBtn.addEventListener('click', function () {
//     header.classList.toggle('active');
//     gnbBtn.classList.toggle('on');
//   });

//   subMenuBtn.addEventListener('click', function () {
//     subMenuArea.classList.toggle('open');
//   });
// });

// 이벤트

// // 도큐먼트가 준비가 되면 실행
// $(document).ready(function () {
// $(document).ready(function () {
//   const header = document.querySelector('.header');
//   const gnbBtn = header.querySelector('.btn_gnb');
//   const subMenuBtn = header.querySelector('.gnb_link.link_04');
//   const subMenuArea = header.querySelector('.sub_menu_area');

//   gnbBtn.ready('click', function () {
//     header.classList.toggle('active');
//     gnbBtn.classList.toggle('on');
//   });

//   subMenuBtn.ready('click', function () {
//     subMenuArea.classList.toggle('open');
//   });
// });

$(document).ready(function () {
  const header = $('.header');
  const gnbBtn = header.find('.btn_gnb');
  const subMenuBtn = header.find('.gnb_link.link_04');
  const subMenuArea = header.find('.sub_menu_area');

  // gnb 버튼 클릭 시 active 토글
  gnbBtn.on('click', function () {
    // header.addClass('active');
    // gnbBtn.addClass('on');
    $('.gnb_list_box').slideToggle(500);
  });

  // 서브 메뉴 버튼 클릭 시 서브 메뉴 열기/닫기
  subMenuBtn.on('click', function () {
    subMenuArea.toggleClass('open');
  });
});
