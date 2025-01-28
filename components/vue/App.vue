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
  mounted() {},
  methods: {}
}
</script>