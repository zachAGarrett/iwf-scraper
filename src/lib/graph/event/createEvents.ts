import { gql } from "../../../__generated__";

const createEvents = gql(`
mutation CreateEvents($input: [EventCreateInput!]!) {
    createEvents(input: $input) {
      events {
        id
        verified
        updatedAt
        createdAt
        class
        type
      }
    }
  }
`);

export default createEvents;

// {
//     "input": [
//       {
//         "competition": {
//           "connect": {
//             "where": {
//               "node": {
//                 "date": null,
//                 "name": null,
//                 "nation": {
//                   "name": null
//                 }
//               }
//             },
//             "connect": null
//           }
//         },
//         "class": null,
//         "type": null,
//         "athletes": {
//           "connectOrCreate": [
//             {
//               "where": {
//                 "node": {
//                   "id": null
//                 }
//               },
//               "onCreate": {
//                 "node": {
//                   "birthday": null,
//                   "familyName": null,
//                   "givenName": null
//                 }
//               }
//             }
//           ]
//         },
//         "attempts": {
//           "create": [
//             {
//               "node": {
//                 "nation": {
//                   "connectOrCreate": {
//                     "where": {
//                       "node": {
//                         "code": null
//                       }
//                     },
//                     "onCreate": {
//                       "node": {
//                         "code": null,
//                         "name": null
//                       }
//                     }
//                   }
//                 },
//                 "number": null,
//                 "successful": null,
//                 "weight": null,
//                 "dateTime": null,
//                 "athlete": {
//                   "connectOrCreate": {
//                     "where": {
//                       "node": {
//                         "id": null
//                       }
//                     },
//                     "onCreate": {
//                       "node": {
//                         "birthday": null,
//                         "familyName": null,
//                         "givenName": null
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           ]
//         }
//       }
//     ]
//   }
