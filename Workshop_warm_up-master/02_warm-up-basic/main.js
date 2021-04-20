document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('button').addEventListener('click', function() {
    document.querySelector('.circle').classList.toggle('active')
  })
})