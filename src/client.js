import { createClient, createAuthForClientCredentialsFlow, createHttpClient, ClientBuilder } from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import dotenv from 'dotenv';
dotenv.config();

import fetch from "node-fetch";

const projectKey = process.env.CTP_PROJECT_KEY;

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
export const apiRoot = createApiBuilderFromCtpClient(getClient());
export const meApiRoot = createApiBuilderFromCtpClient(meClient());
const _projectKey = projectKey;
export { _projectKey as projectKey };