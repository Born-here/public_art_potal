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
    // recordSection.style.opacity = '0'; // 두 번째 섹션 숨김
    recordSection.style.transform = 'translateY(50px)'; // 서서히 아래에서 올라옴
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
  if (scrollPosition > windowHeight * 0.6) {
    text01.style.opacity = '1'; // 첫 번째 텍스트가 서서히 나타남
  } else {
    text01.style.opacity = '0';
  }

  if (scrollPosition > windowHeight * 0.7) {
    text02.style.opacity = '1'; // 두 번째 텍스트가 서서히 나타남
  } else {
    text02.style.opacity = '0';
  }

  if (scrollPosition > windowHeight * 0.8) {
    text03.style.opacity = '1'; // 세 번째 텍스트가 서서히 나타남
  } else {
    text03.style.opacity = '0';
  }

  if (scrollPosition > windowHeight * 0.9) {
    // 스크롤 위치에 비례해 글씨 크기를 줄이고, opacity를 낮춤
    const scaleValue = Math.max(1 - (scrollPosition - windowHeight * 0.9) / windowHeight, 0.5); // 최소 0.5까지 줄어듦
    const opacityValue = Math.max(1 - (scrollPosition - windowHeight * 0.9) / (windowHeight * 0.5), 0); // 최소 0까지 줄어듦

    title.style.transform = `scale(${scaleValue})`; // 글씨 크기 축소
    title.style.opacity = opacityValue; // 글씨 서서히 사라짐
  } else {
    // 초기 상태로 복원
    title.style.transform = 'scale(1)';
    title.style.opacity = '1';
  }
  if (scrollPosition > windowHeight * 1.0) {
    const scaleValue = Math.max(1 - (scrollPosition - windowHeight * 1.0) / (windowHeight * 0.6), 0.5); // 0.5까지 축소
    const opacityValue = Math.max(1 - (scrollPosition - windowHeight * 1.0) / (windowHeight * 0.6), 0); // opacity도 천천히 0까지

    title.style.transform = `scale(${scaleValue})`;
    title.style.opacity = opacityValue;
  } else {
    // 초기 상태로 복원
    title.style.transform = 'scale(1)';
    title.style.opacity = '1';
  }
});

// window.addEventListener('scroll', function () {
//   // 스크롤 이벤트 리스너 등록
//   const inner = document.querySelector('.content #record .record_img_inner'); // 모든 섹션을 가져옴

//   const background = inner.querySelector('.__background'); // 배경 요소
//   const title = inner.querySelector('.record_text_wrap .record_text_inner .title');
//   const img01 = inner.querySelector('.record__img01');
//   const img02 = inner.querySelector('.record__img02');
//   const img03 = inner.querySelector('.record__img03');
//   const img04 = inner.querySelector('.record__img04');
//   const img05 = inner.querySelector('.record__img05');
//   const img06 = inner.querySelector('.record__img06');
//   const img07 = inner.querySelector('.record__img07');

//   const scrolled = window.scrollY; // 윈도우의 스크롤값
//   const windowHeight = window.innerHeight;
//   // const windowWidth = window.innerWidth;
//   // 중앙으로 모이는 위치: 화면 중앙을 기준으로 최종 위치 설정
//   // const centerX = windowWidth / 2;
//   // const centerY = windowHeight / 2;

//   const scrollFactor = 1 - Math.min(scrolled / windowHeight, 1); // 스크롤 비율 반전 (1에서 0으로)
//   console.log('scrollY : ' + scrolled);

//   if (background) {
//     background.style.transform = `translateY(${scrolled * 0.8}px)`;
//   }

//   if (title) {
//     // const scaleValue = Math.min(scrolled * 0.01, 2); // 너무 큰 값을 방지하기 위해 제한
//     title.style.transform = `translateY(${scrolled * 0.8}px)`;
//   }

//   if (img01) {
//     const startX = -100; // 화면 바깥 왼쪽
//     const startY = -100; // 화면 바깥 위
//     const finalX = -18; // 초기 SCSS에서 설정된 left
//     const finalY = -71; // 초기 SCSS에서 설정된 top
//     img01.style.transform = `translate(${(finalX - startX) * scrollFactor + startX}px, ${
//       (startY - finalY) * scrollFactor - startY
//     }px)`;
//     if (scrollFactor > 0.3) {
//       img01.style.opacity = 1;
//     } else if (scrollFactor >= 0.3 && scrollFactor < 0.4) {
//       img01.style.opacity = (scrollFactor - 0.3) * (1 / 0.3);
//     } else {
//       img01.style.opacity = 0; // 60% 이후로는 완전히 사라짐
//     }
//   }

