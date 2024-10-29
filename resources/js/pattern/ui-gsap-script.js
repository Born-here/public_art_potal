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
gsap.to('.video-container', {
  y: -window.innerHeight,
  scale: 1.5, // 스크롤 시 약간 확대되도록 설정
  ease: 'power1.out',
  opacity: 0,
  scrollTrigger: {
    trigger: '.daegu_space',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
});

gsap.to('.daegu_story.index01', {
  y: -5,
  ease: 'power1.inOut',
  scrollTrigger: {
    trigger: '.daegu_space',
    start: 'top center',
    end: 'bottom top',
    scrub: true,
  },
});
