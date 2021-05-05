const { ref, computed, createApp} = Vue;

createApp({
  setup() {
      const names = ['Jack', 'John', 'Mary', 'Mar']
      const checkedNames = ref('');

      return {
        names,
        checkedNames
      }
  }
}).mount('#demo')