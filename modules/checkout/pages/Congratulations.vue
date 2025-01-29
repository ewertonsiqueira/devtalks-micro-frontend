<template>
    <div class="full-screen-background">
        <CustomButton color="green" :onClick="goToHome">Finalizar compra</CustomButton>
    </div>
  </template>
  
  <script>
  import CustomButton from '../components/CustomButton.vue';

  export default {
    name: 'Congratulations',
    components: {
      CustomButton
    },
    methods: {
      goToHome() {
        this.$router.push('/');
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