import { createApp } from './vendor/vue.esm-browser.js';

const Counter = {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
  },
};

createApp(Counter).mount('#app');
