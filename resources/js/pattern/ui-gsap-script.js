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

$(window).resize(function () {
  ScrollTrigger.refresh();
});

$(window).on('load resize', function () {
  updateAnimation();
});

// 분홍색 원의 위치와 크기를 가져옵니다.
var target = $('.section_record .story_img_box'); // 분홍색 원의 타겟 요소
var targetOffset = target.offset(); // 타겟의 위치
var targetX = targetOffset.left + target.width() / -2; // 중앙 x 위치
var targetY = targetOffset.top + target.height() / -2; // 중앙 y 위치

var height = $(window).height();
gsap.to('.record.img07', {
  x: -targetX, // 오른쪽 하단에서 왼쪽 대각선 위로 이동
  y: -targetY,
  opacity: 0, // 타겟에 도착하면 사라지도록 설정
  ease: 'power1.inOut',

  scrollTrigger: {
    trigger: '.record_ani_wrap .record_text_wrap',
    start: 'bottom center',
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
    start: 'top 30vh',
    end: 'top top',
    scrub: 1,
  },
});

gsap.to('.record_story_video1', {
  opacity: 1,
  duration: 1,
  ease: 'none',
  scrollTrigger: {
    trigger: '.record_story.index01 .story_text_box',
    start: 'top center',
    end: 'top center',
    scrub: 1,
  },
});
gsap.to('.record_story_video2', {
  opacity: 1,
  duration: 1,
  ease: 'none',
  scrollTrigger: {
    trigger: '.record_story.index02',
    start: 'top center',
    end: 'top center',
    scrub: 1,
  },
});
gsap.to('.record_story_video3', {
  opacity: 1,
  duration: 1,
  ease: 'none',
  scrollTrigger: {
    trigger: '.record_story.index03',
    start: 'top center',
    end: 'top center',
    scrub: 1,
  },
});

ScrollTrigger.create({
  trigger: '.record_ani_wrap > .space',
  start: 'top bottom',
  end: '+=1',
  onEnter: () => $('.container').addClass('story_start'),
  onEnterBack: () => $('.container').removeClass('story_start'),
  onLeaveBack: () => $('.container').removeClass('story_start'),
});

// ScrollTrigger.create({
//   trigger: '.record_story.index03',
//   start: 'bottom top',
//   end: '+=1',
//   onEnter: () => $('.container').addClass('activity_start'),
//   onEnterBack: () => $('.container').removeClass('activity_start'),
//   onLeaveBack: () => $('.container').removeClass('activity_start'),
// });
// ScrollTrigger.create({
//   trigger: '.index03',
//   start: 'bottom ', // #art가 화면에 시작될 때
//   onEnter: () => $('.container').removeClass('story_start'), // 비디오가 사라지도록 설정
//   onEnterBack: () => $('.container').addClass('story_start'),
//   onLeaveBack: () => $('.container').addClass('story_start'),
// });

// const tl = gsap.timeline();
// tl.fromTo('.dimmed', { opacity: 1 }, { opacity: 0 });

// ScrollTrigger.create({
//   animation: tl,
//   trigger: '.section_art',
//   start: 'top top',
//   end: '50vh top',
//   scrub: 1,
// });
const tl = gsap.timeline();

tl.fromTo('.dimmed', { opacity: 1 }, { opacity: 0 });

ScrollTrigger.create({
  animation: tl,
  trigger: '.circle_activity',
  start: 'top bottom',
  end: 'bottom top',
  scrub: 1,
});

// section 02 //

//.circle 과 텍스트, 로티애니메이션 참고용
const tl2 = gsap.timeline();
tl2.addLabel('artStart');
tl2.set('.activity.num02', { visibility: 'hidden', display: 'none' });
tl2.to('.visual_text.text01', { opacity: 1 });
tl2.to('.circle_activity', { opacity: 1 }, '>');
tl2.fromTo('.visual_text.text01', { scale: 1.5 }, { scale: 1 }, '<');
tl2.fromTo('.circle_activity .circle', { rotation: 340 }, { rotation: 360 }, '>');
tl2.to('.visual_text.text01', { scale: 0.5 }, '>');
tl2.to('.visual_text.text01', { opacity: 0 }, '<');
tl2.to('.visual_text.text02', { opacity: 1 }, '>');

tl2.set('.activity.num01', { visibility: 'visible' }, '>');
tl2.to('.activity.num01', { opacity: 1 }, '<');
tl2.to('.circle_activity .circle', { rotation: 375, duration: 1.5 }, '>1');
tl2.to('.activity.num01', { opacity: 0 }, '<0.5');
tl2.set('.activity.num01', { visibility: 'hidden' }, '>');

tl2.addLabel('secondSetStart');
tl2.set('.activity.num02', { visibility: 'visible', display: 'block' }, 'secondSetStart');
tl2.to('.activity.num02', { opacity: 1 }, '<');
tl2.to('.activity.num02', { opacity: 0 }, '>1.5');

tl2.to('.circle_activity .circle', { rotation: 400, scale: 0.7, duration: 6 }, '>');
tl2.to('.visual_text.text02 .before', { opacity: 0 }, '<');
tl2.to('.circle_large', { opacity: 1 }, '<');
tl2.to('.circle_large .circle', { scale: 1.1, rotation: 30, duration: 8 }, '<');
tl2.to('.bg.black', { opacity: 1 }, '<0.5');
tl2.to('.visual_text.text02 .after', { scale: 1, opacity: 1 }, '<');
tl2.to('.visual_text.text02', { scale: 0.7, opacity: 0, duration: 3 }, '>2');

