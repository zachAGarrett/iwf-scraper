import { gql } from "../../../../__generated__";

const athletes = gql(`
query Athletes($where: AthleteWhere) {
    athletes(where: $where) {
      id
    }
  }
`);

export default athletes;
