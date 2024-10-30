window.history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

$(document).ready(function () {
  const lottieAnimation = $('#lottie00')[0];
  lottieAnimation.play();
  // lottieAnimation.seek();
});

$(document).ready(function () {
  const header = $('.header');
  const gnbBtn = header.find('.btn_gnb');
  const subMenuBtn = header.find('.gnb_link.link_04');
  const subMenuArea = header.find('.sub_menu_area');

  // gnb 버튼 클릭 시 active 토글
  gnbBtn.on('click', function () {
    header.addClass('active');
    gnbBtn.addClass('on');
    $('.gnb_list_box').slideToggle(500);
  });

  // 서브 메뉴 버튼 클릭 시 서브 메뉴 열기/닫기
  subMenuBtn.on('click', function () {
    subMenuArea.toggleClass('open');
  });
});

// document.addEventListener('scroll', function () {
//   const recordSection = document.querySelector('#record');
//   const swiperSection = document.querySelector('.swiper');
//   const contSection = document.querySelector('.container_wrap');
//   const scrollPosition = window.scrollY;
//   const windowHeight = window.innerHeight;
// });

// document.addEventListener('scroll', function () {
//   const title = document.querySelector('.title');
//   const text01 = document.querySelector('.title .text01');
//   const text02 = document.querySelector('.title .text02');
//   const text03 = document.querySelector('.title .text03');
//   const scrollPosition = window.scrollY;
//   const windowHeight = window.innerHeight;

//   if (scrollPosition > windowHeight * 0.4) {
//     text01.style.opacity = '1';
//   } else {
//     text01.style.opacity = '0';
//   }

//   if (scrollPosition > windowHeight * 0.8) {
//     text02.style.opacity = '1';
//   } else {
//     text02.style.opacity = '0';
//   }

//   if (scrollPosition > windowHeight * 0.9) {
//     text03.style.opacity = '1';
//   } else {
//     text03.style.opacity = '0';
//   }

//   if (scrollPosition > windowHeight * 1.0) {
//     const scaleValue = Math.max(1 - (scrollPosition - windowHeight * 1.0) / (windowHeight * 0.5), 0.5); // 0.5까지 축소
//     const opacityValue = Math.max(1 - (scrollPosition - windowHeight * 1.0) / (windowHeight * 0.5), 0); // opacity도 천천히 0까지

//     title.style.transform = `scale(${scaleValue})`;
//     title.style.opacity = opacityValue;
//   } else {
//     // 초기 상태로
//     title.style.transform = 'scale(1)';
//     title.style.opacity = '1';
//   }
// });

// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;
//   const contentStart = 500; // 스크롤 위치를 기준 `record_img_wrap`의 opacity시작위치
//   const scaleEnd = 1500; // 스케일 축소가 완료되는 위치
//   const recordAniWrap = document.querySelector('.record_ani_wrap');
//   const recordImgWrap = document.querySelector('.record_img_wrap.black');
//   const recordImgInner = document.querySelector('.record_img_inner');

//   if (scrollPosition > contentStart && scrollPosition < scaleEnd) {
//     const wrapOpacity = Math.min((scrollPosition - contentStart) / 500, 1);
//     recordImgWrap.style.opacity = wrapOpacity;
//   } else {
//     const wrapOpacity = Math.max(1 - (contentStart - scrollPosition) / 0, 0);
//     recordImgWrap.style.opacity = wrapOpacity;
//   }

//   if (scrollPosition >= contentStart + 1 && scrollPosition < scaleEnd) {
//     const scaleValue = Math.max(1.4 - (scrollPosition - contentStart - 500) / 500, 1);
//     const wrapOpacity = Math.max(1 - (scrollPosition - contentStart - 500) / 500, 0);

//     recordImgInner.style.transform = `scale(${scaleValue})`;
//     recordImgWrap.style.opacity = wrapOpacity;
//     recordAniWrap.style.opacity = wrapOpacity;
//   }
// });

// [D] spot dimmed 되어가는 인터랙션 예시 코드
$(document).ready(function () {
  var scroll = $(window).scrollTop();
  var height = $(window).height();

  if (scroll <= 0) {
    $('.record_img_wrap').css({ opacity: 0 });
  }

  $(window).bind('scroll', function () {
    var scroll = $(window).scrollTop();
    var height = $(window).height();

    if (scroll > 0) {
      if (scroll < height) {
        $('.record_img_wrap').css({ opacity: scroll / 600 });
      }
      // 스크롤 후 spot 영역 배경 투명도
      if (scroll >= height) {
        $('.record_img_wrap').css({ opacity: 1 });
      }
      // 스크롤이 0일떄 스타일 초기화
    } else if (scroll <= 0) {
      $('.record_img_wrap').css({ opacity: 0 });
    }
  });
});
