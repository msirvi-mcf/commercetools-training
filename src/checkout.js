import { apiRoot, projectKey } from "./client.js";
import { getCartById } from "./cart.js";

export const customerSignin = (userDetails) => {
    return apiRoot
        .withProjectKey({ projectKey })
        .login()
        .post({
            body: userDetails
        })
        .execute();
}
// export const createCart = async(customerId) => {
//     const customer = await apiRoot.withProjectKey({projectKey}).customers().withId({customerId}).get().execute();
//     return apiRoot
//     .withProjectKey({ projectKey }).carts().post({
//         body: {
//           currency: "EUR",
//           country: "DE",
//           customerId: customer.body.id,
//           customerEmail: customer.body.email,
//           shippingAddress: customer.body.addresses.find(address => address.id == customer.body.defaultShippingAddressId),
//           inventoryMode: "ReserveOnOrder",
//           deleteDaysAfterLastModification: 90
//         }
//     }).execute();
// }
// export const getCartById = (ID) => {
//     return apiRoot
//         .withProjectKey({ projectKey })
//         .carts()
//     .withId({ ID })
//     .get()
//     .execute();
// }
export const addDiscountCode = async (cartId, discountCode) => {
    getCartById(cartId).then((cart) => {
        return apiRoot
            .withProjectKey({ projectKey })
            .carts()
            .withId({ ID: cartId })
            .post({
                body: {
                    actions: [{
                        action: "addDiscountCode",
                        code: discountCode,
                    }],
                    version: cart.body.version,
                },
            })
            .execute();
    })
}
export const addLineItemToCart = async (cartId, sku) => {
    getCartById(cartId).then((cart) => {
        return apiRoot
            .withProjectKey({ projectKey })
            .carts()
            .withId({ ID: cart.body.id })
            .post({
                body: {
                    "version": cart.body.version,
                    "actions": [{
                        "action": "addLineItem",
                        "sku": sku
                    }]
                }
            })
            .execute();
    })
}

export const recalculateCart = async (cartId) => {
    getCartById(cartId).then((cart) => {
        return apiRoot
            .withProjectKey({ projectKey })
            .carts()
            .withId({ ID: cartId })
            .post({
                body: {
                    actions: [{
                        action: "recalculate",
                    }],
                    version: cart.body.version,
                },
            })
            .execute();
    }

    )

}
export const getShippingMethodForCart = async (cartId) => {
    return apiRoot
        .withProjectKey({ projectKey })
        .shippingMethods()
        .get()
        .execute();
}
export const setShippingMethod = async (cartId, shippingMethodId) => {
    getCartById(cartId).then((cart) => {
        return apiRoot
            .withProjectKey({ projectKey })
            .shippingMethods()
            .withId({ ID: cartId })
            .post({
                body: {
                    actions: [{
                        action: "setShippingMethod",
                        shippingMethod: {
                            typeId: "shipping-method",
                            id: shippingMethodId
                        }
                    }],
                    version: cart.body.version
                }
            })
            .execute();
    })
}
export const addPaymentToCart = async (cartId, paymentId) => {
    return getCartById(cartId).then((cart) => {
        return apiRoot
            .withProjectKey({ projectKey })
            .cart()
            .withId({ ID: cartId })
            .post({
                body: {
                    version: cart.body.version,
                    actions: [{
                        action: "addPayment",
                        payment: {
                            typeId: "payment",
                            id: paymentId
                        }
                    }]
                }
            })
            .execute();
    })
}
export const createOrderFromCart = async (cartId) => {
    return getCartById(cartId).then((cart) => {
        return apiRoot
            .withProjectKey({ projectKey })
            .orders()
            .post({
                body: {
                    id: cartId,
                    version: cart.body.version,
                }
            })
            .execute();
    })
}
export const getOrderById = (orderId) => {
    return apiRoot
        .withProjectKey({ projectKey })
        .orders()
        .withId({ ID: orderId })
        .get()
        .execute();
}

export const changeOrderState = async (orderId, stateName) => {
    const order = await getOrderById(orderId);
    return apiRoot
        .withProjectKey({ projectKey })
        .orders()
        .withId({ orderId })
        .post({
            body: {
                version: order.body.version,
                actions: [{
                    action: "changeOrderState",
                    orderState: stateName
                }]
            }
        })
        .execute();
}