//   if (img02) {
//     const startX = window.innerWidth + 100; // 화면 바깥 오른쪽
//     const startY = -100; // 화면 바깥 위
//     const finalX = 42; // 초기 SCSS에서 설정된 left
//     const finalY = 31; // 초기 SCSS에서 설정된 top
//     img02.style.transform = `translate(${scrolled * -0.5}px, ${scrolled * 0.5}px)`;
//     img02.style.opacity = scrollFactor;
//   }

//   if (img03) {
//     const startX = -100; // 화면 바깥 왼쪽
//     const startY = window.innerHeight + 100; // 화면 바깥 아래
//     const finalX = 220; // 초기 SCSS에서 설정된 left
//     const finalY = 189; // 초기 SCSS에서 설정된 top
//     img03.style.transform = `translate(${(finalX - startX) * scrollFactor + startX}px, ${
//       (finalY - startY) * scrollFactor + startY
//     }px)`;
//     img03.style.opacity = scrollFactor;
//   }
//   if (img04) {
//     const startX = window.innerWidth + 100; // 화면 바깥 오른쪽
//     const startY = window.innerHeight + 100; // 화면 바깥 아래
//     const finalX = 230; // 초기 SCSS에서 설정된 left
//     const finalY = 0; // 초기 SCSS에서 설정된 top
//     img01.style.transform = `translate(${(finalX - startX) * scrollFactor + startX}px, ${
//       (finalY - startY) * scrollFactor + startY
//     }px)`;
//     img04.style.opacity = scrollFactor;
//   }

//   if (img05) {
//     const startX = -100; // 화면 바깥 왼쪽
//     const startY = window.innerHeight / 2; // 화면 세로의 중간
//     const finalX = 0; // 초기 SCSS에서 설정된 left
//     const finalY = 217; // 초기 SCSS에서 설정된 top

//     img02.style.transform = `translate(${(finalX - startX) * scrollFactor + startX}px, ${
//       (finalY - startY) * scrollFactor + startY
//     }px)`;
//     img05.style.opacity = scrollFactor;
//   }

//   if (img06) {
//     const startX = window.innerWidth + 100; // 화면 바깥 오른쪽
//     const startY = window.innerHeight / 2; // 화면 세로의 중간
//     const finalX = 34; // 초기 SCSS에서 설정된 right
//     const finalY = 39; // 초기 SCSS에서 설정된 top
//     img03.style.transform = `translate(${(finalX - startX) * scrollFactor + startX}px, ${
//       (finalY - startY) * scrollFactor + startY
//     }px)`;
//     img06.style.opacity = scrollFactor;
//   }

//   if (img07) {
//     const startX = window.innerWidth + 100; // 화면 바깥 오른쪽
//     const startY = window.innerHeight + 100; // 화면 바깥 아래
//     const finalX = 0; // 초기 SCSS에서 설정된 right
//     const finalY = 233; // 초기 SCSS에서 설정된 top
//     img03.style.transform = `translate(${(finalX - startX) * scrollFactor + startX}px, ${
//       (finalY - startY) * scrollFactor + startY
//     }px)`;
//     img07.style.opacity = scrollFactor;
//   }
// });

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
      const scaleValue = 1 - scrollFactor * 0.2;
      img.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scaleValue})`;

      // opacity 변화 (스크롤 비율에 따라 점차 나타남)
      if (scrollFactor > 0.3) {
        img.style.opacity = 1 - (scrollFactor - 0.3) * (1 / 0.7); // 0.3 이후 점차 흐려짐
      } else if (scrollFactor >= 0.1 && scrollFactor <= 0.3) {
        img.style.opacity = (scrollFactor - 0.1) / 0.2; // 0.1에서 0.3까지 점차 나타남
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
    const finalX = -120;
    const finalY = -100;

    // 이동 계산 (오직 위치만 변경)
    const currentX = (finalX - startX) * scrollFactor + startX;
    const currentY = (finalY - startY) * scrollFactor + startY;

    img07.style.transform = `translate(${currentX}px, ${currentY}px)`;
    img07.style.opacity = 0.7 + scrollFactor * 0.3;
    // img07의 opacity와 scale은 변경하지 않음
  }
});
