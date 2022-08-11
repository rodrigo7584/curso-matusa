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
const time = new Date().getTime() + 900000

const timer = setInterval(function () {
  const timeNow = new Date().getTime()
  const timeLeft = time - timeNow
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
  document.querySelector('.relogio .minutos h1').innerHTML = minutes
  document.querySelector('.relogio .segundos h1').innerHTML = seconds
  if (timeLeft < 0) {
    clearInterval(timer)
    document.querySelector('.relogio .minutos h1').innerHTML = 0
    document.querySelector('.relogio .segundos h1').innerHTML = 0
  }
}, 1000)
