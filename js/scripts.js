var sections = $('section')
  , nav = $('nav')
  , navHeight = nav.outerHeight();

$(window).on('scroll', function () {
  var currentPosition = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - navHeight,
        bottom = top + $(this).outerHeight();
    
    if (currentPosition >= top && currentPosition <= bottom) {
      nav.find('a').removeClass('-active');
      sections.removeClass('-active');
      
      $(this).addClass('-active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('-active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - navHeight
  }, 500);
  
  return false;
});

$(document).ready(function(){
  $('.toggle-menu').on('click', function(){
    $(this).toggleClass('-x');
    $('.navigation-menu').toggleClass('-open');
  });
});