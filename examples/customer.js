import { apiRoot, projectKey } from "../src/Client.js";

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

export const updateCustomerEmail = (email, ID) => {

    return getCustomersById(ID).then(customer => {
        return apiRoot
            .withProjectKey({ projectKey })
            .customers()
            .withId({ ID })
            .post({
                body: createCustomerEmailUpdateDraft(email, customer)
            })
            .execute();
    })

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
