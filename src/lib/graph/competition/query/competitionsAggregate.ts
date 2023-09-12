import { gql } from "../../../../__generated__";

const compatitionsAggregate = gql(`
query CompetitionsAggregate($where: CompetitionWhere) {
    competitionsAggregate(where: $where) {
      count
    }
  }
`);
export default compatitionsAggregate;
