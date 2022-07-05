import { apiRoot, projectKey } from "./client.js";

export const createCart = async (customerId) => {
    const customer = await apiRoot.withProjectKey({ projectKey }).customers().withId({ ID: customerId }).get().execute();
    return apiRoot
        .withProjectKey({ projectKey }).carts().post({
            body: {
                currency: "EUR",
                country: "DE",
                customerId: customer.body.id,
                customerEmail: customer.body.email,
                shippingAddress: customer.body.addresses.find(address => address.id == customer.body.defaultShippingAddressId),
                inventoryMode: "ReserveOnOrder",
                deleteDaysAfterLastModification: 90
            }
        }).execute();
}

export const getCartById = (cartId) => {
    return apiRoot
        .withProjectKey({ projectKey })
        .carts()
        .withId({ ID: cartId })
        .get()
        .execute();
}