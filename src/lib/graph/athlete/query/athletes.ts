import { gql } from "../../../../__generated__";

const athletes = gql(`
query Athletes($where: AthleteWhere, $competitionsAggregateWhere: CompetitionWhere, $dataSourcesAggregateWhere: DataSourceWhere) {
    athletes(where: $where) {
      birthday
      id
      name
      verified
      updatedAt
      createdAt
      dataSourcesConnection {
        edges {
          entityId
          node {
            id
            name
          }
        }
      }
      dataSourcesAggregate(where: $dataSourcesAggregateWhere) {
        count
      }
      competitionsAggregate(where: $competitionsAggregateWhere) {
        count
      }
    }
  }
`);

export default athletes;
