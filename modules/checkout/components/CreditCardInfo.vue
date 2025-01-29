<template>
    <div class="credit-card-container">
      <div :class="['credit-card', { 'is-flipped': isFlipped }]">
        <div class="credit-card-front">
          <div class="card-number">{{ cardNumber }}</div>
          <div class="card-holder">{{ cardHolder }}</div>
          <div class="card-expiry">{{ cardExpiry }}</div>
        </div>
        <div class="credit-card-back">
          <div class="card-cvv">{{ cardCVV }}</div>
        </div>
      </div>
      <form @submit.prevent="handleSubmit" class="credit-card-form">
        <div>
          <label for="cardNumber">Número do cartão</label>
          <input v-mask="['#### #### #### ####']" type="text" id="cardNumber" v-model="cardNumber" maxlength="19" />
        </div>
        <div>
          <label for="cardHolder">Nome impresso no cartão</label>
          <input type="text" id="cardHolder" v-model="cardHolder" maxlength="100" />
        </div>
        <div>
          <label for="cardExpiry">Data de expiração</label>
          <input v-mask="['##/##']" type="text" id="cardExpiry" v-model="cardExpiry" placeholder="MM/YY" />
        </div>
        <div>
          <label for="cardCVV">Código de segurança</label>
          <input type="text" id="cardCVV" v-model="cardCVV" @focus="flipCard" @blur="flipCard" maxlength="3" />
        </div>
        <CustomButton color="green" @click="handleSubmit">Finalizar compra</CustomButton>
      </form>
    </div>
  </template>
 <script>
import CustomButton from './CustomButton.vue';
import { mask } from 'vue-the-mask';

  export default {
    directives: {
      mask
    },
    components: {
        CustomButton
    },
    data() {
      return {
        cardNumber: '',
        cardHolder: '',
        cardExpiry: '',
        cardCVV: '',
        isFlipped: false,
      };
    },
    methods: {
      flipCard() {
        this.isFlipped = !this.isFlipped;
      },
      handleSubmit() {
        this.$emit('submit');
      },
    },
  };
  </script>
  
  <style scoped>
  .credit-card-form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .credit-card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .credit-card {
    width: 300px;
    height: 180px;
    perspective: 1000px;
  }
  
  .credit-card-front,
  .credit-card-back {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
    transition: transform 0.6s;
  }
  
  .credit-card-front {
    background-color: #2a2a2a;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }
  
  .credit-card-back {
    background-color: #2a2a2a;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotateY(180deg);
  }
  
  .is-flipped .credit-card-front {
    transform: rotateY(180deg);
  }
  
  .is-flipped .credit-card-back {
    transform: rotateY(0deg);
  }
  
  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  
  form div {
    margin-bottom: 10px;
  }
  
  form label {
    margin-bottom: 5px;
  }
  
  form input {
    padding: 5px;
    font-size: 16px;
  }
  </style>