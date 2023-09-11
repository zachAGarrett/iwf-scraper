import { gql } from "../../../../__generated__";

const competitions = gql(`
query Competitions($where: CompetitionWhere) {
    competitions(where: $where) {
      ...CompetitionDetails
      ...CompetitionDefaultFields
      dataSourcesConnection {
        edges {
          entityId
          node {
            id
            name
          }
        }
      }
    }
  }
`);
export default competitions;
