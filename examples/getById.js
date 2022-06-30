import { apiRoot, projectKey } from "../src/client.js";
import { log } from "../logger.js";
const shippingMethod = (ID) => {
    return apiRoot
    .withProjectKey({projectKey})
    .shippingMethods()
    .withId({ID})
    .get()
    .execute();
}

const taxCategory = (ID) => {
    return apiRoot
    .withProjectKey({projectKey})
    .taxCategories()
    .withId({ID})
    .get()
    .execute();
}
shippingMethod("e6324768-f44a-466d-bce9-e31ec2bf8cd0").then(data=> {
    log(data);
})
taxCategory("e4eaff1f-e8e2-4343-88c8-4fe07496debc").then(data=> {
    log(data);
})