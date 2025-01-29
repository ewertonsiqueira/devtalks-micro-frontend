<template>
    <div class="full-screen-background"/>
  </template>
  
  <script>
  export default {
    name: 'Congratulations',
    data () {
      return {
        message: 'Congratulations!'
      }
    }
  }
  </script>
  
  <style scoped>
.full-screen-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url('../assets/teteu.gif');
  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2em;
}
  </style>