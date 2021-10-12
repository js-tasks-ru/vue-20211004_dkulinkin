import { createApp } from './vendor/vue.esm-browser.js';

const VueCalculator = {
  data() {
    return {
      firstNumber: 0,
      lastNumber: 0,
      typeOperation: 'sum',
    };
  },
  computed: {
    result() {
      switch (this.typeOperation) {
        case 'sum':
          return this.firstNumber + this.lastNumber;
        case 'subtract':
          return this.firstNumber - this.lastNumber;
        case 'multiply':
          return this.firstNumber * this.lastNumber;
        case 'divide':
          return this.firstNumber / this.lastNumber;
        default:
          return undefined;
      }
    },
  },
};

createApp(VueCalculator).mount('#app');
