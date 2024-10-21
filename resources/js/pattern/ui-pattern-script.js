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

window.addEventListener('scroll', function () {
  // 스크롤 이벤트 리스너 등록
  const inner = document.querySelector('.content #record .record_img_inner'); // 모든 섹션을 가져옴

  const background = inner.querySelector('.__background'); // 배경 요소
  const title = inner.querySelector('.record_text_wrap .record_text_inner .title');
  const img01 = inner.querySelector('.record__img01');
  const img02 = inner.querySelector('.record__img02');
  const img03 = inner.querySelector('.record__img03');
  const img04 = inner.querySelector('.record__img04');
  const img05 = inner.querySelector('.record__img05');
  const img06 = inner.querySelector('.record__img06');
  const img07 = inner.querySelector('.record__img07');

  const scrolled = window.scrollY; // 윈도우의 스크롤값
  const windowHeight = window.innerHeight;
  // const windowWidth = window.innerWidth;
  // 중앙으로 모이는 위치: 화면 중앙을 기준으로 최종 위치 설정
  // const centerX = windowWidth / 2;
  // const centerY = windowHeight / 2;

  const scrollFactor = 1 - Math.min(scrolled / windowHeight, 1); // 스크롤 비율 반전 (1에서 0으로)
  console.log('scrollY : ' + scrolled);

  if (background) {
    background.style.transform = `translateY(${scrolled * 0.8}px)`;
  }

  if (title) {
    // const scaleValue = Math.min(scrolled * 0.01, 2); // 너무 큰 값을 방지하기 위해 제한
    title.style.transform = `translateY(${scrolled * 0.8}px)`;
  }

  if (img01) {
    const startX = -100; // 화면 바깥 왼쪽
    const startY = -100; // 화면 바깥 위
    const finalX = -18; // 초기 SCSS에서 설정된 left
    const finalY = -71; // 초기 SCSS에서 설정된 top
    img01.style.transform = `translate(${(finalX - startX) * scrollFactor + startX}px, ${
      (startY - finalY) * scrollFactor - startY
    }px)`;
    if (scrollFactor > 0.3) {
      img01.style.opacity = 1;
    } else if (scrollFactor >= 0.3 && scrollFactor < 0.4) {
      img01.style.opacity = (scrollFactor - 0.3) * (1 / 0.3);
    } else {
      img01.style.opacity = 0; // 60% 이후로는 완전히 사라짐
    }
  }

  if (img02) {
    const startX = window.innerWidth + 100; // 화면 바깥 오른쪽
    const startY = -100; // 화면 바깥 위
    const finalX = 42; // 초기 SCSS에서 설정된 left
    const finalY = 31; // 초기 SCSS에서 설정된 top
    img02.style.transform = `translate(${scrolled * -0.5}px, ${scrolled * 0.5}px)`;
    img02.style.opacity = scrollFactor;
  }

  if (img03) {
    const startX = -100; // 화면 바깥 왼쪽
    const startY = window.innerHeight + 100; // 화면 바깥 아래
    const finalX = 220; // 초기 SCSS에서 설정된 left
    const finalY = 189; // 초기 SCSS에서 설정된 top
    img03.style.transform = `translate(${(finalX - startX) * scrollFactor + startX}px, ${
      (finalY - startY) * scrollFactor + startY
    }px)`;
    img03.style.opacity = scrollFactor;
  }
  if (img04) {
    const startX = window.innerWidth + 100; // 화면 바깥 오른쪽
    const startY = window.innerHeight + 100; // 화면 바깥 아래
    const finalX = 230; // 초기 SCSS에서 설정된 left
    const finalY = 0; // 초기 SCSS에서 설정된 top
    img01.style.transform = `translate(${(finalX - startX) * scrollFactor + startX}px, ${
      (finalY - startY) * scrollFactor + startY
    }px)`;
    img04.style.opacity = scrollFactor;
  }

  if (img05) {
    const startX = -100; // 화면 바깥 왼쪽
    const startY = window.innerHeight / 2; // 화면 세로의 중간
    const finalX = 0; // 초기 SCSS에서 설정된 left
    const finalY = 217; // 초기 SCSS에서 설정된 top

    img02.style.transform = `translate(${(finalX - startX) * scrollFactor + startX}px, ${
      (finalY - startY) * scrollFactor + startY
    }px)`;
    img05.style.opacity = scrollFactor;
  }

  if (img06) {
    const startX = window.innerWidth + 100; // 화면 바깥 오른쪽
    const startY = window.innerHeight / 2; // 화면 세로의 중간
    const finalX = 34; // 초기 SCSS에서 설정된 right
    const finalY = 39; // 초기 SCSS에서 설정된 top
    img03.style.transform = `translate(${(finalX - startX) * scrollFactor + startX}px, ${
      (finalY - startY) * scrollFactor + startY
    }px)`;
    img06.style.opacity = scrollFactor;
  }

  if (img07) {
    const startX = window.innerWidth + 100; // 화면 바깥 오른쪽
    const startY = window.innerHeight + 100; // 화면 바깥 아래
    const finalX = 0; // 초기 SCSS에서 설정된 right
    const finalY = 233; // 초기 SCSS에서 설정된 top
    img03.style.transform = `translate(${(finalX - startX) * scrollFactor + startX}px, ${
      (finalY - startY) * scrollFactor + startY
    }px)`;
    img07.style.opacity = scrollFactor;
  }
});
