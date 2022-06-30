import { apiRoot, projectKey } from "../src/Client.js";

// https://docs.commercetools.com/api/projects/customers#customerdraft
const createCustomerDraft = (customer) => {
    const {
        firstName,
        lastName,
        email,
        password,
        key,
        countryCode
    } = customer;

    return {
        firstName,
        lastName,
        email,
        password,
        key,
        addresses: [
            {
                "country": countryCode
            }
        ]
    }
}
// https://docs.commercetools.com/api/projects/customers#change-email
const createCustomerEmailUpdateDraft = (email, customer) => {
    return {
        "version": customer.body.version,
        "actions": [
            {
                "action": "changeEmail",
                "email": email
            }
        ]
    }
}
export const createCustomer = (customer) => {
    return apiRoot
        .withProjectKey({ projectKey })
        .customers()
        .post({
            body: createCustomerDraft(customer)
        })
        .execute();
}

export const updateCustomerEmail = async (email, ID) => {

    const customer = await getCustomersById(ID);
    return await apiRoot
        .withProjectKey({ projectKey })
        .customers()
        .withId({ ID })
        .post({
            body: createCustomerEmailUpdateDraft(email, customer)
        })
        .execute();

}
export const getCustomers = () => {
    return apiRoot
        .withProjectKey({ projectKey })
        .customers()
        .get({
            // we can query arguments like limit offset and conditional query predicates
            // you can uncomment args to try
            queryArgs: {
                // limit: 1,
                // offset: 1,
                // where: "lastName=\"Doe\"",
                sort: "firstName desc"
            }
        })
        .execute();
}
export const getCustomersById = (ID) => {
    return apiRoot
        .withProjectKey({ projectKey })
        .customers()
        .withId({ ID })
        .get()
        .execute();
}
// https://docs.commercetools.com/api/projects/customers#delete-customer
export const deleteCustomerById = async (ID) => {
    const customer = await getCustomersById(ID);
    return await apiRoot
        .withProjectKey({ projectKey })
        .customers()
        .withId({ ID })
        .delete({
            queryArgs: {
                version: customer.body.version
            }
        })
        .execute();
}