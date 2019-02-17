AOS.init({
  duration: 600
});

(function ($) {

  'use strict'

  $(window).stellar({
    responsive: false,
    verticalOffset: 60,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  })

  // bootstrap dropdown hover

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($('#loader').length > 0) {
        $('#loader').removeClass('show')
      }
    }, 1)
  }
  loader()

  $(window).scroll(function () {

    var $this = $(this),
      st = $this.scrollTop(),
      navbar = $('.site-header')

    if (st > 150) {
      if (!navbar.hasClass('scrolled')) {
        navbar.addClass('scrolled')
      }
    }
    if (st < 150) {
      if (navbar.hasClass('scrolled')) {
        navbar.removeClass('scrolled sleep')
      }
    }
    if (st > 350) {
      if (!navbar.hasClass('awake')) {
        navbar.addClass('awake')
      }
    }
    if (st < 350) {
      if (navbar.hasClass('awake')) {
        navbar.removeClass('awake')
        navbar.addClass('sleep')
      }
    }

  })

  $('.nav-menu-item').on('click', function (e) {
    $('.site-menu').fadeOut(400)
    $('.site-nav-toggle').removeClass('active')
    $('body').removeClass('menu-open')
  })

  $('.js-site-nav-toggle').on('click', function (e) {
    var $this = $(this)
    e.preventDefault()

    if ($('body').hasClass('menu-open')) {
      $this.removeClass('active')
      $('.site-menu .site-menu-inner > ul > li').each(function (i) {

        var that = $(this)
        setTimeout(function () {
          that.removeClass('is-show')
        }, i * 100)

        $(this).removeClass('is-show')
        $('site-menu').addClass('hidden')
      })

        setTimeout(function () {
        $('.site-menu').fadeOut(400)
      }, 800)

      $('body').removeClass('menu-open')
    } else {
      $('.site-menu').fadeIn(400)
      $this.addClass('active')
      $('body').addClass('menu-open')

      setTimeout(function () {
        $('.site-menu .site-menu-inner > ul > li').each(function (i) {
          var that = $(this)
          setTimeout(function () {
            that.addClass('is-show')
          }, i * 100)

        })
      }, 500)

    }

  })

  // home slider
  $('.home-slider').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 2,
    navText: ['<span class=\'ion-chevron-left\'></span>', '<span class=\'ion-chevron-right\'></span>'],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  })

})(jQuery)