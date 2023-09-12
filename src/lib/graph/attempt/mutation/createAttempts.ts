import { gql } from "../../../../__generated__";

const createAttempts = gql(`
mutation CreateAttempts($input: [AttemptCreateInput!]!) {
    createAttempts(input: $input) {
      attempts {
        id
        number
        weight
        successful
      }
    }
  }
`);
export default createAttempts;
