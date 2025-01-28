<template>
  <div></div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    count: window.myapp.counter,
  }),
  mounted() {
    window.addEventListener('onIncrement', () => {
      this.count = window.myapp.counter;
    });
    window.addEventListener('onDecrement', () => {
      this.count = window.myapp.counter;
    });
  },
  methods: {
    handleIncrement : () => {
      window.myapp.incrementor();
    },
    handleDecrement : () => {
      window.myapp.decrementor();
    },
  }
}
</script>