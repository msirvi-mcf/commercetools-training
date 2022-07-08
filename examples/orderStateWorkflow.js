import { log } from "../logger.js";
import { createNewState, addTransitionToState } from "../src/stateWorkflow.js";

/*
    Let's create a order workflow
    Custom Order workflow : 
                                new-order => waiting-for-approval => order-approved => completion
                                (Initial)                                               (final)
                                                        ;;;;;
                                                        ;;;;;
                                                        ;;;;;
                                                      ..;;;;;..
                                                       ':::::'
                                                         ':`
                                                    order-rejected
                                                        (final)
 */
const CustomStatesDraft = [
    {
        "key": "new-order",
        "name": { en: "New Order" },
        "type": "OrderState",
        "initial": true
    },
    {
        "key": "waiting-for-approval",
        "name": { en: "Waiting for approval" },
        "type": "OrderState",
        "initial": false
    },
    {
        "key": "order-approved",
        "name": { en: "Order Approved" },
        "type": "OrderState",
        "initial": false
    },
    {
        "key": "order-rejected",
        "name": { en: "Order Rejected" },
        "type": "OrderState",
        "initial": false
    },
    {
        "key": "completion",
        "name": { en: "Order completion" },
        "type": "OrderState",
        "initial": false
    }
];
const createStateWorkflow = async () => {
    let stateData = [];
    stateData = await Promise.all(CustomStatesDraft.map(async (state) => {
        const stateResult = await createNewState(state);
        return stateResult;
    }));
    console.log(stateData);
    const transitionNewOrder = await addTransitionToState(getIdByKey(stateData, "new-order"), [getIdByKey(stateData, "waiting-for-approval")]);
    const transitionApproval = await addTransitionToState(getIdByKey(stateData, "waiting-for-approval"), [getIdByKey(stateData, "order-approved"),getIdByKey(stateData, "order-rejected")]);
    const transitionApproved = await addTransitionToState(getIdByKey(stateData, "order-approved"), [getIdByKey(stateData, "completion")]);
    const transitionRejected = await addTransitionToState(getIdByKey(stateData, "order-rejected"), []);
    const transitionCompleted = await addTransitionToState(getIdByKey(stateData, "completion"), []);
    return {
        transitionNewOrder, transitionApproval, transitionApproved, transitionRejected,transitionCompleted
    }
}
const getIdByKey = (stateData, key) => {
    const ob = stateData.find((o) => o.body.key === key);
    return ob.body.id;
}
createStateWorkflow().then(data=>log(data)).catch(error=>log(error));
