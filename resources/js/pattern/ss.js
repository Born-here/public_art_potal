$('.page_btn.all').on('click', function () {
  $('.page_btn_wrap li .page_btn').removeClass('now');
  $('.story_content').removeClass('active');
  $('.page_btn_wrap li:nth-child(1) .page_btn').addClass('now');
  $('.story_content.all').addClass('active');
  window.scrollTo({ top: $('.top_area').offset().top + 251, behavior: 'smooth' });
});

$('.page_btn.era').on('click', function () {
  $('.page_btn_wrap li .page_btn').removeClass('now');
  $('.story_content').removeClass('active');
  $('.page_btn_wrap li:nth-child(2) .page_btn').addClass('now');
  $('.story_content.time').addClass('active');
  window.scrollTo({ top: $('.top_area').offset().top + 251, behavior: 'smooth' });
});

$('.page_btn.topic').on('click', function () {
  $('.page_btn_wrap li .page_btn').removeClass('now');
  $('.story_content').removeClass('active');
  $('.page_btn_wrap li:nth-child(3) .page_btn').addClass('now');
  $('.story_content.keyword').addClass('active');
  window.scrollTo({ top: $('.top_area').offset().top + 251, behavior: 'smooth' });
});
