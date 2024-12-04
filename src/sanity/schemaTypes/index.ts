import { type SchemaTypeDefinition } from "sanity";
import { post } from "./post";
import { event } from "./event";
import { review } from "./review";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, event, review],
};
