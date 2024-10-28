window.history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

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
    header.addClass('active');
    gnbBtn.addClass('on');
    $('.gnb_list_box').slideToggle(500);
  });

  // 서브 메뉴 버튼 클릭 시 서브 메뉴 열기/닫기
  subMenuBtn.on('click', function () {
    subMenuArea.toggleClass('open');
  });
});

document.addEventListener('scroll', function () {
  const recordSection = document.querySelector('#record');
  const swiperSection = document.querySelector('.swiper');
  const contSection = document.querySelector('.container_wrap');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  // 스크롤 위치가 첫 번째 섹션의 끝에 도달하면 첫 번째 섹션의 내용이 사라지도록
  // if (scrollPosition > windowHeight * 0.5) {
  //   swiperSection.style.opacity = '0'; // 첫 번째 섹션을 서서히 사라지게 함
  //   contSection.style.opacity = '0'; // 첫 번째 섹션을 서서히 사라지게 함
  //   recordSection.style.opacity = '1'; // 두 번째 섹션이 나타남
  //   recordSection.style.transform = 'translateY(0)'; // 두 번째 섹션이 자리잡음
  // } else {
  //   swiperSection.style.opacity = '1'; // 첫 번째 섹션 유지
  //   contSection.style.opacity = '1'; // 첫 번째 섹션 유지
  //   recordSection.style.opacity = '0'; // 두 번째 섹션 숨김
  //   // recordSection.style.transform = 'translateY(50px)'; // 서서히 아래에서 올라옴
  // }
});

document.addEventListener('scroll', function () {
  const title = document.querySelector('.title');
  const text01 = document.querySelector('.title .text01');
  const text02 = document.querySelector('.title .text02');
  const text03 = document.querySelector('.title .text03');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  // 스크롤 위치에 따라 각 텍스트의 opacity를 0에서 1로 변경
  if (scrollPosition > windowHeight * 0.4) {
    text01.style.opacity = '1'; // 첫 번째 텍스트가 서서히 나타남
  } else {
    text01.style.opacity = '0';
  }

  if (scrollPosition > windowHeight * 0.8) {
    text02.style.opacity = '1'; // 두 번째 텍스트가 서서히 나타남
  } else {
    text02.style.opacity = '0';
  }

  if (scrollPosition > windowHeight * 0.9) {
    text03.style.opacity = '1'; // 세 번째 텍스트가 서서히 나타남
  } else {
    text03.style.opacity = '0';
  }

  if (scrollPosition > windowHeight * 1.0) {
    const scaleValue = Math.max(1 - (scrollPosition - windowHeight * 1.0) / (windowHeight * 0.5), 0.5); // 0.5까지 축소
    const opacityValue = Math.max(1 - (scrollPosition - windowHeight * 1.0) / (windowHeight * 0.5), 0); // opacity도 천천히 0까지

    title.style.transform = `scale(${scaleValue})`;
    title.style.opacity = opacityValue;
  } else {
    // 초기 상태로 복원
    title.style.transform = 'scale(1)';
    title.style.opacity = '1';
  }
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const contentStart = 500; // 스크롤 위치를 기준으로 `record_img_wrap`의 opacity가 시작될 위치
  const scaleEnd = 1500; // 스케일 축소가 완료되는 위치
  const recordAniWrap = document.querySelector('.record_ani_wrap');
  const recordImgWrap = document.querySelector('.record_img_wrap.black');
  const recordImgInner = document.querySelector('.record_img_inner');

  // 스크롤에 따라 `record_img_wrap`의 opacity가 0에서 1로 증가
  if (scrollPosition > contentStart && scrollPosition < scaleEnd) {
    const wrapOpacity = Math.min((scrollPosition - contentStart) / 500, 1);
    recordImgWrap.style.opacity = wrapOpacity;
  } else {
    // 스크롤이 다시 contentStart 이하로 돌아가면 opacity를 0으로 되돌림
    // recordImgWrap.style.opacity = 0;
    const wrapOpacity = Math.max(1 - (contentStart - scrollPosition) / 0, 0);
    recordImgWrap.style.opacity = wrapOpacity;
  }
  // 스크롤이 추가 진행되며 `record_img_inner`의 scale이 감소하고, `record_img_wrap`의 opacity가 다시 감소
  if (scrollPosition >= contentStart + 1 && scrollPosition < scaleEnd) {
    const scaleValue = Math.max(1.4 - (scrollPosition - contentStart - 500) / 500, 1);
    const wrapOpacity = Math.max(1 - (scrollPosition - contentStart - 500) / 500, 0);

    recordImgInner.style.transform = `scale(${scaleValue})`;
    recordImgWrap.style.opacity = wrapOpacity;
    recordAniWrap.style.opacity = wrapOpacity;
  }
});
