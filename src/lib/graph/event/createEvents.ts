import { gql } from "../../../__generated__";

const createEvents = gql(`
mutation CreateEvents($input: [EventCreateInput!]!) {
  createEvents(input: $input) {
    events {
      type
      class
      id
      competition {
        id
      }
      attempts {
        id
        athlete {
          id
        }
      }
      athletes {
        id
      }
    }
  }
}
`);

export default createEvents;

// {
//   "input": [
//     {
//       "type": null,
//       "class": null,
//       "date": null,
//       "competition": {
//         "connect": {
//           "where": {
//             "node": {
//               "id": null
//             }
//           }
//         }
//       },
//       "athletes": {
//         "connect": [
//           {
//             "overwrite": null,
//             "where": {
//               "node": {
//                 "id": null
//               }
//             }
//           }
//         ]
//       },
//       "attempts": {
//         "create": [
//           {
//             "node": {
//               "successful": null,
//               "number": null,
//               "nation": {
//                 "connectOrCreate": {
//                   "where": {
//                     "node": {
//                       "code": null
//                     }
//                   },
//                   "onCreate": {
//                     "node": {
//                       "code": null,
//                       "name": null
//                     }
//                   }
//                 }
//               },
//               "athlete": {
//                 "connect": {
//                   "where": {
//                     "node": {
//                       "id": null
//                     }
//                   }
//                 }
//               },
//               "weight": null
//             }
//           }
//         ]
//       }
//     }
//   ]
// }
