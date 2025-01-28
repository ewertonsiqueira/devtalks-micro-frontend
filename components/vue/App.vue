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
    productList: [
      {
        name: 'Fazer 250',
        description: 'Moto Brunin',
        value: 20000,
        image: '../../shared/assets/fz.jpg'
      },
      {
        name: 'Ka',
        description: 'Carro Teteu',
        value: 45000,
        image: '../../shared/assets/ka.jpg'
      },
      {
        name: 'Gol',
        description: 'Carro Léo',
        value: 50000,
        image: '../../shared/assets/gol.jpg'
      },
      {
        name: 'Civicão',
        description: 'Carro Moço',
        value: 64000,
        image: '../../shared/assets/civic.png'
      },
      {
        name: 'Peugeot',
        description: 'Carro Junin',
        value: 70000,
        image: '../../shared/assets/308.png'
      },
      {
        name: 'Jetta',
        description: 'Carro Chefinho',
        value: 100000,
        image: '../../shared/assets/jetta.png'
      }
    ]
  }),
  mounted() {},
  methods: {}
}
</script>