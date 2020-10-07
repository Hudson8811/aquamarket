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

  $(document).on('click', '.categories_catalog__name', function (e) {
    e.preventDefault();
    if ($(window).width() < 769) {
      $(this).toggleClass('categories_catalog__name--active');
      $(this)
        .siblings('.categories_catalog__nodes_wrapper')
        .toggleClass('categories_catalog__nodes_wrapper--active');
      $(this).siblings('.categories_catalog__img').toggleClass('categories_catalog__img--active');
    }
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

  $(window).width() < 769 ? $('.brends__slider--js').slick('unslick') : null;

  $(window).resize(function () {
    $(window).width() < 769 ? $('.brends__slider--js').slick('unslick') : null;
  });

  $(document).on('click', '.brends_btn--mobile', function (e) {
    e.preventDefault();
    $(this).addClass('brends_btn--mobile--active');
    $('.brends').addClass('brends--active');
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
    if ($(this).scrollTop() > 147 && !$('.header').hasClass('header__ordering')) {
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
    $('.sidebar').toggleClass('sidebar--overlay');
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
  $(document).on('click', '.products__sidebar__link', function (e) {
    e.preventDefault();
    if (!$(this).hasClass('products__sidebar__link--active')) {
      $('.products__sidebar__link').removeClass('products__sidebar__link--active');
      $('.products__sidebar__sidecontent').removeClass('products__sidebar__sidecontent--active');
      $('.products__sidebar__content li').removeClass('products__sidebar__sidecontent--active');
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

  // Настройка кастомного скрола!
  $(window).on('load', function () {
    $('.castom_scroll').mCustomScrollbar();
  });
  // Настройка кастомного скрола!

  // Счетчик избранного!
  $(document).on('click', '.favorites__counts__btn', function () {
    let favoritesCounts = $(this).siblings('.favorites__counts__input').val();
    $(this).hasClass('favorites__counts__btn--max') ? ++favoritesCounts : --favoritesCounts;
    if (favoritesCounts < 0) {
      return;
    } else {
      $(this).siblings('.favorites__counts__input').val(favoritesCounts);
    }
  });

  $(document).on('focus', '.favorites__counts__input', function () {
    $(this).parent().addClass('favorites__counts--inFocus');
  });

  $(document).on('blur', '.favorites__counts__input', function () {
    $(this).parent().removeClass('favorites__counts--inFocus');
  });
  // Счетчик избранного!

  // Слайдер карточки товара!
  $('.card_product__big_slider--js').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow: $('.card_product__tools .banner__arrow--prev--js'),
    nextArrow: $('.card_product__tools .banner__arrow--next--js'),
  });

  $(document).on('click', '.card_product__small_slider__item', function () {
    const productSlideNumber = $(this).data('id');
    $('.card_product__small_slider__item').removeClass('card_product__small_slider__item--active');
    $(this).addClass('card_product__small_slider__item--active');
    $('.card_product__big_slider--js').slick('slickGoTo', productSlideNumber);
  });
  $('.card_product__big_slider--js').on('beforeChange', function (
    event,
    slick,
    currentSlide,
    nextSlide,
  ) {
    $('.card_product__small_slider__item').removeClass('card_product__small_slider__item--active');
    $(`.card_product__small_slider__item[data-id="${nextSlide}"]`).addClass(
      'card_product__small_slider__item--active',
    );
  });
  // Слайдер карточки товара!

  // Маска телефона!
  $('.mask--js').mask('+7 (999) 999-99-99');
  // Маска телефона!

  // Всплывающее окно обратной связи!
  $(document).on('click', '.call__popup_btn--js', function (e) {
    e.preventDefault();

    $('.call_popup').css({
      display: 'flex',
    });

    $('body').css({
      overflow: 'hidden',
    });

    setTimeout(() => {
      $('.body__overlay').addClass('active');
      $('.header').addClass('header--overlay');
      $('.call_popup').css({
        transform: 'translateY(0)',
      });
    }, 500);
  });

  $(document).on('click', '.call_popup__remove_btn', function (e) {
    e.preventDefault();
    $('.call_popup').css({
      transform: 'translateY(100%)',
    });

    setTimeout(() => {
      $('.body__overlay').removeClass('active');
      $('.header').removeClass('header--overlay');
      $('body').css({
        overflow: 'auto',
      });

      $('.call_popup').css({
        display: 'none',
      });
    }, 500);
  });
  // Всплывающее окно обратной связи!

  // Высчитываем левый отступ для basketPage__info__sum!
  function mlForSum() {
    if ($('main').hasClass('basketPage')) {
      let mlDescription = $('.favorites__description').offset().left;
      let mlContainer = $('.container').offset().left;
      let mlSum = mlDescription - mlContainer;
      $('.basketPage__info__sum').css({ marginLeft: `${mlSum}px` });
    }
  }

  mlForSum();

  $(window).resize(function () {
    mlForSum();
  });
  // Высчитываем левый отступ для basketPage__info__sum!

  // Форма!

  $('.ordering__inputbox--input').focus(function () {
    $(this)
      .parent('.ordering__inputbox')
      .removeClass('ordering__inputbox--error')
      .addClass('ordering__inputbox--active');
  });

  $('.ordering__inputbox--input').blur(function () {
    if ($(this).val() == '') {
      $(this)
        .parent('.ordering__inputbox')
        .removeClass('ordering__inputbox--active')
        .removeClass('ordering__inputbox--valid')
        .removeClass('ordering__inputbox--errorEmail')
        .addClass('ordering__inputbox--error');
    } else if ($(this).attr('type') == 'email' && !$(this).val().includes('@')) {
      $(this)
        .parent('.ordering__inputbox')
        .addClass('ordering__inputbox--errorEmail')
        .removeClass('ordering__inputbox--valid');
      return;
    } else if ($(this).attr('type') == 'email' && $(this).val().includes('@')) {
      $(this)
        .parent('.ordering__inputbox')
        .removeClass('ordering__inputbox--errorEmail')
        .addClass('ordering__inputbox--valid');
      return;
    } else {
      $(this)
        .parent('.ordering__inputbox')
        .addClass('ordering__inputbox--valid')
        .removeClass('ordering__inputbox--error');
    }
  });

  // Форма!

  // Раскрывающиеся блоки формы!
  $('.ordering__block__func_content').slideUp();
  $(document).on('click', '.ordering__block__func_heading', function () {
    $(this).toggleClass('ordering__block__func_heading--active');
    $(this).siblings('.ordering__block__func_content').slideToggle();
  });
  // Раскрывающиеся блоки формы!

  // Селект выбора адреса доставки!
  $(document).on('click', '.address_select__input', function () {
    $('.address_select__link').toggleClass('address_select__link--disabled');
    $(this).parent('.address_select').toggleClass('address_select--active');
  });

  $(document).on('click', '.address_select__content__item', function () {
    const address = $(this).text();
    $('.address_select__input').text(address);
  });
  // Селект выбора адреса доставки!

  // Табы личного кабинета!
  $(document).on('click', '.persona__heading__link', function (e) {
    e.preventDefault();

    if (!$(this).hasClass('persona__heading__link--active')) {
      const idPersonaLink = $(this).data('id');
      $('.persona__heading__link').removeClass('persona__heading__link--active');
      $('.persona__content').removeClass('persona__content--active');
      $(this).addClass('persona__heading__link--active');
      $(`.persona__content[data-id="${idPersonaLink}"]`).addClass('persona__content--active');
    }
  });
  // Табы личного кабинета!

  // Счетчик sendAgain__btn!
  function againCount(time, item) {
    $(`${item}`).text(time);

    setInterval(() => {
      let time = $(`${item}`).text();

      if (time == 0) {
        return;
      }

      time--;
      $(`${item}`).text(time);
    }, 1000);
  }

  againCount(60, '.sendAgain__btn--count');
  // Счетчик sendAgain__btn!

  // Редактирование адреса!
  $(document).on('click', '.edit', function (e) {
    e.preventDefault();
    $(this).addClass('edit--disabled');
    $(this).siblings('.edit--ok').addClass('edit--ok--active');
    $(this)
      .siblings('.ordering__radio_btn__heading')
      .css({
        pointerEvents: 'auto',
      })
      .focus();
  });

  $(document).on('click', '.edit--ok', function (e) {
    e.preventDefault();
    $(this).removeClass('edit--ok--active');
    $(this).siblings('.edit').removeClass('edit--disabled');
    $(this)
      .siblings('.ordering__radio_btn__heading')
      .css({
        pointerEvents: 'none',
      })
      .blur();
  });

  $('.favorites__remove').click(function (e) {
    e.preventDefault();
    $(this).parents('.persona__adress_block').remove();
    if ($('.persona__adress_block').length < 2) {
      $('.persona__adress_block').removeClass('persona__adress_block--50');
    }
  });
  // Редактирование адреса!

  // Слайдер статьи!
  $('.article__slider--js').slick({
    infinite: false,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
  });

  $(window).width() < 1001 ? $('.article__slider--js').slick('unslick') : null;

  $(window).resize(function () {
    $(window).width() < 1001 ? $('.article__slider--js').slick('unslick') : null;
  });
  // Слайдер статьи!

  // Мобильное меню!
  $(document).on('click', '.header__burger', function () {
    $('.mobileMenu').addClass('mobileMenu--active');
  });

  $(document).on('click', '.mobileMenu__remove', function () {
    $('.mobileMenu').removeClass('mobileMenu--active');
  });

  // Мобильное меню!

  // Мобильный фильтр!
  $(document).on('click', '.filter__mobile_btn', function (e) {
    e.preventDefault();

    $(this).toggleClass('filter__mobile_btn--active');
    $('.products__sidebar').toggleClass('products__sidebar--active');
  });
  // Мобильный фильтр!

  // Поиск!
  $(document).on('focus', '.search__input', function () {
    $(this).addClass('search__input--active');
    $('.search__block').addClass('search__block--active');
    $('.body__overlay').addClass('active');
    $('.header').addClass('header--overlay');
    $('.sidebar').addClass('sidebar--overlay');
  });

  $(document).on('input', '.search__input', function () {
    let searchValue = $('.search__input').val().trim();

    let searchItems = document.querySelectorAll('.search__link_wrap .sidebar__side__link');
    let searchItems2 = document.querySelectorAll('.search__item');

    if (searchValue != '') {
      $('.search').addClass('search--active');

      searchItems.forEach(function (element) {
        if (element.innerText.search(searchValue) == -1) {
          $(element).removeClass('sidebar__side__link--active');
        } else {
          $(element).addClass('sidebar__side__link--active');
        }
      });

      searchItems2.forEach(function (element) {
        if (element.innerText.search(searchValue) == -1) {
          $(element).removeClass('search__item--active');
        } else {
          $(element).addClass('search__item--active');
        }
      });

      if ($('.sidebar__side__link--active').length > 0 || $('.search__item--active').length > 0) {
        let searchCount = $('.search__item--active').length;
        $('.search__all_btn').addClass('search__all_btn--active');
        $('.search__all_btn--count').text(searchCount);
        $('.search .persona__comeInNotification').removeClass(
          'persona__comeInNotification--active',
        );
      } else {
        $('.search__all_btn').removeClass('search__all_btn--active');
        $('.search .persona__comeInNotification').addClass('persona__comeInNotification--active');
      }
    } else {
      $('.search').removeClass('search--active');
      $('.search__link_wrap .sidebar__side__link').removeClass('sidebar__side__link--active');
      $('.search__item').removeClass('search__item--active');
      $('.search__all_btn').removeClass('search__all_btn--active');
    }
  });

  $(document).on('blur', '.search__input', function () {
    $('.search__block').removeClass('search__block--active');
    $('.search').removeClass('search--active');
    $('.body__overlay').removeClass('active');
    $('.header').removeClass('header--overlay');
    $(this).removeClass('search__input--active');
    $('.search__link_wrap .sidebar__side__link').removeClass('sidebar__side__link--active');
    $('.search__item').removeClass('search__item--active');
    $('.search__all_btn').removeClass('search__all_btn--active');
    $('.search .persona__comeInNotification').removeClass('persona__comeInNotification--active');
    $('.sidebar').removeClass('sidebar--overlay');
  });

  $(document).on('click', '.search__burger', function () {
    $('.search__block').removeClass('search__block--active');
    $('.search').removeClass('search--active');
    $('.body__overlay').removeClass('active');
    $('.header').removeClass('header--overlay');
    $(this).removeClass('search__input--active');
    $('.search__link_wrap .sidebar__side__link').removeClass('sidebar__side__link--active');
    $('.search__item').removeClass('search__item--active');
    $('.search__all_btn').removeClass('search__all_btn--active');
    $('.search .persona__comeInNotification').removeClass('persona__comeInNotification--active');
    $('.sidebar').removeClass('sidebar--overlay');
  });
  // Поиск!

  // Защита почты!

  // Защита почты!
});
