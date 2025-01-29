<template>
    <div class="checkout-page">
      <CreditCardInfo @submit="finalizePurchase"/>
    </div>
  </template>
  
  <script>
  import { showToast } from '../../../shared/components/Toast';
  import CreditCardInfo from '../components/CreditCardInfo.vue';
  
  export default {
    name: 'Checkout',
    components: {
      CreditCardInfo
    },
    methods: {
      finalizePurchase() {
       showToast({ message: 'Compra finalizada com sucesso!' });
       
       setTimeout(async () => {
        await fetch('http://localhost:3000/carrinho/clear', {
          method: 'POST'
        })
        .finally(() => {
            this.$router.push('/checkout/congratulations');
        });

       }, 2000);
      }
    }
  }
  </script>
  
  <style scoped>
  .checkout-page {
    padding: 20px;
  }
  
  button {
    margin-top: 20px;
  }
  </style>