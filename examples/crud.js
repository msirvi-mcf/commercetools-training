import { createCustomer, deleteCustomerById, getCustomers, getCustomersById, updateCustomerEmail } from '../src/customer.js'
import { log } from "../logger.js";

// uncomment piece of below code to test the operations, customer id can be retrived from query customer api
// query customers data
getCustomers().then(data => {
    log(data);
})
// get customer by id
// getCustomersById("58374859-8ffb-4976-972d-0d4972e7ec21").then(data => {
//     log(data);
// });

const customerData = {
    firstName: "Create",
    lastName: "Customer",
    email: "customer@test.com",
    password: "2hh$5kk",
    key: "create-customer",
    countryCode: "DE"
}

// createCustomer(customerData).then(data => {
//     log(data);
// }).catch(error=> {
//     log(error);
// })

// updateCustomerEmail("test01@gmail.com","2e5964e9-2a41-4f62-a3f3-2de4cecf7f07").then(data => {
//     log(data);
// }).catch(error => log(error));

// deleteCustomerById("2e5964e9-2a41-4f62-a3f3-2de4cecf7f07").then(data => log(data)).catch(error => log(error));