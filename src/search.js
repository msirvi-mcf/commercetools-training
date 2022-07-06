import { apiRoot, projectKey } from "./client.js";

// https://docs.commercetools.com/api/projects/products-search#full-text-search
export const searchTerm = (term, limit, offset) => {
    return apiRoot.withProjectKey({ projectKey })
        .productProjections()
        .search()
        .get({
            queryArgs: {
                "limit": limit,
                "offset": offset,
                "text.en": term
            }
        })
        .execute();
}
