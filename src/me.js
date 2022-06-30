import { log } from "../logger.js";
import { meApiRoot, projectKey } from "./client.js";

export const getMe = () => {
    return meApiRoot
        .withProjectKey({ projectKey })
        .me()
        .get()
        .execute();
}

export const getMyActiveCarts = () => {
    return meApiRoot
        .withProjectKey({ projectKey })
        .me()
        .activeCart()
        .get()
        .execute()
}

export const getMyOrders = () => {
    return meApiRoot
        .withProjectKey({ projectKey })
        .me()
        .orders()
        .get()
        .execute();
}

export const createMyCart = () => {
    return meApiRoot
        .withProjectKey({ projectKey })
        .me()
        .carts()
        .post({
            body: {
                "currency": "EUR"
            }
        })
        .execute();
}
const createLineItemDraft = (cart, sku) => {
    return {
        "version": cart.body.version,
        "actions": [{
            "action": "addLineItem",
            "sku": sku
        }]
    }
}

export const addLineItem = async (sku) => {
    const cart = await getMyActiveCarts();
    return meApiRoot
        .withProjectKey({ projectKey })
        .me()
        .carts()
        .withId({ ID: cart.body.id })
        .post({
            body: createLineItemDraft(cart,sku)
        })
        .execute();
}
