$(document).ready(function () {
  // Настройка сайдбара!
  $('.sidebar .sidebar__main__link').hover(function () {
    const sidebarDataId = $(this).data('id');

    $('.body__overlay').addClass('active');
    $('.header').addClass('header--overlay');
    $('.sidebar__hover').addClass('active');
    $('.sidebar__side').removeClass('active');
    $(`.sidebar__side[data-id="${sidebarDataId}"]`).addClass('active');
  });

  $('.sidebar').mouseleave(function () {
    $('.body__overlay').removeClass('active');
    $('.header').removeClass('header--overlay');
    $('.sidebar__hover').removeClass('active');
    $('.sidebar__side').removeClass('active');
  });
  // Настройка сайдбара!

  // Инициализайия главного баннера!
  $('.banner_slider--js').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $('.banner__tools .banner__arrow--prev--js'),
    nextArrow: $('.banner__tools .banner__arrow--next--js'),
    appendDots: $('.banner__tools .banner__dots--js'),
    customPaging: function () {
      return '<svg class="banner__svg" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle class="banner__svg__circle" stroke="black" stroke-width="1" cx="15" cy="15" r="13" fill="transparent" /></svg>';
    },
  });
  // Инициализайия главного баннера!

  // Настройка прогресс-бара!
  const radius = 13;
  const circumference = 2 * Math.PI * radius;

  $('.banner__svg__circle').css({
    strokeDasharray: `${circumference} ${circumference}`,
    strokeDashoffset: circumference,
  });

  function setProgress(item, percent, times) {
    const offset = circumference - (percent / 100) * circumference;
    $(item).css({
      transition: `${times}s`,
      strokeDashoffset: offset,
    });
  }

  setProgress('.banner__tools .slick-active .banner__svg__circle', 100, 3);

  $('.banner_slider--js').on('beforeChange', function (slick, currentSlide) {
    setProgress('.banner__tools .banner__svg__circle', 0, 0);

    setTimeout(() => {
      setProgress('.banner__tools .slick-active .banner__svg__circle', 100, 3);
    }, 0);
  });
  // Настройка прогресс-бара!

  // Разворот каталога категорий!
  $(document).on('click', '.categories_catalog__more_btn', function (e) {
    e.preventDefault();
    $('.categories_catalog__nodes_wrapper').removeClass('active');
    $(this).siblings('.categories_catalog__nodes_wrapper').addClass('active');
  });
  // Разворот каталога категорий!

  // Инициализайия каталога брендов!
  $('.brends__slider--js').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    prevArrow: $('.brends__tools .banner__arrow--prev--js'),
    nextArrow: $('.brends__tools .banner__arrow--next--js'),
    appendDots: $('.brends__tools .banner__dots--js'),
    customPaging: function () {
      return '<svg class="banner__svg" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle class="banner__svg__circle" stroke="black" stroke-width="1" cx="15" cy="15" r="13" fill="transparent" /></svg>';
    },
  });
  // Инициализайия каталога брендов!

  // Настройка прогресс-бара!
  setProgress('.brends__tools .slick-active .banner__svg__circle', 100, 3);

  $('.brends__slider--js').on('beforeChange', function (slick, currentSlide) {
    setProgress('.brends__tools .banner__svg__circle', 0, 0);

    setTimeout(() => {
      setProgress('.brends__tools .slick-active .banner__svg__circle', 100, 3);
    }, 0);
  });
  // Настройка прогресс-бара!

  // Шапка сайта!
  $(window).scroll(function () {
    if ($(this).scrollTop() > 147) {
      $('.header').addClass('header--fixed');
      $('.fix_cct').addClass('fix_cct--fixed');
      $('.body__overlay').addClass('body__overlay--fixed');
    } else {
      $('.header').removeClass('header--fixed');
      $('.fix_cct').removeClass('fix_cct--fixed');
      $('.body__overlay').removeClass('body__overlay--fixed');
    }
  });
  // Шапка сайта!

  // Настройка всплывающего каталога!
  $(document).on('click', '.catalog_btn', function (e) {
    e.preventDefault();
    $(this).toggleClass('catalog_btn--active');
    $('.body__overlay').toggleClass('active');
    $('.header').toggleClass('header--overlay').toggleClass('header--active_catalog');
    $('.fix_cct').toggleClass('fix_cct--active');
  });

  $(document).on('click', '.fix_cct__link', function (e) {
    e.preventDefault();

    if (!$(this).hasClass('fix_cct__link--active')) {
      $('.fix_cct__link').removeClass('fix_cct__link--active');
      $(this).addClass('fix_cct__link--active');
      $('.fix_cct__sublist').slideUp();
      $(this).siblings('.fix_cct__sublist').slideDown();
    } else {
      $(this).removeClass('fix_cct__link--active');
      $(this).siblings('.fix_cct__sublist').slideUp();
    }
  });
  // Настройка всплывающего каталога!

  // Сайдбар каталога!
  $(document).on('click', '.products__sidebar__link', function () {
    if (!$(this).hasClass('products__sidebar__link--active')) {
      $(this).addClass('products__sidebar__link--active');
      $(this)
        .siblings('.products__sidebar__sidecontent')
        .addClass('products__sidebar__sidecontent--active');
      $(this).parent('li').addClass('products__sidebar__sidecontent--active');
    } else {
      $(this).removeClass('products__sidebar__link--active');
      $(this)
        .siblings('.products__sidebar__sidecontent')
        .removeClass('products__sidebar__sidecontent--active');
      $(this).parent('li').removeClass('products__sidebar__sidecontent--active');
    }
  });
  // Сайдбар каталога!

  // Слайдер карточки товара!
  $('.products__images__slider--js').slick({
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
  });
  // Слайдер карточки товара!

  // Ползунок цены!
  $('.price__filter__slider').slider({
    animate: 'slow',
    range: true,
    values: [0, 150000],
    max: 150000,
    slide: function (event, ui) {
      $('.price__filter__input--min').val(ui.values[0]);
      $('.price__filter__input--max').val(ui.values[1]);
    },
  });

  $('.price__filter__input--min').change(function () {
    let minPriceValue = $(this).val();
    let maxPriceValue = $('.price__filter__input--max').val();

    $('.price__filter__slider').slider({
      values: [minPriceValue, maxPriceValue],
    });
  });

  $('.price__filter__input--max').change(function () {
    let maxPriceValue = $(this).val();
    let minPriceValue = $('.price__filter__input--min').val();

    $('.price__filter__slider').slider({
      values: [minPriceValue, maxPriceValue],
    });
  });
  // Ползунок цены!
});
