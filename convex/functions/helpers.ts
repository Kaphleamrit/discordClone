import { customCtx, customQuery } from "convex-helpers/server/customFunctions";
import { getCurrentUser } from "./user";
import { query } from "../_generated/server";

export const authenticatedQuery = customQuery(
    query,
    customCtx(async (ctx) => {
        const user = await getCurrentUser(ctx);
        if (!user) {
            throw new Error("Unauthorized");
        }
        return { user };
    })
);

export const authenticatedMutation = customQuery(
    query,
    customCtx(async (ctx) => {
        const user = await getCurrentUser(ctx);
        if (!user) {
            throw new Error("Unauthorized");
        }
        return { user };
    })
);

const unused = "THis is unused variable";
const unused2 = "THis is unused variable";
