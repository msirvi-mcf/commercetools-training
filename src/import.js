import { importApiRoot, projectKey } from "./client.js";
import { log } from '../logger.js';
import products from "../data/products.js";
export const createImportContainer =async (key) => {
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

export const getContainerByKey = (key) => {
    return importApiRoot
    .withProjectKeyValue({projectKey})
    .importContainers()
    .withImportContainerKeyValue({key:key})
    .get()
    .execute();
}

export const importProducts = async (key) => {
    return importApiRoot
        .withProjectKeyValue({ projectKey })
        .productDrafts()
        .importContainers()
        .withImportContainerKeyValue({ key })
        .post({
            body: await createProductDrafts()
        })
        .execute();
}
const createProductDrafts = async () => {
    return {
        type: "product-draft",
        resources: await createResourceDraft()
    }
}
const createResourceDraft = async () => {
    let resources = [];
    products.forEach((product) => {
        let resource = {
            key: product.name.en,
            name: {
                "en": product.name.en,
                "de": product.name.de
            },
            productType: {
                typeId: "product-type",
                key: "main"
            },
            slug: {
                "en": product.name.en,
                "de": product.name.de
            },
            masterVariant: {
                sku: "PI"+product.masterVariant.sku,
                key: "PI"+product.masterVariant.key,
                prices: [
                    {
                        value: {
                            type: "centPrecision",
                            currencyCode: "EUR",
                            centAmount: product.masterVariant.prices[0].value.centAmount
                        }
                    }
                ],
                images: [
                    {
                        url: product.masterVariant.images[0].url,
                        dimensions: { w: 177, h: 237 }
                    }
                ]
            }
        };
        resources.push(resource);
    })
    return resources;
}

export const importSummary = (key) => {
    return importApiRoot
    .withProjectKeyValue({projectKey})
    .importContainers()
    .withImportContainerKeyValue({key})
    .importSummaries()
    .get()
    .execute();
}