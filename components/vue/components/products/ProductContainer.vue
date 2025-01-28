<template>
    <div class="product-container">
        <Product v-for="item in items" :key="item.id" :item="item" />
    </div>
</template>

<script>
import Product from './Product.vue';

export default {
    components: {
        Product
    },
    name: 'ProductContainer',
    props: {
        items: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    computed: {
    },
    methods: {
        toCurrency(value) {
            return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }
    }
}
</script>

<style scoped>
.product-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 16px;
    padding: 16px;
    height: calc(100vh - 94px);
}
</style>