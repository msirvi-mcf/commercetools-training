import { apiRoot, projectKey } from "../src/Client.js";
import { log } from "../logger.js";

export const createCustomer = (customer) => {
    return apiRoot
    .withProjectKey({projectKey})
    .customers()
    .post({
        body: createCustomerDraft(customer)
    })
    .execute();
}
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
export const getCustomers = () => {
    return apiRoot
    .withProjectKey({projectKey})
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
    .withProjectKey({projectKey})
    .customers()
    .withId({ID})
    .get()
    .execute();
}
