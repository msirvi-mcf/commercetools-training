import { apiRoot, projectKey } from "../src/client.js";
import { log } from "../logger.js";

const customObjectDraft =
{
    "container": "Integrations-Configuration",
    "key": "integrations-configuration",
    "value": {
        "salesforce-integration": {
            "enable": 1,
            "api-key": "a2nskkkkk78889E"
        },
        "hubspot-integration": {
            "enable": 0
        }
    }
};

apiRoot.withProjectKey({ projectKey })
    .customObjects()
    .post({
        body: customObjectDraft
    })
    .execute()
    .then(response => log(response))
    .catch(error => log(error));