import { apiRoot,projectKey } from "../src/client.js";
import { log } from "../logger.js";

const extensionDraft =
{
    "destination": {
        "type": "AWSLambda",
        "arn": "arn:aws:lambda:<region>:<accountid>:function:<functionName>",
        "accessKey": "accessKey for IAM  lambda:InvokeFunction",
        "accessSecret": "accessSecret for IAM lambda:InvokeFunction "
    },
    "triggers": [
        {
            "resourceTypeId": "cart",
            "actions": [
                "Create",
                "Update"
            ]
        }
    ],
    "key": "AddInsurance-lineitem"
};

apiRoot.withProjectKey({ projectKey })
    .extensions()
    .post({
        body: extensionDraft
    })
    .execute()
    .then(response => log(response))
    .catch(error => log(error));