tl2.set('.video_link', { visibility: 'visible', display: 'block' }, '<');
tl2.to('.video_link', { opacity: 1, duration: 2 }, '<');
tl2.set('.circle_activity', { opacity: 0, display: 'none' }, '>');
tl2.set('.circle_large', { opacity: 0, display: 'none' }, '>');
tl2.to(
  '.video_link .video_dimmed',
  {
    opacity: 1,
  },
  '<'
);
tl2.addLabel('artVideoStart');
tl2.to(
  '.video_link .video_text .text_inner',
  {
    scale: 1,
    duration: 2,
  },
  '<'
);
tl2.to('.video_link .video_dimmed', { opacity: 0, duration: 1.5 }, '>2');
tl2.to('.video_link .video_text .text_inner', { scale: 0.5, opacity: 0, duration: 2 }, '<');

ScrollTrigger.create({
  animation: tl2,
  trigger: '.section_art',
  start: 'top top',
  end: 'bottom bottom',
  scrub: 1,
});

const getTimelineScrollTop = (label) => {
  const st = tl2.scrollTrigger;

  let labelST = tl2.labels[label];
  if (label === 'artVideoStart') {
    labelST = labelST - 3;
  } else {
    labelST = labelST + 0.7;
  }
  return Math.floor(st.start + (st.end - st.start) * (labelST / tl2.duration()));
};

const $navs = $('.navigation .dot li');
const $videoLink = $('.video_link video');

$(document).on('ready', () => {
  const recordST = Math.floor($('.section_record').offset().top);
  const artST = getTimelineScrollTop('artStart');
  const artVideoST = getTimelineScrollTop('artVideoStart');
  const exhibitionST = Math.floor($('.section_all_list').offset().top - 80);

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('g');

  if (query) {
    const all = 'all, inlife, nature, abart';
    const sort = 'sort';
    const local = 'local';

    if (all.includes(query)) {
      $('.page_btn_wrap li .page_btn').removeClass('now');
      $('.story_content').removeClass('active');
      $('.page_btn_wrap li:nth-child(1) .page_btn').addClass('now');
      $('.story_content.all').addClass('active');
      gsap.to(window, { duration: 1, scrollTo: $('.section_all_list .top_area').offset().top - 100 });
    } else if (query === era) {
      $('.page_btn_wrap li .page_btn').removeClass('now');
      $('.story_content').removeClass('active');
      $('.page_btn_wrap li:nth-child(2) .page_btn').addClass('now');
      $('.story_content.time').addClass('active');
      gsap.to(window, { duration: 1, scrollTo: $('.section_all_list .top_area').offset().top - 100 });
    } else if (query === topic) {
      $('.page_btn_wrap li .page_btn').removeClass('now');
      $('.story_content').removeClass('active');
      $('.page_btn_wrap li:nth-child(3) .page_btn').addClass('now');
      $('.story_content.keyword').addClass('active');
      gsap.to(window, { duration: 1, scrollTo: $('.section_all_list .top_area').offset().top - 100 });
    }
  }

  // 네비게이션 구현
  let navigationIndex = 0;
  let capturedNavigationIndex = navigationIndex;
  const navigationLastIndex = 4;

  const changeCurrentNavigation = (index) => {
    $navs.attr('aria-selected', 'false');
    $navs.eq(index).attr('aria-selected', 'true');
    navigationIndex = index;

    if (index === 3) {
      $videoLink[0].play();
    } else {
      $videoLink[0].pause();
    }
  };

  const checkCurrentNavigation = () => {
    const scroll = $(window).scrollTop();

    if (scroll < recordST) {
      capturedNavigationIndex = 0;
    } else if (scroll < artST) {
      capturedNavigationIndex = 1;
    } else if (scroll < artVideoST) {
      capturedNavigationIndex = 2;
    } else if (scroll < exhibitionST) {
      capturedNavigationIndex = 3;
    } else {
      capturedNavigationIndex = navigationLastIndex;
    }

    if (capturedNavigationIndex !== navigationIndex) {
      changeCurrentNavigation(capturedNavigationIndex);
    }
  };

  checkCurrentNavigation();

  $(window).on('scroll', () => {
    checkCurrentNavigation();
  });

  const scrollByNavigation = (index) => {
    let scrollTarget = 0;

    switch (index) {
      case 1:
        scrollTarget = recordST;
        break;
      case 2:
        scrollTarget = artST;
        break;
      case 3:
        scrollTarget = artVideoST;
        break;
      case 4:
        scrollTarget = exhibitionST;
        break;
      default:
    }

    gsap.to(window, { duration: 0, scrollTo: scrollTarget });
    checkCurrentNavigation();
  };

  $('.navigation .dot a').on('click', (e) => {
    e.preventDefault();

    const $target = $(e.target);
    const $parent = $target.parent();
    const index = $parent.index();

    scrollByNavigation(index);
  });

  $('.navigation .prev').on('click', () => {
    const index = navigationIndex - 1;

    if (index < 0) {
      return;
    }

    scrollByNavigation(index);
  });

  $('.navigation .next').on('click', () => {
    const index = navigationIndex + 1;

    if (index > navigationLastIndex) {
      return;
    }

    scrollByNavigation(index);
  });

  $('.spot_link').on('click', (e) => {
    e.preventDefault();
    gsap.to(window, { duration: 0, scrollTo: $('.section_all_list .top_area').offset().top - 100 });
    changeCurrentNavigation(navigationLastIndex);
  });
});
