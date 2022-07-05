import {
    addLineItemToCart,
    addDiscountCode,
    addPaymentToCart,
    changeOrderState,
    createOrderFromCart,
    recalculateCart,
    getShippingMethodForCart,
    setShippingMethod
} from "../src/checkout.js";
import { createCart } from "../src/cart.js";
import { createPayment } from "../src/payment.js";
import { log } from '../logger.js'

const sku = "M0E20000000DUW0";
const discountCode = "FLAT50";
const customerId = "dfd11bb9-95b2-48b9-95b8-7fb9daba5bef";

const paymentDraft = 
    {
        "key" : "payment" + Math.random().toString(36).substring(2, 7),
        "interfaceId" : "pay"+Math.random(),
        "amountPlanned" : {
          "currencyCode" : "EUR",
          "centAmount" : 1000
        },
        "paymentMethodInfo" : {
          "paymentInterface" : "STRIPE",
          "method" : "CREDIT_CARD",
          "name" : {
            "en" : "Credit Card"
          }
        },
        "transactions" : [ {
          "timestamp" : "2015-10-20T08:54:24.000Z",
          "type" : "Charge",
          "amount" : {
            "currencyCode" : "EUR",
            "centAmount" : 1000
          },
          "state" : "Pending"
        } ]
      };

const checkoutFlow = async () => {
    // First create a anonymous cart or login customer 
    let cart = await createCart(customerId);
    // console.log(cart);
    // Add products to cart 
    let cartWithItems = await addLineItemToCart(cart.body.id, sku);

    // add discount code if any 
    // cartWithItems = await addDiscountCode(cart.body.id, discountCode);

    // recalculate cart total price because of the discount code
    cartWithItems = await recalculateCart(cart.body.id);

    //  get available shipping method
    const shippingMethod = await getShippingMethodForCart(cart.body.id);
    // console.log(shippingMethod.body.results[0].id);

    // add shipping to cart
    cartWithItems = await setShippingMethod(cart.body.id, shippingMethod.body.results[0].id);

    // create payment
    // add payment to cart
    const payment = await createPayment(paymentDraft);
    // console.log(payment);
    cartWithItems = await addPaymentToCart(cartWithItems.body.id, payment.body.id);

    // create order from cart and set state to confirmed
    let order = await createOrderFromCart(cartWithItems.body.id);
    order = await changeOrderState(order.body.id, "Confirmed");
    if (order) {
        log({
            message: "order created succesfully"
        });
    }
}
checkoutFlow().then(data => log(data)).catch(data => log(data));
