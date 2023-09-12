import { gql } from "../../../../__generated__";

const dataSourceDefaultFields = gql(`
fragment DataSourceDefaultFields on DataSource {
    id
    verified
    createdAt
    updatedAt
}
`);
export default dataSourceDefaultFields;
