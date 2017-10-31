$(document).ready(() => {

  const list = $('#tab-demo .list-group a')
  list.click(function (event) {
    event.preventDefault()
    $(this).tab('show')
  })

  list.on('show.bs.tab', function (event) {
    console.log(`开始显示：${ event.target.getAttribute('href') }`)
  })
  list.on('shown.bs.tab', function (event) {
    console.log(`完全显示：${ event.target.getAttribute('href') }`)
  })
  list.on('hide.bs.tab', function (event) {
    console.log(`开始隐藏：${ event.target.getAttribute('href') }`)
  })
  list.on('hidden.bs.tab', function (event) {
    console.log(`完全隐藏：${ event.target.getAttribute('href') }`)
  })

})
