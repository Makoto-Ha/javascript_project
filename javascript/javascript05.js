var height = prompt();
var money = prompt();
var face = prompt();

if(height < 0 || money < 0 || face < 0 || isNaN(height) || isNaN(money) || isNaN(face) || !isNaN('')){
    alert('別亂輸入');
}else{
    if(height >= 180 && money >= 1000 && face >= 500){
        alert('我一定要嫁給他');
    }else if(height >= 180 || money >= 1000 || face >=500){
        alert('嫁吧，比上不足，比下有余');
    }else{
        alert('不嫁！');
    }
}