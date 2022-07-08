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
    return getCartById(cartId).then((cart) => {
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
    return getCartById(cartId).then((cart) => {
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
    return getCartById(cartId).then((cart) => {
        return apiRoot
            .withProjectKey({ projectKey })
            .carts()
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
            .carts()
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
    const order = await apiRoot.withProjectKey({projectKey}).orders().get().execute();
    return getCartById(cartId).then((cart) => {
        return apiRoot
            .withProjectKey({ projectKey })
            .orders()
            .post({
                body: {
                    id: cartId,
                    version: cart.body.version,
                    orderNumber: "OR-"+ (order.body.total+1)
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
    return getOrderById(orderId).then((order) => {
        return apiRoot
            .withProjectKey({ projectKey })
            .orders()
            .withId({ ID: orderId })
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
    });

}