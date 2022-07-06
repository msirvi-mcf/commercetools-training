import { createClient, createAuthForClientCredentialsFlow, createHttpClient, ClientBuilder } from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient as createImportApiBuilderFromCtpClient } from '@commercetools/importapi-sdk';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import dotenv from 'dotenv';
dotenv.config();

import fetch from "node-fetch";

const projectKey = process.env.CTP_PROJECT_KEY;

// Client Credentials authorization flow
const getClient = () => {
    const authMiddlewareOptions = createAuthForClientCredentialsFlow({
        host: process.env.CTP_AUTH_URL,
        projectKey: projectKey,
        credentials: {
            clientId: process.env.CTP_CLIENT_ID,
            clientSecret: process.env.CTP_CLIENT_SECRET,
        },
        fetch
    })
    const httpMiddlewareOptions = createHttpClient({
        host: process.env.CTP_API_URL,
        fetch,
    })
    const client = createClient({
        middlewares: [authMiddlewareOptions, httpMiddlewareOptions]
    })
    return client;
};
// Password authorizaion flow
const meClient = () => {
    const passwordAuthMiddlewareOptions = {
        host: process.env.CTP_AUTH_URL,
        projectKey,
        credentials: {
            clientId: process.env.CTP_CLIENT_ID,
            clientSecret: process.env.CTP_CLIENT_SECRET,
            user: {
                username: process.env.CTP_ME_USERNAME,
                password: process.env.CTP_ME_PASSWORD
            }
        },
        fetch
    };

    const httpMiddlewareOptions = {
        host: process.env.CTP_API_URL,
        fetch,
    };
    const client = new ClientBuilder()
        .withPasswordFlow(passwordAuthMiddlewareOptions)
        .withHttpMiddleware(httpMiddlewareOptions)
        .build();
    return client;
}
// Token for Anonymous session, can be used to create anonymous cart and order
const anonymousClient = () => {
    const anonymousAuthMiddlewareOptions = {
        host: process.env.CTP_AUTH_URL,
        projectKey,
        credentials: {
            clientId: process.env.CTP_CLIENT_ID,
            clientSecret: process.env.CTP_CLIENT_SECRET
        },
        fetch
    };
    const httpMiddlewareOptions = {
        host: process.env.CTP_API_URL,
        fetch,
    };

    const client = new ClientBuilder()
        .withAnonymousSessionFlow(anonymousAuthMiddlewareOptions)
        .withHttpMiddleware(httpMiddlewareOptions)
        .build();
    return client;
}

const importClient = () => {
    const importAuthMiddlewareOptions = {
        host: process.env.CTP_IMPORT_AUTH_URL,
        projectKey,
        credentials: {
            clientId: process.env.CTP_CLIENT_ID,
            clientSecret: process.env.CTP_CLIENT_SECRET
        },
        fetch
    };
    const importHttpMiddlewareOptions = {
        host: process.env.CTP_IMPORT_API_URL,
        fetch,
    };
    const client = new ClientBuilder()
    .withClientCredentialsFlow(importAuthMiddlewareOptions)
    .withHttpMiddleware(importHttpMiddlewareOptions)
    .build();
    return client;
}
export const apiRoot = createApiBuilderFromCtpClient(getClient());
export const meApiRoot = createApiBuilderFromCtpClient(meClient());
export const anonymousApiRoot = createApiBuilderFromCtpClient(anonymousClient());
export const importApiRoot = createImportApiBuilderFromCtpClient(importClient());
const _projectKey = projectKey;
export { _projectKey as projectKey };