import { apiRoot, projectKey } from "./client.js";

export const createNewState = (stateData) => {
    return apiRoot.withProjectKey({ projectKey })
        .states()
        .post({
            body: stateData
        })
        .execute();
}
export const getStateByKey = (key) => {
    return apiRoot.withProjectKey({ projectKey})
    .states()
    .withKey({key})
    .get()
    .execute();
}
export const getStateById = (ID) => {
    return apiRoot.withProjectKey({ projectKey })
        .states()
        .withId({ ID })
        .get()
        .execute();
}
// transitionStateIds expects array of ids
export const addTransitionToState = (ID, transitionStateIds) => {
    getStateById(ID).then(state=> {
    return apiRoot.withProjectKey({ projectKey })
        .states()
        .withId({ ID })
        .post({
            body: {
                version: state.body.version,
                actions: [
                    {
                        action: "setTransitions",
                        transitions: transitionStateIds.map((transitionStateId) => {
                            return {
                                typeId: "state",
                                id: transitionStateId
                            };
                        })
                    }
                ]
            }
        })
        .execute();
    })
}

