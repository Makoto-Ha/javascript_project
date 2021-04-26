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

  

    
    // var array = []
    // var count = 0
    // window.document.addEventListener('keydown', function(event) {
    //   array.push(event.key)
    //   console.log(array)
    //   console.log(count)
    //   count += 1
    //   if(array[0] != 'ArrowUp' && count == 1){
    //     array = []
    //     count = 0
    //   }else if(array[1] != 'ArrowUp' && count == 2){
    //     array = []
    //     count = 0 
    //   }else if(array[2] != 'ArrowDown' && count == 3){
    //     array = []
    //     count = 0
    //   }else if(array[3] != 'ArrowDown' && count == 4){
    //     array = []
    //     count = 0
    //   }else if(array[4] != 'ArrowLeft' && count == 5){
    //     array = []
    //     count = 0
    //   }else if(array[5] != 'ArrowRight' && count == 6){
    //     array = []
    //     count = 0
    //   }else if(array[6] != 'ArrowLeft' && count == 7){
    //     array = []
    //     count = 0
    //   }else if(array[7] != 'ArrowRight' && count == 8){
    //     array = []
    //     count = 0
    //   }else if(array[8] != 'b' && count == 9){
    //     array = []
    //     count = 0
    //   }else if(array[9] != 'a' && count == 10){
    //     array = []
    //     count = 0
    //   }else if(array.length == 10){
    //     alert('上勾拳')
    //     array = []
    //     count = 0
    //   }
    // }) 

    var array = ['38', '38', '40', '40', '37', '39', '37', '39', '66', '65']
    var i = 0
    document.addEventListener('keydown', function(event) {
      if(array[i] == event.keyCode) {
        i += 1
      }else {
        i = 0
      }
      if(i == 10){
        alert('恭喜答對')
        i = 0
      }
    })