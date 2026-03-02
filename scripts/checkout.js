import {cart} from '../data/cart.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';

renderOrderSummary();
renderPaymentSummary();

let cartQuantity = 0;
cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
});
document.querySelector('.js-checkout-item-count').innerHTML = cartQuantity;