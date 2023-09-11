import { gql } from "../../../../__generated__";

const competitionDetails = gql(`
fragment CompetitionDetails on Competition {
    name
    date
    scraped
}
`);
export default competitionDetails;
