document.addEventListener('DOMContentLoaded', function() {
    const statusDiv = document.querySelector('.status')
    document.getElementById('on').addEventListener('click', function() {
      document.body.classList.add('light')
      document.querySelector('.status span').textContent = '開'

      statusDiv.classList.remove('off')
      statusDiv.classList.add('on')
    })
    document.getElementById('off').addEventListener('click', function()
    {
      document.body.classList.remove('light')
      document.querySelector('.status span').textContent = "關"

      statusDiv.classList.remove('on')
      statusDiv.classList.add('off')
   
    })
})