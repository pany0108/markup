$(function () {
  // Language select
  $('.selection').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).find('.selection-menu').slideToggle(300);
    $('.selection-wrapper').toggleClass('active');
  });

  $('.selection').focusout(function () {
    $(this).find('.selection-menu').slideUp(300);
    $('.selection-wrapper').removeClass('active');
  });

  // news list handler
  $('.news-list-item').hide();
  if ($('.news-list-item').length > 3) {
    $('.show-news-list-btn').show();
    $('.hide-news-list-btn').hide();
  }
  $('.news-list-item').slice(0, 3).show();

  $('.show-news-list-btn').click(function () {
    var showing = $('.news-list-item').filter(':visible').length;
    $('.news-list-item')
      .slice(showing, showing + 3)
      .fadeIn();
    var nowShowing = $('.news-list-item').filter(':visible').length;
    if (nowShowing >= $('.news-list-item').length) {
      $('.show-news-list-btn').hide();
      $('.hide-news-list-btn').show();
    }
  });

  $('.hide-news-list-btn').click(function () {
    var showing = $('.news-list-item').filter(':visible').length;
    $('.news-list-item').slice(3, showing).fadeOut(100);
    var nowShowing = $('.news-list-item').filter(':visible').length;
    if (nowShowing >= $('.news-list-item').length) {
      $('.show-news-list-btn').show();
      $('.hide-news-list-btn').hide();
    }
  });
});

// header scroll action
const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = $(window).scrollTop();

  if (currentScroll <= 0) {
    $('body').removeClass('scroll-up');
    return;
  }

  if (currentScroll > lastScroll && !$('body').hasClass('scroll-down')) {
    // down
    $('body').removeClass('scroll-up');
    $('body').addClass('scroll-down');
  } else if (currentScroll < lastScroll && $('body').hasClass('scroll-down')) {
    // up
    $('body').removeClass('scroll-down');
    $('body').addClass('scroll-up');
  }
  lastScroll = currentScroll;
});

// slogan fade in
var div = document.getElementById('sloganWrapper'),
  letters = div.textContent.split('');

while (div.hasChildNodes()) div.removeChild(div.firstChild);

for (var i = 0; i < letters.length; i++) {
  var letter = document.createElement('span'),
    style = 'opacity 0.6s linear',
    delay = Math.random() * 1 + 's';
  letter.appendChild(document.createTextNode(letters[i]));
  letter.style.WebKitTransition = letter.style.transition = style;
  letter.style.WebKitTransitionDelay = letter.style.transitionDelay = delay;
  letter.style.opacity = 0;
  div.appendChild(letter);
}

setTimeout(function () {
  for (var i = 0; i < div.childNodes.length; i++) {
    div.childNodes[i].style.opacity = 1;
  }
}, 0);

// scroll animation
$(window).scroll(function () {
  var list_1_offsetTop = $('.core-value-list1').offset().top;
  var list_2_offsetTop = $('.core-value-list2').offset().top;
  var images_3_offsetTop = $('.images3').offset().top;
  // var images_1_offsetTop = $('.images1').offset().top;
  // var images_3_offsetTop = $('.images3').offset().top;
  var images_wrapper_offsetTop = $('.images-wrapper-inner').offset().top;
  var windowScrollTop = $(window).scrollTop();

  if (windowScrollTop >= list_1_offsetTop - 500) {
    $('.core-value-list1 .core-value-list-item-divider-horizontal').addClass(
      'active',
    );
    $('.core-value-list-item-divider-vertical').addClass('active');
  } else if (windowScrollTop < list_1_offsetTop) {
    $('.core-value-list1 .core-value-list-item-divider-horizontal').removeClass(
      'active',
    );
    $('.core-value-list-item-divider-vertical').removeClass('active');
  }

  if (windowScrollTop >= list_2_offsetTop - 700) {
    $('.core-value-list2 .core-value-list-item-divider-horizontal').addClass(
      'active',
    );
  } else if (windowScrollTop < list_2_offsetTop) {
    $('.core-value-list2 .core-value-list-item-divider-horizontal').removeClass(
      'active',
    );
  }

  if (windowScrollTop >= images_3_offsetTop - 700) {
    $('.images-wrapper .images-wrapper-divider-horizontal').addClass('active');
  } else if (windowScrollTop < images_3_offsetTop) {
    $('.images-wrapper .images-wrapper-divider-horizontal').removeClass(
      'active',
    );
  }

  if (windowScrollTop >= images_wrapper_offsetTop - 700) {
    $('.images-wrapper-inner').addClass('active');
  } else if (windowScrollTop < images_wrapper_offsetTop) {
    $('.images-wrapper-inner').removeClass('active');
  }

  // if (windowScrollTop >= images_1_offsetTop - 700) {
  //   $('.images1 .img-wrapper').addClass('active');
  // } else if (windowScrollTop < images_1_offsetTop) {
  //   $('.images1 .img-wrapper').removeClass('active');
  // }
  //
  // if (windowScrollTop >= images_3_offsetTop - 700) {
  //   $('.images3 .img-wrapper').addClass('active');
  // } else if (windowScrollTop < images_3_offsetTop) {
  //   $('.images3 .img-wrapper').removeClass('active');
  // }
});

// mobile menu handler
$('.mob-menu-btn').click(function () {
  $(this).toggleClass('active');
  $('header').toggleClass('open');
  $('body').toggleClass('open');
});

$('.mob-menu-wrapper .nav-item').click(function () {
  $(this).removeClass('active');
  $('header').removeClass('open');
  $('body').removeClass('open');
});
