/* eslint-disable */
import * as types from './graphql.js';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation CreateAthletes($input: [AthleteCreateInput!]!) {\n    createAthletes(input: $input) {\n      athletes {\n        birthday\n        id\n        name\n        verified\n        updatedAt\n        createdAt\n        dataSourcesConnection {\n          edges {\n            entityId\n            node {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n": types.CreateAthletesDocument,
    "\nmutation UpdateAthletes($where: AthleteWhere, $connect: AthleteConnectInput) {\n    updateAthletes(where: $where, connect: $connect) {\n      athletes {\n        id\n        dataSourcesConnection {\n          edges {\n            entityId\n          }\n        }\n      }\n    }\n  }\n": types.UpdateAthletesDocument,
    "\nquery Athletes($where: AthleteWhere, $competitionsAggregateWhere: CompetitionWhere, $dataSourcesAggregateWhere: DataSourceWhere) {\n    athletes(where: $where) {\n      birthday\n      id\n      name\n      verified\n      updatedAt\n      createdAt\n      dataSourcesConnection {\n        edges {\n          entityId\n          node {\n            id\n            name\n          }\n        }\n      }\n      dataSourcesAggregate(where: $dataSourcesAggregateWhere) {\n        count\n      }\n      competitionsAggregate(where: $competitionsAggregateWhere) {\n        count\n      }\n    }\n  }\n": types.AthletesDocument,
    "\nmutation CreateAttempts($input: [AttemptCreateInput!]!) {\n    createAttempts(input: $input) {\n      attempts {\n        id\n        number\n        weight\n        successful\n      }\n    }\n  }\n": types.CreateAttemptsDocument,
    "\nfragment CompetitionDefaultFields on Competition {\n    id\n    verified\n    createdAt\n    updatedAt\n}\n": types.CompetitionDefaultFieldsFragmentDoc,
    "\nfragment CompetitionDetails on Competition {\n    name\n    date\n    scraped\n}\n": types.CompetitionDetailsFragmentDoc,
    "\nmutation CreateCompetition($input: [CompetitionCreateInput!]!) {\n    createCompetitions(input: $input) {\n      competitions {\n        ...CompetitionDetails\n        ...CompetitionDefaultFields\n        nation {\n          ...NationDetails\n          ...NationDefaultFields\n        }\n        dataSourcesConnection {\n          edges {\n            entityId\n            createdAt\n            updatedAt\n            node {\n                name\n                ...DataSourceDefaultFields\n            }\n          }\n        }\n      }\n    }\n  }\n": types.CreateCompetitionDocument,
    "\nquery Competitions($where: CompetitionWhere) {\n    competitions(where: $where) {\n      ...CompetitionDetails\n      ...CompetitionDefaultFields\n      dataSourcesConnection {\n        edges {\n          entityId\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n": types.CompetitionsDocument,
    "\nquery CompetitionsAggregate($where: CompetitionWhere) {\n    competitionsAggregate(where: $where) {\n      count\n    }\n  }\n": types.CompetitionsAggregateDocument,
    "\nfragment DataSourceDefaultFields on DataSource {\n    id\n    verified\n    createdAt\n    updatedAt\n}\n": types.DataSourceDefaultFieldsFragmentDoc,
    "\nmutation CreateEvents($input: [EventCreateInput!]!) {\n  createEvents(input: $input) {\n    events {\n      type\n      class\n      id\n      competition {\n        id\n      }\n      attempts {\n        id\n        athlete {\n          id\n        }\n      }\n      athletes {\n        id\n      }\n    }\n  }\n}\n": types.CreateEventsDocument,
    "\nfragment NationDefaultFields on Nation {\n    id\n    verified\n    createdAt\n    updatedAt\n}\n": types.NationDefaultFieldsFragmentDoc,
    "\nfragment NationDetails on Nation {\n    name\n    code\n}\n": types.NationDetailsFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateAthletes($input: [AthleteCreateInput!]!) {\n    createAthletes(input: $input) {\n      athletes {\n        birthday\n        id\n        name\n        verified\n        updatedAt\n        createdAt\n        dataSourcesConnection {\n          edges {\n            entityId\n            node {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nmutation CreateAthletes($input: [AthleteCreateInput!]!) {\n    createAthletes(input: $input) {\n      athletes {\n        birthday\n        id\n        name\n        verified\n        updatedAt\n        createdAt\n        dataSourcesConnection {\n          edges {\n            entityId\n            node {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateAthletes($where: AthleteWhere, $connect: AthleteConnectInput) {\n    updateAthletes(where: $where, connect: $connect) {\n      athletes {\n        id\n        dataSourcesConnection {\n          edges {\n            entityId\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nmutation UpdateAthletes($where: AthleteWhere, $connect: AthleteConnectInput) {\n    updateAthletes(where: $where, connect: $connect) {\n      athletes {\n        id\n        dataSourcesConnection {\n          edges {\n            entityId\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Athletes($where: AthleteWhere, $competitionsAggregateWhere: CompetitionWhere, $dataSourcesAggregateWhere: DataSourceWhere) {\n    athletes(where: $where) {\n      birthday\n      id\n      name\n      verified\n      updatedAt\n      createdAt\n      dataSourcesConnection {\n        edges {\n          entityId\n          node {\n            id\n            name\n          }\n        }\n      }\n      dataSourcesAggregate(where: $dataSourcesAggregateWhere) {\n        count\n      }\n      competitionsAggregate(where: $competitionsAggregateWhere) {\n        count\n      }\n    }\n  }\n"): (typeof documents)["\nquery Athletes($where: AthleteWhere, $competitionsAggregateWhere: CompetitionWhere, $dataSourcesAggregateWhere: DataSourceWhere) {\n    athletes(where: $where) {\n      birthday\n      id\n      name\n      verified\n      updatedAt\n      createdAt\n      dataSourcesConnection {\n        edges {\n          entityId\n          node {\n            id\n            name\n          }\n        }\n      }\n      dataSourcesAggregate(where: $dataSourcesAggregateWhere) {\n        count\n      }\n      competitionsAggregate(where: $competitionsAggregateWhere) {\n        count\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateAttempts($input: [AttemptCreateInput!]!) {\n    createAttempts(input: $input) {\n      attempts {\n        id\n        number\n        weight\n        successful\n      }\n    }\n  }\n"): (typeof documents)["\nmutation CreateAttempts($input: [AttemptCreateInput!]!) {\n    createAttempts(input: $input) {\n      attempts {\n        id\n        number\n        weight\n        successful\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment CompetitionDefaultFields on Competition {\n    id\n    verified\n    createdAt\n    updatedAt\n}\n"): (typeof documents)["\nfragment CompetitionDefaultFields on Competition {\n    id\n    verified\n    createdAt\n    updatedAt\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment CompetitionDetails on Competition {\n    name\n    date\n    scraped\n}\n"): (typeof documents)["\nfragment CompetitionDetails on Competition {\n    name\n    date\n    scraped\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateCompetition($input: [CompetitionCreateInput!]!) {\n    createCompetitions(input: $input) {\n      competitions {\n        ...CompetitionDetails\n        ...CompetitionDefaultFields\n        nation {\n          ...NationDetails\n          ...NationDefaultFields\n        }\n        dataSourcesConnection {\n          edges {\n            entityId\n            createdAt\n            updatedAt\n            node {\n                name\n                ...DataSourceDefaultFields\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nmutation CreateCompetition($input: [CompetitionCreateInput!]!) {\n    createCompetitions(input: $input) {\n      competitions {\n        ...CompetitionDetails\n        ...CompetitionDefaultFields\n        nation {\n          ...NationDetails\n          ...NationDefaultFields\n        }\n        dataSourcesConnection {\n          edges {\n            entityId\n            createdAt\n            updatedAt\n            node {\n                name\n                ...DataSourceDefaultFields\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Competitions($where: CompetitionWhere) {\n    competitions(where: $where) {\n      ...CompetitionDetails\n      ...CompetitionDefaultFields\n      dataSourcesConnection {\n        edges {\n          entityId\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nquery Competitions($where: CompetitionWhere) {\n    competitions(where: $where) {\n      ...CompetitionDetails\n      ...CompetitionDefaultFields\n      dataSourcesConnection {\n        edges {\n          entityId\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery CompetitionsAggregate($where: CompetitionWhere) {\n    competitionsAggregate(where: $where) {\n      count\n    }\n  }\n"): (typeof documents)["\nquery CompetitionsAggregate($where: CompetitionWhere) {\n    competitionsAggregate(where: $where) {\n      count\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment DataSourceDefaultFields on DataSource {\n    id\n    verified\n    createdAt\n    updatedAt\n}\n"): (typeof documents)["\nfragment DataSourceDefaultFields on DataSource {\n    id\n    verified\n    createdAt\n    updatedAt\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateEvents($input: [EventCreateInput!]!) {\n  createEvents(input: $input) {\n    events {\n      type\n      class\n      id\n      competition {\n        id\n      }\n      attempts {\n        id\n        athlete {\n          id\n        }\n      }\n      athletes {\n        id\n      }\n    }\n  }\n}\n"): (typeof documents)["\nmutation CreateEvents($input: [EventCreateInput!]!) {\n  createEvents(input: $input) {\n    events {\n      type\n      class\n      id\n      competition {\n        id\n      }\n      attempts {\n        id\n        athlete {\n          id\n        }\n      }\n      athletes {\n        id\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment NationDefaultFields on Nation {\n    id\n    verified\n    createdAt\n    updatedAt\n}\n"): (typeof documents)["\nfragment NationDefaultFields on Nation {\n    id\n    verified\n    createdAt\n    updatedAt\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment NationDetails on Nation {\n    name\n    code\n}\n"): (typeof documents)["\nfragment NationDetails on Nation {\n    name\n    code\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;