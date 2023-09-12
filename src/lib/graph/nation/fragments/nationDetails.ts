import { gql } from "../../../../__generated__";

const nationDetails = gql(`
fragment NationDetails on Nation {
    name
    code
}
`);
export default nationDetails;
