$(document).ready(() => {

  // $('.carousel').carousel({
  //   // interval: 1000
  // })

  $('.carousel').on('slide.bs.carousel', (event) => {
    console.log('slide: ', `
      方向：${ event.direction }
      从：${ event.from }
      到：${ event.to }
    `)
  })
  $('.carousel').on('slid.bs.carousel', (event) => {
    console.log('slid: ', `
      方向：${ event.direction }
      从：${ event.from }
      到：${ event.to }
    `)
  })

})
