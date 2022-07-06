new Glider(document.querySelector('section.quem-e .glider'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  dots: 'section.quem-e .dots',
  arrows: {
    prev: 'section.quem-e .glider-prev',
    next: 'section.quem-e .glider-next'
  }
})
new Glider(document.querySelector('section.prova-sucesso .glider'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  dots: 'section.prova-sucesso .dots',
  arrows: {
    prev: 'section.prova-sucesso .glider-prev',
    next: 'section.prova-sucesso .glider-next'
  },
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }
  ]
})
