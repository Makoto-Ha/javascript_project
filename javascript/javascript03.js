var n1 = 10 , n2 = 20;
var n = n1++;
console.log('n = ' +n); /* 10 20直接賦給n*/ 
console.log('n1 =' +n1); /* 11 n1沒有賦予給誰，還直接印出n1，所以會得到n1++的值*/
n = ++n1;
console.log('n = ' +n); /* 12 因為n1已經是11了，所以++n1是先自增再賦予新值，所以會得到11+1=12*/
console.log('n1 ='+n1); /* 12 對於n1來說都沒有賦予給誰，也都沒有在自增的時候輸出，所以都會+1=12*/
n = n2--;
console.log('n = ' +n); /* 20 這些道理都同上*/
console.log('n2 =' +n2); /* 19 */
n = --n2;
console.log('n = ' +n); /* 18 */
console.log('n2 =' +n2); /* 18 */
