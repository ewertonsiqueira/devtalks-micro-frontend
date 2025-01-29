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
            <div class="input-field">
                <label for="cardNumber">Número do cartão</label>
                <input v-mask="['#### #### #### ####']" type="text" id="cardNumber" v-model="cardNumber" maxlength="19" />
                <span v-if="errors.cardNumber" class="error-message">{{ errors.cardNumber }}</span>
            </div>
            <div class="input-field">
                <label for="cardHolder">Nome impresso no cartão</label>
                <input type="text" id="cardHolder" v-model="cardHolder" maxlength="100" />
                <span v-if="errors.cardHolder" class="error-message">{{ errors.cardHolder }}</span>
            </div>
            <div class="input-field">
                <label for="cardExpiry">Data de expiração</label>
                <input v-mask="['##/##']" type="text" id="cardExpiry" v-model="cardExpiry" placeholder="MM/YY" />
                <span v-if="errors.cardExpiry" class="error-message">{{ errors.cardExpiry }}</span>
            </div>
            <div class="input-field">
                <label for="cardCVV">Código de segurança</label>
                <input type="text" id="cardCVV" v-model="cardCVV" @focus="flipCard" @blur="flipCard" maxlength="3" />
                <span v-if="errors.cardCVV" class="error-message">{{ errors.cardCVV }}</span>
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
            errors: {}
        };
    },
    methods: {
        flipCard() {
            this.isFlipped = !this.isFlipped;
        },
        validateForm() {
            this.errors = {};
            if (!this.cardNumber.match(/^\d{4} \d{4} \d{4} \d{4}$/)) {
                this.errors.cardNumber = 'Número do cartão inválido';
            }
            if (!this.cardHolder) {
                this.errors.cardHolder = 'Nome impresso no cartão é obrigatório';
            }
            if (!this.cardExpiry.match(/^\d{2}\/\d{2}$/)) {
                this.errors.cardExpiry = 'Data de expiração inválida';
            }
            if (!this.cardCVV.match(/^\d{3}$/)) {
                this.errors.cardCVV = 'Código de segurança inválido';
            }
            return Object.keys(this.errors).length === 0;
        },
        handleSubmit() {
            if (this.validateForm()) {
                this.$emit('submit');
            }
        }
    }
};
</script>

<style scoped>
.input-field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.error-message {
    color: red;
    font-size: 12px;
}
.credit-card-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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