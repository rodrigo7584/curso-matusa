const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
