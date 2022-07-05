import { apiRoot, projectKey } from "./client.js";

export const createPayment = async (paymentData) => {
    return apiRoot.withProjectKey({projectKey})
        .payments()
        .post({ body: paymentData })
        .execute()
        .then(payment =>{
            return apiRoot.withProjectKey({projectKey})
                .payments()
                .withId({ ID: payment.body.id })
                .post({
                    body: {
                        actions: [
                            {
                                action: "addTransaction",
                                transaction: createTransactionDraft(paymentData)
                            },
                            {
                                action: "setStatusInterfaceCode",
                                interfaceCode: "SUCCESS"
                            },
                            {
                                action: "setStatusInterfaceText",
                                interfaceText: "Transaction success"
                            }
                        ],
                        version: payment.body.version
                    }
                })
                .execute()
            });
}
const createTransactionDraft = (paymentData) => {
    return {
        type: "Charge",
        amount: paymentData.amountPlanned,
        interactionId: paymentData.interactionId,
        state: "Initial",
        timestamp: new Date().toISOString()
    }
};