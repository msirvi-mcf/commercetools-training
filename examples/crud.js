import { createCustomer, getCustomers, getCustomersById} from './Customer.js'
// query customers data
getCustomers().then(data=> {
    log(data);
})
// get customer by id
getCustomersById("58374859-8ffb-4976-972d-0d4972e7ec21").then(data => {
    log(data);
});

const customerData = {
    firstName: "Create",
    lastName: "Customer",
    email: "customer@test.com",
    password: "2hh$5kk",
    key: "create-customer",
    countryCode: "DE"
}

createCustomer(customerData).then(data => {
    log(data);
}).catch(error=> {
    log(error);
})