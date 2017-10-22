var sections = $('section')
  , nav = $('.cach-header')
  , navHeight = nav.outerHeight();

$(window).on('scroll', function () {
  var currentPosition = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - navHeight,
        bottom = top + $(this).outerHeight();
    
    if (currentPosition >= top && currentPosition <= bottom) {
      nav.find('a').removeClass('-active');
      sections.removeClass('-active');
      
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('-active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 500);
  
  return false;
});

$(document).ready(function(){
  $('.toggle-menu').on('click', function(){
    $(this).toggleClass('-x');
    $('.navigation-menu').toggleClass('-open');
  });
  $('.navigation-menu > a').on('click', function(){
    $('.toggle-menu').removeClass('-x');
    $('.navigation-menu').removeClass('-open');
  });
});

$(document).on('scroll', function() {

  if($(document).scrollTop()>96) {
    $('.cach-header').addClass('-small');
  } else {
    $('header').removeClass('-small');
  }
  
});
