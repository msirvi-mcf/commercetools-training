import { createClient, createAuthForClientCredentialsFlow, createHttpClient } from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { createLoggerMiddleware } from '@commercetools/sdk-middleware-logger';
import dotenv from 'dotenv';
dotenv.config();

import fetch from "node-fetch";

const projectKey = process.env.CTP_PROJECT_KEY;

// replace getClient() in src/client.js with this function if you want to log the request and response, can be used in development mode
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
        middlewares: [authMiddlewareOptions, httpMiddlewareOptions,createLoggerMiddleware()] // can use createLoggerMiddleware() after authmiddleware, incase request failed
    })
    return client;
};

export const apiRoot = createApiBuilderFromCtpClient(getClient());
apiRoot
    .withProjectKey({projectKey})
    .get()
    .execute();