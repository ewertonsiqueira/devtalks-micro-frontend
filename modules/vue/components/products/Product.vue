<template>
    <div class="product-item">
        <img :src="item.image" :alt="item.name" class="product-image" />
        <h3 class="product-name">{{ item.name }}</h3>
        <p class="product-description">{{ item.description }}</p>
        <p class="product-value">{{ toCurrency(item.value) }}</p>
        <button class="buy-button" @click="addToCart(item)">Adicionar</button>
    </div>
</template>

<script>
import { showToast } from '../../../../shared/components/Toast';
import utils from '../../../../shared/resources/utils'

export default {
    name: 'ProductItem',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        toCurrency (value) {
            return utils.toCurrency(value);
        },
        addToCart(product) {
            fetch('http://localhost:3001/carrinho', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }).then(() => {
                showToast({
                    message: 'Adicionado ao carrinho',
                });
            }).catch((err) => {
                showToast({
                    message: 'Ocorreu um erro ao adicionar ao carrinho',
                });
            })
        }
    }
}
</script>
<style scoped>
    .buy-button {
        background-color: #28a745;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 1em;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .buy-button:hover {
        background-color: #218838;
    }

.product-item {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: 10px
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