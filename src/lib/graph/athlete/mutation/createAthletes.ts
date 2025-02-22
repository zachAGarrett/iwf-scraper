import { gql } from "../../../../__generated__";

const createAthletes = gql(`
mutation CreateAthletes($input: [AthleteCreateInput!]!) {
    createAthletes(input: $input) {
      athletes {
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
      }
    }
  }
`);
export default createAthletes;

// {
//   "input": [
//     {
//       "birthday": null,
//       "competitions": {
//         "connect": [
//           {
//             "edge": {
//               "rank": null,
//               "group": null,
//               "bodyweight": null
//             },
//             "where": {
//               "node": {
//                 "date": null,
//                 "id": null,
//                 "name": null,
//                 "nation": {
//                   "name": null
//                 }
//               }
//             }
//           }
//         ]
//       },
//       "dataSources": {
//         "connect": [
//           {
//             "edge": {
//               "entityId": null
//             },
//             "where": {
//               "node": {
//                 "id": null
//               }
//             }
//           }
//         ]
//       },
//       "familyName": null,
//       "givenName": null
//     }
//   ]
// }
