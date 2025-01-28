<template>
    <div class="product-item">
        <img :src="item.image" :alt="item.name" class="product-image" />
        <h2 class="product-name">{{ item.name }}</h2>
        <p class="product-description">{{ item.description }}</p>
        <p class="product-value">{{ toCurrency(item.value) }}</p>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        toCurrency(value) {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(value);
        }
    }
}
</script>

<style scoped>

.product-item {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
}

.product-image {
    max-width: 50%;
    height: auto;
    border-radius: 8px;
}

.product-name {
    font-size: 1.5em;
    margin: 8px 0;
}

.product-description {
    font-size: 1em;
    color: #666;
}

.product-value {
    font-size: 1.2em;
    color: #333;
    font-weight: bold;
}
</style>