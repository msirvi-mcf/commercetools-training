import { apiRoot,projectKey } from "../src/client.js";
import { log } from "../logger.js";
const customTypeDraft =
{
    "key": "lineitemtype",
    "name": {
        "en": "lineitem"
    },
    "description": {
        "en": "description"
    },
    "resourceTypeIds": [
        "line-item"
    ],
    "fieldDefinitions": [
        {
            "name": "offer_name",
            "label": {
                "en": "offer_name"
            },
            "required": false,
            "type": {
                "name": "String"
            },
            "inputHint": "SingleLine"
        }
    ]
};

apiRoot.withProjectKey({ projectKey })
    .types()
    .post({
        body: customTypeDraft
    })
    .execute()
    .then(response => log(response))
    .catch(error => log(error));