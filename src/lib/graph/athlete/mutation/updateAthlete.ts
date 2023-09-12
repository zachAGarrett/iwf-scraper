import { gql } from "../../../../__generated__";

const updateAthletes = gql(`
mutation UpdateAthletes($where: AthleteWhere, $connect: AthleteConnectInput) {
    updateAthletes(where: $where, connect: $connect) {
      athletes {
        id
        dataSourcesConnection {
          edges {
            entityId
          }
        }
      }
    }
  }
`);

export default updateAthletes;
