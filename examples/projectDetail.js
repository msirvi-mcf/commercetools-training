import { apiRoot, projectKey } from '../src/Client.js';
import { log } from '../logger.js';

// Getting basic project Detail using the SDK

const getProjectDetails = () => {
    return apiRoot
    .withProjectKey({projectKey})
    .get()
    .execute();
}

getProjectDetails().then(data => {
    log(data);
})