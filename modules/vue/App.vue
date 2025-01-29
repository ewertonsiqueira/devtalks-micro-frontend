<template>
  <ProductContainer :items="productList" />
</template>

<script>
import ProductContainer from './components/products/ProductContainer.vue';

export default {
  components: {
    ProductContainer
  },
  name: 'app',
  data: () => ({
    productList: []
  }),
  mounted() {
    this.searchProducts();
  },
  methods: {
    searchProducts() {
      fetch('http://localhost:3001/estoque')
        .then(response => response.json())
        .then(data => {
          this.productList = data;
        });
    }
  }
}
</script>