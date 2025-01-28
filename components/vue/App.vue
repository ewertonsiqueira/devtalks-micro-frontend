<template>
  <div style="display: flex; width: 100%; flex-direction: column;">
      <h3>
        Aqui é o vue
      </h3>
      <span>
        {{ count }}
      </span>
      <input type="button" v-on:click="handleIncrement" value="+"></input>
      <input type="button" v-on:click="handleDecrement" value="-"></input>
  </div>
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