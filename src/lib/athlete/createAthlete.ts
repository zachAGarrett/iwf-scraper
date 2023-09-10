import { gql } from "../../__generated__";

const createAthlete = gql(`
mutation CreateAthlete($input: [AthleteCreateInput!]!) {
    createAthletes(input: $input) {
      athletes {
        birthday
        id
        givenName
        familyName
        verified
        updatedAt
        createdAt
      }
    }
  }
`);
export default createAthlete;
