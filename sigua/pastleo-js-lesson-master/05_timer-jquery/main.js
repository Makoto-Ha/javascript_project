document.addEventListener("DOMContentLoaded", function() {
  let timer, cnt = 0;
  document.querySelector('button').addEventListener("click", function() {
    if (timer){
      clearInterval(timer)
      timer = null;

      document.querySelector('button').textContent = "start"
      document.querySelector('#running').classList.remove('run');
    }else {
      timer = setInterval(function() {
        cnt += 1
        document.querySelector('#seconds').textContent = (Math.floor(cnt / 10))

        document.querySelector('.dots').insertAdjacentElement("afterbegin", document.querySelector('.dots div:last-child'))

        }, 100)

    document.querySelector('button').textContnet = "Stop"
    document.querySelector('.timer > div:nth-child(1)').classList.add("run")
    }
  })
})




$(document).ready(function() {
  let timer, cnt = 0;
  $('button').click(function() {
    if (timer){
      clearInterval(timer)
      timer = null;

      $('button').text('start')
      $('#running').slideUp();
    }else {
      timer = setInterval(function() {
        cnt += 1
        $('#seconds').text(Math.floor(cnt / 10))

        $('.dots div:last-child').prependTo($('.dots'))

        }, 100)


    $('button').text('Stop')
    $('#running').slideDown();
    }
  })
})


