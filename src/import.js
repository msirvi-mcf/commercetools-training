import { importApiRoot, projectKey } from "./client.js";
import { log } from '../logger.js';
import products from "../data/products.js";
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
            key: product.name,
            name: {
                "en": product.productName,
                "de": product.productName
            },
            productType: {
                typeId: "product-type",
                key: product.productType
            },
            slug: {
                "en": product.name.en,
                "de": product.name.de
            },
            masterVariant: {
                sku: product.masterVariant.sku,
                key: product.masterVariant.key,
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
    console.log(JSON.stringify(resources, 0, 2));
    return resources;
}
