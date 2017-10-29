$(document).ready(() => {

  $('.close-alert').click(() => {
    $('.alert').alert('close')
  })

  $('.alert').on('close.bs.alert', () => {
    console.log('close alert')
  })

  $('.alert').on('closed.bs.alert', () => {
    console.log('closed alert')
  })

})
