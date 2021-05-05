const {ref, createApp} = Vue;

createApp({
  setup() {
    const price = ref(0)

    const calPrice = price => {
    
      if (isNaN(Number(price))) {
        return "麥來亂"
      }else {
        return price * 0.8
      }

        return price;
      };

    return {
      price, calPrice
    }
  }
}).mount('#demo');


// const vm = Vue.createApp({
//   data() {
//     return {
//       price: 100
//     }
//   },

//   methods: {
//     calPrice(price) {
//       if(price >= 1000) {
//         return price - 100;
//       }else {
//         return price
//       }
//     }
//   }
// })

// vm.mount('#demo')