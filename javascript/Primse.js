let a = true
let b = false
let p = new Promise(function(resolve, reject){
    if(true) {
        resolve();
    }else {
        reject();
    }
})
.then(function() {
})
.then(function(c) {
    console.log(c)
})