import { apiRoot,projectKey } from "../src/client.js";
import { log } from "../logger.js";

const subscriptionDraft =
{
    "destination": {
        "type": "SQS",
        "queueUrl": "https://sqs.us-east-1.amazonaws.com/xxxxxx/CT-orderCreateQueue",
        "accessKey": "access key aws sqs:SendMessage",
        "accessSecret": "accessSecreat aws sqs:SendMessage",
        "region": "us-east-1"
    },
    "messages": [
        {
            "resourceTypeId": "order",
            "types": [
                "OrderCreated"
            ]
        }
    ],
    "key": "CT-orderCreateQueue"
}

apiRoot.withProjectKey({ projectKey })
    .subscriptions()
    .post({
        body: subscriptionDraft
    })
    .execute()
    .then(response => log(response))
    .catch(error => log(error));