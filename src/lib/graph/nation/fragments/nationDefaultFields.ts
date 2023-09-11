import { gql } from "../../../../__generated__";

const nationDefaultFields = gql(`
fragment NationDefaultFields on Nation {
    id
    verified
    createdAt
    updatedAt
}
`);
export default nationDefaultFields;
