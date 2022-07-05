import { importApiRoot, projectKey } from "./client.js";

export const createImportContainer = (key) => {
    return importApiRoot
        .withProjectKeyValue({ projectKey })
        .importContainers()
        .post({
            body: {
                "key": key
            }
        })
        .execute();
}

export const importProducts = (key) => {
    return importApiRoot
    .withProjectKeyValue({projectKey})
    .productDrafts()
    .importContainers()
    .withImportContainerKeyValue({key})
    .post({
        body: createProductDrafts()
    })
    .execute();
}
const createProductDrafts = () => {
    // TODO
}
