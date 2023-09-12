import { gql } from "../../../../__generated__";

const competitionDefaultFields = gql(`
fragment CompetitionDefaultFields on Competition {
    id
    verified
    createdAt
    updatedAt
}
`);
export default competitionDefaultFields;
