import { gql } from "../../../../__generated__";

const createCompetition = gql(`
mutation CreateCompetition($input: [CompetitionCreateInput!]!) {
    createCompetitions(input: $input) {
      competitions {
        ...CompetitionDetails
        ...CompetitionDefaultFields
        nation {
          ...NationDetails
          ...NationDefaultFields
        }
        dataSourcesConnection {
          edges {
            entityId
            createdAt
            updatedAt
            node {
                name
                ...DataSourceDefaultFields
            }
          }
        }
      }
    }
  }
`);
export default createCompetition;
