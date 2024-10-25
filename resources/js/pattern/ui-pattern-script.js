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
  if (scrollPosition > windowHeight * 0.5) {
    swiperSection.style.opacity = '0'; // 첫 번째 섹션을 서서히 사라지게 함
    contSection.style.opacity = '0'; // 첫 번째 섹션을 서서히 사라지게 함
    recordSection.style.opacity = '1'; // 두 번째 섹션이 나타남
    recordSection.style.transform = 'translateY(0)'; // 두 번째 섹션이 자리잡음
  } else {
    swiperSection.style.opacity = '1'; // 첫 번째 섹션 유지
    contSection.style.opacity = '1'; // 첫 번째 섹션 유지
    recordSection.style.opacity = '0'; // 두 번째 섹션 숨김
    // recordSection.style.transform = 'translateY(50px)'; // 서서히 아래에서 올라옴
  }
});

document.addEventListener('scroll', function () {
  const title = document.querySelector('.title');
  const text01 = document.querySelector('.title .text01');
  const text02 = document.querySelector('.title .text02');
  const text03 = document.querySelector('.title .text03');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  // 스크롤 위치에 따라 각 텍스트의 opacity를 0에서 1로 변경
  if (scrollPosition > windowHeight * 0.5) {
    text01.style.opacity = '1'; // 첫 번째 텍스트가 서서히 나타남
  } else {
    text01.style.opacity = '0';
  }

  if (scrollPosition > windowHeight * 0.7) {
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

document.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  const scrollFactor = Math.min(scrollPosition / windowHeight, 1); // 0에서 1까지 스크롤 비율 계산
  const screenWidth = window.innerWidth;
  let positions;

  // 이미지 요소들
  const img01 = document.querySelector('.record__img01 img');
  const img02 = document.querySelector('.record__img02 img');
  const img03 = document.querySelector('.record__img03 img');
  const img04 = document.querySelector('.record__img04 img');
  const img05 = document.querySelector('.record__img05 img');
  const img06 = document.querySelector('.record__img06 img');
  // const img07 = document.querySelector('.record__img07 img');

  // 이미지가 이동할 초기와 최종 좌표 정의
  if (screenWidth <= 599) {
    positions = [
      { img: img01, startX: 0, startY: 0, finalX: 100, finalY: 200 },
      { img: img02, startX: 0, startY: -43, finalX: 50, finalY: 150 },
      { img: img03, startX: 248, startY: 300, finalX: -20, finalY: -60 },
      { img: img04, startX: 302, startY: 0, finalX: 20, finalY: 40 },
      { img: img05, startX: 0, startY: 233, finalX: 100, finalY: 30 },
      { img: img06, startX: 418, startY: 138, finalX: -57, finalY: -20 },
      // { img: img07, startX: 366, startY: 516, finalX: -250, finalY: -320 },
    ];
  }
  // mobileMore 화면 크기 (600px 이상 1024px 이하)
  else if (screenWidth >= 600 && screenWidth <= 1024) {
    positions = [
      { img: img01, startX: 0, startY: 0, finalX: 150, finalY: 250 },
      { img: img02, startX: 0, startY: -63, finalX: 70, finalY: 200 },
      { img: img03, startX: 298, startY: 350, finalX: -30, finalY: -80 },
      { img: img04, startX: 352, startY: 0, finalX: 30, finalY: 60 },
      { img: img05, startX: 0, startY: 283, finalX: 150, finalY: 50 },
      { img: img06, startX: 468, startY: 188, finalX: -87, finalY: -40 },
    ];
  }

  // tabletMore 화면 크기 (1025px 이상)
  else if (screenWidth >= 1025) {
    positions = [
      { img: img01, startX: 0, startY: 0, finalX: 200, finalY: 300 },
      { img: img02, startX: 0, startY: -83, finalX: 90, finalY: 250 },
      { img: img03, startX: 348, startY: 400, finalX: -40, finalY: -100 },
      { img: img04, startX: 402, startY: 0, finalX: 40, finalY: 80 },
      { img: img05, startX: 0, startY: 333, finalX: 200, finalY: 70 },
      { img: img06, startX: 518, startY: 238, finalX: -117, finalY: -60 },
    ];
  }
  // 모든 이미지를 스크롤에 따라 이동 및 opacity 조정
  positions.forEach(({ img, startX, startY, finalX, finalY }) => {
    if (img) {
      // 이동 계산 (각 이미지가 점차적으로 이동)
      const currentX = (finalX - startX) * scrollFactor + startX;
      const currentY = (finalY - startY) * scrollFactor + startY;
      const scaleValue = scrollFactor > 0.6 ? 1 - (scrollFactor - 0.6) * 0.5 : 1;
      img.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scaleValue})`;

      // opacity 변화: 0.3 이후 나타나고, 0.6 이후 흐려짐
      if (scrollFactor > 0.6) {
        img.style.opacity = 1 - (scrollFactor - 0.6) * (1 / 0.4); // 0.6 이후 점차 흐려짐
      } else if (scrollFactor >= 0.3 && scrollFactor <= 0.6) {
        img.style.opacity = (scrollFactor - 0.3) / 0.3; // 0.3에서 0.6까지 점차 나타남
      } else {
        img.style.opacity = 0;
      }
    }
  });
  // img07에 대한 별도 처리 (opacity 및 scale 적용 안 함)
  const img07 = document.querySelector('.record__img07 img');
  if (img07) {
    const startX = 400;
    const startY = 700;
    const finalX = -140;
    const finalY = -100;

    // 이동 계산 (오직 위치만 변경)
    const currentX = (finalX - startX) * scrollFactor + startX;
    const currentY = (finalY - startY) * scrollFactor + startY;

    img07.style.transform = `translate(${currentX}px, ${currentY}px)`;
    img07.style.opacity = 0.7 + scrollFactor * 0.3;
    // img07의 opacity와 scale은 변경하지 않음
  }
});
