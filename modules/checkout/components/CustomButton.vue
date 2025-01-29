<template>
    <button :style="{ backgroundColor: color }" @click="handleClick">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      color: {
        type: String,
        default: 'blue'
      },
      onClick: {
        type: Function,
        default: () => {}
      }
    },
    methods: {
      handleClick() {
        this.onClick();
      }
    }
  }
  </script>
  
  <style scoped>
  button {
    border: none;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
  }
  </style>