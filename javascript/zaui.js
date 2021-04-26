function setCookTime(cookMethod, food, time, callback) {
    setTimeout(()=>{
      console.log(callback(cookMethod, food))   
    }, time)
    console.log('準備中')
    console.log('製作完成')
  }
  
  function start(callback) {
    let result = setCookTime('煮', '泡麵', 2000, callback)
    callback(result)
  }

  function super_callback(cookMethod, food){
    return `${cookMethod}完美${food}`
  }

  start(super_callback)