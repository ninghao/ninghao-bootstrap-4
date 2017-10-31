$(document).ready(() => {

  $('#modal-demo').on('show.bs.modal', function () {
    console.log('show')
  })
  $('#modal-demo').on('shown.bs.modal', function () {
    console.log('shown')
  })
  $('#modal-demo').on('hide.bs.modal', function () {
    console.log('hide')
  })
  $('#modal-demo').on('hidden.bs.modal', function () {
    console.log('hidden')
  })

})
