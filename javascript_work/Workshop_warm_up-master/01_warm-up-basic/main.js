document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('button').addEventListener('click', function() {
    let circle = document.createElement('div')
      document.querySelector('.box').appendChild(circle).classList.add('circle')
  })
})