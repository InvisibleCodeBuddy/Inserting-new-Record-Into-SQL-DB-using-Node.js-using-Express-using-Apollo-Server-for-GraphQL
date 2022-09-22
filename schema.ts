import { applyMiddleware } from "graphql-middleware";
import { declarativeWrappingPlugin, makeSchema } from "nexus";
import path from "path";
import * as schemas from "./schemas";
import * as mutations from "./mutations";
import * as queies from "./queries";

export const schema = applyMiddleware(
    makeSchema({
        types: [schemas, mutations, queies],
        plugins: [declarativeWrappingPlugin({ disable: true })],
        outputs: {
            schema: path.join(__dirname, "../schema.graphql"),
            typegen: path.join(__dirname, "schema-typegen.ts"),
        },
        nonNullDefaults: {
            output: true,
        },
    }),
);