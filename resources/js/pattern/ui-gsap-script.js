// gsap.registerPlugin(ScrollTrigger);

// gsap.to('.video-container', {
//   yPercent: -30, // 스크롤에 따라 위로 30% 이동
//   ease: 'power1.out',
//   scrollTrigger: {
//     trigger: '.daegu_space',
//     end: 'bottom top', // 스크롤 끝 위치
//     scrub: true, // 스크롤에 따라 애니메이션 진행
//   },
// });

// gsap.to('.daegu_story.index01', {
//   y: -window.innerHeight, // 스크롤에 따라 창 높이만큼 위로 이동
//   ease: 'power1.inOut',
//   scrollTrigger: {
//     trigger: '.daegu_space',
//     start: 'top center', // 트리거 시작 지점
//     end: 'bottom top',
//     scrub: true,
//   },
// });

// -----------------------------------------

// gsap.to('.video-container', {
//   y: -window.innerHeight,
//   scale: 1.5, // 스크롤 시 약간 확대되도록 설정
//   ease: 'power1.out',
//   opacity: 0,
//   scrollTrigger: {
//     trigger: '.record_ani_wrap .record_text_wrap',
//     start: 'top center',
//     end: 'bottom top',
//     scrub: true,
//   },
// });

// gsap.to('.record_story.index01', {
//   y: -5,
//   ease: 'power1.inOut',
//   opacity: 0,
//   scrollTrigger: {
//     trigger: '.record_space',
//     start: 'top center',
//     end: 'bottom top',
//     scrub: true,
//   },
// });

$(window).resize(function () {
  ScrollTrigger.refresh();
});

$(window).on('load resize', function () {
  updateAnimation();
});

// 분홍색 원의 위치와 크기를 가져옵니다.
var target = $('.story_img_box'); // 분홍색 원의 타겟 요소
var targetOffset = target.offset(); // 타겟의 위치
var targetX = targetOffset.left + target.width() / 10; // 중앙 x 위치
var targetY = targetOffset.top + target.height() / 20; // 중앙 y 위치

var height = $(window).height();
gsap.to('.record.img07', {
  x: -targetX - $(window).width(), // 오른쪽 하단에서 왼쪽 대각선 위로 이동
  y: -targetY - $(window).height(),
  opacity: 0, // 타겟에 도착하면 사라지도록 설정
  ease: 'power1.inOut',

  scrollTrigger: {
    trigger: '.record_ani_wrap .record_text_wrap',
    start: 'bottom+=30 top',
    end: '+=150%',
    scrub: 0.5,
  },
});

gsap.to('.record_img_wrap.black .record_img_inner', {
  scale: 0.6,
  opacity: 0,
  ease: 'none',
  scrollTrigger: {
    trigger: '.record_ani_wrap .record_text_wrap',
    start: 'top bottom',
    end: '+=' + height * 2,
    scrub: 1,
  },
});

gsap.to('.record_ani_wrap .record_text_inner .text', {
  opacity: 1,
  ease: 'none',
  stagger: 0.5,
  duration: 1,
  scrollTrigger: {
    trigger: '.record_ani_wrap .record_text_wrap',
    start: 'top center',
    end: '+=' + height * 0.5,
    // scrub: true,
  },
  // stagger: 5,
});

gsap.to('.record_ani_wrap .record_text_inner', {
  scale: 0.4,
  opacity: 0,
  ease: 'none',
  scrollTrigger: {
    trigger: '.record_ani_wrap .record_text_inner',
    start: 'top center',
    end: '+=' + height * 1,
    scrub: 1,
  },
});

gsap.to('.record_story.index01', {
  opacity: 1,
  ease: 'none',
  scrollTrigger: {
    trigger: '.record_story.index01',
    start: 'top 50vh',
    end: 'top top',
    scrub: 1,
  },
});

gsap.to('.record_story_video1', {
  opacity: 1,
  duration: 1,
  ease: 'none',
  scrollTrigger: {
    trigger: '.record_story.index01',
    start: 'top center',
    end: 'top center',
    scrub: 1,
  },
});

ScrollTrigger.create({
  trigger: '.record_ani_wrap > .space',
  start: 'top center',
  end: '+=1',
  onEnter: () => $('.container').addClass('story_start'),
  onEnterBack: () => $('.container').removeClass('story_start'),
  onLeaveBack: () => $('.container').removeClass('story_start'),
});

// const tl = gsap.timeline();
// tl.fromTo('.dimmed', { opacity: 1 }, { opacity: 0 });

// ScrollTrigger.create({
//   animation: tl,
//   trigger: '.section_art',
//   start: 'top top',
//   end: '50vh top',
//   scrub: 1,
// });
