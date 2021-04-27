function timeout(callback) {
  setTimeout(function(){
    console.log('abc')
    time$()
    callback()
  }, 1000)
}

function time$() {
  console.log('time$')
}
timeout(time$)