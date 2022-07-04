import { apiRoot, projectKey } from "./client.js";

export const customerSignin = (userDetails) => {
    return apiRoot
        .withProjectKey({ projectKey })
        .login()
        .post({
            body: userDetails
        })
        .execute();
}
export const getCartById = (ID) => {
    return apiRoot
        .withProjectKey({ projectKey })
        .carts()
        .withId({ ID })
        .get()
        .execute();
}
export const addDiscountCode = async (cartId, discountCode) => {
    const cart = await getCartById(cartId);
    return apiRoot
        .withProjectKey({ projectKey })
        .carts()
        .withId({ cartId })
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
}
export const addLineItemToCart = async (cartId, sku) => {
    const cart = await getCartById(cartId);
    return apiRoot
        .withProjectKey({ projectKey })
        .carts()
        .withId({ cartId })
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
}

export const recalculateCart = async (cartId) => {
    const cart = await getCartById(cartId);
    return apiRoot
        .withProjectKey({ projectKey })
        .carts()
        .withId({ cartId })
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
export const getShippingMethodForCart = async (cartId) => {
    const cart = await getCartById(cartId);
    return apiRoot
        .withProjectKey({ projectKey })
        .shippingMethods()
        .matchingCart()
        .get({
            queryArgs: {
                cartId
            }
        })
        .execute();
}
export const setShippingMethod = async (cartId, shippingMethodId) => {
    const cart = await getCartById(cartId);
    return apiRoot
        .withProjectKey({ projectKey })
        .withId({ cartId })
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
}

export const createOrderFromCart = async (cartId) => {
    const cart = await getCartById(cartId);
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
}