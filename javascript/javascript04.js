var num1 = prompt("請輸入第一個數字")
var num2 = prompt("請輸入第二個數字")
var num3 = prompt("請輸入第三個數字");

if(num1 > num2 && num1 > num3){
    console.log(num1);
}else if(num2 > num1 && num2 > num3){
    console.log(num2);
}else if(num3 > num1 && num3 > num2){
    console.log(num3)
}

if(num1 > num2 && num1 > num3 && num3 > num2){
    console.log(num3);
}else if(num2 > num1 && num2 > num3 && num1 > num3){
    console.log(num1);
}else if(num3 > num1 && num3 > num2 && num2 > num1){
    console.log(num2);
}

if(num1 < num2 && num1 < num3){
    console.log(num1);
}else if(num2 < num1 && num2 < num3){
    console.log(num2);
}else if(num3 < num2 && num3 < num1){
    console.log(num3);
}