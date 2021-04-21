    // var box = document.getElementById("box");  // 获取页面元素的引用指针
    // box.style.position = "absolute";  // 色块绝对定位
    // box.style.width = "20px";  // 色块宽度
    // box.style.height = "20px";  // 色块高度
    // box.style.backgroundColor = "red";  // 色块背景
    // document.onkeydown = keyDown;
    // //在Document对象中注册keyDown事件处理函数
    // function keyDown(event){  // 方向键控制元素移动函数
    //     var event = event || window.event;  // 标准化事件对象
    //     switch(event.keyCode){  // 获取当前按下键盘键的编码
    //         case 37 :  // 按下左箭头键，向左移动5个像素
    //             box.style.left = box.offsetLeft - 5  + "px";
    //             break;
    //         case 39 :  // 按下右箭头键，向右移动5个像素
    //             box.style.left = box.offsetLeft + 5 + "px";
    //             break;
    //         case 38 :  // 按下上箭头键，向上移动5个像素
    //             box.style.top = box.offsetTop  - 5 + "px";
    //             break;
    //         case 40 :  // 按下下箭头键，向下移动5个像素
    //             box.style.top = box.offsetTop  + 5 + "px";
    //             break;
    //     }
    // }
    // var key = document.getElementById("key");
    // window.onkeydown =f;  //注册keydown事件处理函数
    // window.onkeyup = f;  //注册keyup事件处理函数
    // window.onkeypress = f;  //注册keypress事件处理函数
    // function f (e) {
    //     var e = e || window.event;  //标准化事件处理
    //     var s = e.keyCode;  //获取键盘事件类型和按下的值
    //     document.write = s;
    // }
    // document.addEventListener('keyup', function(event) {
    //   if(event.keyCode == 38){
    //     event.target.addEventListener('keyup', function(event){
    //       if(event.keyCode == 38){
    //         event.target.addEventListener('keyup', function(event){
    //           if(event.keyCode == 40){
    //             event.target.addEventListener('keyup', function(event){
    //               if(event.keyCode == 40){
    //                 event.target.addEventListener('keyup', function(event){
    //                   if(event.keyCode == 37){
    //                     event.target.addEventListener('keyup', function(event){
    //                       if(event.keyCode == 39){
    //                         event.target.addEventListener('keyup', function(event){
    //                           if(event.keyCode == 37){
    //                             event.target.addEventListener('keyup', function(event){
    //                               if(event.keyCode == 39){
    //                                 event.target.addEventListener('keyup', function(event){
    //                                   if(event.keyCode == 66){
    //                                     event.target.addEventListener('keyup', function(event){
    //                                       if(event.keyCode == 65){
    //                                         alert('爽')    
    //                                       }
    //                                     })       
    //                                   }
    //                                 })        
    //                               }
    //                             })        
    //                           }
    //                         })        
    //                       }
    //                     })      
    //                   }
    //                 })        
    //               }
    //             })    
    //           }
    //         })
    //       }
    //     })
    //   }
    // })

    function a() {
      if(keyCode == 38){
        callback()
      }
    }

    function b() {
      console.log('a')
    }

    document.onkeydown = a()