/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date, represented as a 'yyyy-mm-dd' string */
  Date: { input: any; output: any; }
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any; }
};

export type Athlete = {
  __typename?: 'Athlete';
  attempts: Array<Attempt>;
  attemptsAggregate?: Maybe<AthleteAttemptAttemptsAggregationSelection>;
  attemptsConnection: AthleteAttemptsConnection;
  birthday: Scalars['Date']['output'];
  competitions: Array<Competition>;
  competitionsAggregate?: Maybe<AthleteCompetitionCompetitionsAggregationSelection>;
  competitionsConnection: AthleteCompetitionsConnection;
  createdAt: Scalars['DateTime']['output'];
  dataSources: Array<DataSource>;
  dataSourcesAggregate?: Maybe<AthleteDataSourceDataSourcesAggregationSelection>;
  dataSourcesConnection: AthleteDataSourcesConnection;
  events: Array<Event>;
  eventsAggregate?: Maybe<AthleteEventEventsAggregationSelection>;
  eventsConnection: AthleteEventsConnection;
  familyName: Scalars['String']['output'];
  givenName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nations: Array<Nation>;
  nationsAggregate?: Maybe<AthleteNationNationsAggregationSelection>;
  nationsConnection: AthleteNationsConnection;
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};


export type AthleteAttemptsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AttemptOptions>;
  where?: InputMaybe<AttemptWhere>;
};


export type AthleteAttemptsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AttemptWhere>;
};


export type AthleteAttemptsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AthleteAttemptsConnectionSort>>;
  where?: InputMaybe<AthleteAttemptsConnectionWhere>;
};


export type AthleteCompetitionsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CompetitionOptions>;
  where?: InputMaybe<CompetitionWhere>;
};


export type AthleteCompetitionsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CompetitionWhere>;
};


export type AthleteCompetitionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AthleteCompetitionsConnectionSort>>;
  where?: InputMaybe<AthleteCompetitionsConnectionWhere>;
};


export type AthleteDataSourcesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<DataSourceOptions>;
  where?: InputMaybe<DataSourceWhere>;
};


export type AthleteDataSourcesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DataSourceWhere>;
};


export type AthleteDataSourcesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AthleteDataSourcesConnectionSort>>;
  where?: InputMaybe<AthleteDataSourcesConnectionWhere>;
};


export type AthleteEventsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<EventOptions>;
  where?: InputMaybe<EventWhere>;
};


export type AthleteEventsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventWhere>;
};


export type AthleteEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AthleteEventsConnectionSort>>;
  where?: InputMaybe<AthleteEventsConnectionWhere>;
};


export type AthleteNationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<NationOptions>;
  where?: InputMaybe<NationWhere>;
};


export type AthleteNationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NationWhere>;
};


export type AthleteNationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AthleteNationsConnectionSort>>;
  where?: InputMaybe<AthleteNationsConnectionWhere>;
};

export type AthleteAggregateSelection = {
  __typename?: 'AthleteAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNonNullable;
  givenName: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type AthleteAttemptAttemptsAggregationSelection = {
  __typename?: 'AthleteAttemptAttemptsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AthleteAttemptAttemptsNodeAggregateSelection>;
};

export type AthleteAttemptAttemptsNodeAggregateSelection = {
  __typename?: 'AthleteAttemptAttemptsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
  weight: FloatAggregateSelectionNonNullable;
};

export type AthleteAttemptsAggregateInput = {
  AND?: InputMaybe<Array<AthleteAttemptsAggregateInput>>;
  NOT?: InputMaybe<AthleteAttemptsAggregateInput>;
  OR?: InputMaybe<Array<AthleteAttemptsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AthleteAttemptsNodeAggregationWhereInput>;
};

export type AthleteAttemptsConnectFieldInput = {
  connect?: InputMaybe<Array<AttemptConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AttemptConnectWhere>;
};

export type AthleteAttemptsConnectOrCreateFieldInput = {
  onCreate: AthleteAttemptsConnectOrCreateFieldInputOnCreate;
  where: AttemptConnectOrCreateWhere;
};

export type AthleteAttemptsConnectOrCreateFieldInputOnCreate = {
  node: AttemptOnCreateInput;
};

export type AthleteAttemptsConnection = {
  __typename?: 'AthleteAttemptsConnection';
  edges: Array<AthleteAttemptsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AthleteAttemptsConnectionSort = {
  node?: InputMaybe<AttemptSort>;
};

export type AthleteAttemptsConnectionWhere = {
  AND?: InputMaybe<Array<AthleteAttemptsConnectionWhere>>;
  NOT?: InputMaybe<AthleteAttemptsConnectionWhere>;
  OR?: InputMaybe<Array<AthleteAttemptsConnectionWhere>>;
  node?: InputMaybe<AttemptWhere>;
};

export type AthleteAttemptsCreateFieldInput = {
  node: AttemptCreateInput;
};

export type AthleteAttemptsDeleteFieldInput = {
  delete?: InputMaybe<AttemptDeleteInput>;
  where?: InputMaybe<AthleteAttemptsConnectionWhere>;
};

export type AthleteAttemptsDisconnectFieldInput = {
  disconnect?: InputMaybe<AttemptDisconnectInput>;
  where?: InputMaybe<AthleteAttemptsConnectionWhere>;
};

export type AthleteAttemptsFieldInput = {
  connect?: InputMaybe<Array<AthleteAttemptsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteAttemptsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteAttemptsCreateFieldInput>>;
};

export type AthleteAttemptsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteAttemptsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteAttemptsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteAttemptsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  weight_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weight_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
};

export type AthleteAttemptsRelationship = {
  __typename?: 'AthleteAttemptsRelationship';
  cursor: Scalars['String']['output'];
  node: Attempt;
};

export type AthleteAttemptsUpdateConnectionInput = {
  node?: InputMaybe<AttemptUpdateInput>;
};

export type AthleteAttemptsUpdateFieldInput = {
  connect?: InputMaybe<Array<AthleteAttemptsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteAttemptsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteAttemptsCreateFieldInput>>;
  delete?: InputMaybe<Array<AthleteAttemptsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteAttemptsDisconnectFieldInput>>;
  update?: InputMaybe<AthleteAttemptsUpdateConnectionInput>;
  where?: InputMaybe<AthleteAttemptsConnectionWhere>;
};

export type AthleteCompetitionCompetitionsAggregationSelection = {
  __typename?: 'AthleteCompetitionCompetitionsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AthleteCompetitionCompetitionsNodeAggregateSelection>;
};

export type AthleteCompetitionCompetitionsNodeAggregateSelection = {
  __typename?: 'AthleteCompetitionCompetitionsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type AthleteCompetitionsAggregateInput = {
  AND?: InputMaybe<Array<AthleteCompetitionsAggregateInput>>;
  NOT?: InputMaybe<AthleteCompetitionsAggregateInput>;
  OR?: InputMaybe<Array<AthleteCompetitionsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AthleteCompetitionsNodeAggregationWhereInput>;
};

export type AthleteCompetitionsConnectFieldInput = {
  connect?: InputMaybe<Array<CompetitionConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CompetitionConnectWhere>;
};

export type AthleteCompetitionsConnectOrCreateFieldInput = {
  onCreate: AthleteCompetitionsConnectOrCreateFieldInputOnCreate;
  where: CompetitionConnectOrCreateWhere;
};

export type AthleteCompetitionsConnectOrCreateFieldInputOnCreate = {
  node: CompetitionOnCreateInput;
};

export type AthleteCompetitionsConnection = {
  __typename?: 'AthleteCompetitionsConnection';
  edges: Array<AthleteCompetitionsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AthleteCompetitionsConnectionSort = {
  node?: InputMaybe<CompetitionSort>;
};

export type AthleteCompetitionsConnectionWhere = {
  AND?: InputMaybe<Array<AthleteCompetitionsConnectionWhere>>;
  NOT?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  OR?: InputMaybe<Array<AthleteCompetitionsConnectionWhere>>;
  node?: InputMaybe<CompetitionWhere>;
};

export type AthleteCompetitionsCreateFieldInput = {
  node: CompetitionCreateInput;
};

export type AthleteCompetitionsDeleteFieldInput = {
  delete?: InputMaybe<CompetitionDeleteInput>;
  where?: InputMaybe<AthleteCompetitionsConnectionWhere>;
};

export type AthleteCompetitionsDisconnectFieldInput = {
  disconnect?: InputMaybe<CompetitionDisconnectInput>;
  where?: InputMaybe<AthleteCompetitionsConnectionWhere>;
};

export type AthleteCompetitionsFieldInput = {
  connect?: InputMaybe<Array<AthleteCompetitionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteCompetitionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteCompetitionsCreateFieldInput>>;
};

export type AthleteCompetitionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteCompetitionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteCompetitionsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteCompetitionsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AthleteCompetitionsRelationship = {
  __typename?: 'AthleteCompetitionsRelationship';
  cursor: Scalars['String']['output'];
  node: Competition;
};

export type AthleteCompetitionsUpdateConnectionInput = {
  node?: InputMaybe<CompetitionUpdateInput>;
};

export type AthleteCompetitionsUpdateFieldInput = {
  connect?: InputMaybe<Array<AthleteCompetitionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteCompetitionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteCompetitionsCreateFieldInput>>;
  delete?: InputMaybe<Array<AthleteCompetitionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteCompetitionsDisconnectFieldInput>>;
  update?: InputMaybe<AthleteCompetitionsUpdateConnectionInput>;
  where?: InputMaybe<AthleteCompetitionsConnectionWhere>;
};

export type AthleteConnectInput = {
  attempts?: InputMaybe<Array<AthleteAttemptsConnectFieldInput>>;
  competitions?: InputMaybe<Array<AthleteCompetitionsConnectFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesConnectFieldInput>>;
  events?: InputMaybe<Array<AthleteEventsConnectFieldInput>>;
  nations?: InputMaybe<Array<AthleteNationsConnectFieldInput>>;
};

export type AthleteConnectOrCreateInput = {
  attempts?: InputMaybe<Array<AthleteAttemptsConnectOrCreateFieldInput>>;
  competitions?: InputMaybe<Array<AthleteCompetitionsConnectOrCreateFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesConnectOrCreateFieldInput>>;
  events?: InputMaybe<Array<AthleteEventsConnectOrCreateFieldInput>>;
  nations?: InputMaybe<Array<AthleteNationsConnectOrCreateFieldInput>>;
};

export type AthleteConnectOrCreateWhere = {
  node: AthleteUniqueWhere;
};

export type AthleteConnectWhere = {
  node: AthleteWhere;
};

export type AthleteCreateInput = {
  attempts?: InputMaybe<AthleteAttemptsFieldInput>;
  birthday: Scalars['Date']['input'];
  competitions?: InputMaybe<AthleteCompetitionsFieldInput>;
  dataSources?: InputMaybe<AthleteDataSourcesFieldInput>;
  events?: InputMaybe<AthleteEventsFieldInput>;
  familyName: Scalars['String']['input'];
  givenName: Scalars['String']['input'];
  nations?: InputMaybe<AthleteNationsFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type AthleteDataSourceDataSourcesAggregationSelection = {
  __typename?: 'AthleteDataSourceDataSourcesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AthleteDataSourceDataSourcesNodeAggregateSelection>;
};

export type AthleteDataSourceDataSourcesNodeAggregateSelection = {
  __typename?: 'AthleteDataSourceDataSourcesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type AthleteDataSourcesAggregateInput = {
  AND?: InputMaybe<Array<AthleteDataSourcesAggregateInput>>;
  NOT?: InputMaybe<AthleteDataSourcesAggregateInput>;
  OR?: InputMaybe<Array<AthleteDataSourcesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AthleteDataSourcesNodeAggregationWhereInput>;
};

export type AthleteDataSourcesConnectFieldInput = {
  connect?: InputMaybe<Array<DataSourceConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<DataSourceConnectWhere>;
};

export type AthleteDataSourcesConnectOrCreateFieldInput = {
  onCreate: AthleteDataSourcesConnectOrCreateFieldInputOnCreate;
  where: DataSourceConnectOrCreateWhere;
};

export type AthleteDataSourcesConnectOrCreateFieldInputOnCreate = {
  node: DataSourceOnCreateInput;
};

export type AthleteDataSourcesConnection = {
  __typename?: 'AthleteDataSourcesConnection';
  edges: Array<AthleteDataSourcesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AthleteDataSourcesConnectionSort = {
  node?: InputMaybe<DataSourceSort>;
};

export type AthleteDataSourcesConnectionWhere = {
  AND?: InputMaybe<Array<AthleteDataSourcesConnectionWhere>>;
  NOT?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  OR?: InputMaybe<Array<AthleteDataSourcesConnectionWhere>>;
  node?: InputMaybe<DataSourceWhere>;
};

export type AthleteDataSourcesCreateFieldInput = {
  node: DataSourceCreateInput;
};

export type AthleteDataSourcesDeleteFieldInput = {
  delete?: InputMaybe<DataSourceDeleteInput>;
  where?: InputMaybe<AthleteDataSourcesConnectionWhere>;
};

export type AthleteDataSourcesDisconnectFieldInput = {
  disconnect?: InputMaybe<DataSourceDisconnectInput>;
  where?: InputMaybe<AthleteDataSourcesConnectionWhere>;
};

export type AthleteDataSourcesFieldInput = {
  connect?: InputMaybe<Array<AthleteDataSourcesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteDataSourcesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteDataSourcesCreateFieldInput>>;
};

export type AthleteDataSourcesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteDataSourcesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteDataSourcesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteDataSourcesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AthleteDataSourcesRelationship = {
  __typename?: 'AthleteDataSourcesRelationship';
  cursor: Scalars['String']['output'];
  node: DataSource;
};

export type AthleteDataSourcesUpdateConnectionInput = {
  node?: InputMaybe<DataSourceUpdateInput>;
};

export type AthleteDataSourcesUpdateFieldInput = {
  connect?: InputMaybe<Array<AthleteDataSourcesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteDataSourcesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteDataSourcesCreateFieldInput>>;
  delete?: InputMaybe<Array<AthleteDataSourcesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteDataSourcesDisconnectFieldInput>>;
  update?: InputMaybe<AthleteDataSourcesUpdateConnectionInput>;
  where?: InputMaybe<AthleteDataSourcesConnectionWhere>;
};

export type AthleteDeleteInput = {
  attempts?: InputMaybe<Array<AthleteAttemptsDeleteFieldInput>>;
  competitions?: InputMaybe<Array<AthleteCompetitionsDeleteFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesDeleteFieldInput>>;
  events?: InputMaybe<Array<AthleteEventsDeleteFieldInput>>;
  nations?: InputMaybe<Array<AthleteNationsDeleteFieldInput>>;
};

export type AthleteDisconnectInput = {
  attempts?: InputMaybe<Array<AthleteAttemptsDisconnectFieldInput>>;
  competitions?: InputMaybe<Array<AthleteCompetitionsDisconnectFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesDisconnectFieldInput>>;
  events?: InputMaybe<Array<AthleteEventsDisconnectFieldInput>>;
  nations?: InputMaybe<Array<AthleteNationsDisconnectFieldInput>>;
};

export type AthleteEdge = {
  __typename?: 'AthleteEdge';
  cursor: Scalars['String']['output'];
  node: Athlete;
};

export type AthleteEventEventsAggregationSelection = {
  __typename?: 'AthleteEventEventsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AthleteEventEventsNodeAggregateSelection>;
};

export type AthleteEventEventsNodeAggregateSelection = {
  __typename?: 'AthleteEventEventsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type AthleteEventsAggregateInput = {
  AND?: InputMaybe<Array<AthleteEventsAggregateInput>>;
  NOT?: InputMaybe<AthleteEventsAggregateInput>;
  OR?: InputMaybe<Array<AthleteEventsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AthleteEventsNodeAggregationWhereInput>;
};

export type AthleteEventsConnectFieldInput = {
  connect?: InputMaybe<Array<EventConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<EventConnectWhere>;
};

export type AthleteEventsConnectOrCreateFieldInput = {
  onCreate: AthleteEventsConnectOrCreateFieldInputOnCreate;
  where: EventConnectOrCreateWhere;
};

export type AthleteEventsConnectOrCreateFieldInputOnCreate = {
  node: EventOnCreateInput;
};

export type AthleteEventsConnection = {
  __typename?: 'AthleteEventsConnection';
  edges: Array<AthleteEventsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AthleteEventsConnectionSort = {
  node?: InputMaybe<EventSort>;
};

export type AthleteEventsConnectionWhere = {
  AND?: InputMaybe<Array<AthleteEventsConnectionWhere>>;
  NOT?: InputMaybe<AthleteEventsConnectionWhere>;
  OR?: InputMaybe<Array<AthleteEventsConnectionWhere>>;
  node?: InputMaybe<EventWhere>;
};

export type AthleteEventsCreateFieldInput = {
  node: EventCreateInput;
};

export type AthleteEventsDeleteFieldInput = {
  delete?: InputMaybe<EventDeleteInput>;
  where?: InputMaybe<AthleteEventsConnectionWhere>;
};

export type AthleteEventsDisconnectFieldInput = {
  disconnect?: InputMaybe<EventDisconnectInput>;
  where?: InputMaybe<AthleteEventsConnectionWhere>;
};

export type AthleteEventsFieldInput = {
  connect?: InputMaybe<Array<AthleteEventsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteEventsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteEventsCreateFieldInput>>;
};

export type AthleteEventsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteEventsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteEventsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteEventsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AthleteEventsRelationship = {
  __typename?: 'AthleteEventsRelationship';
  cursor: Scalars['String']['output'];
  node: Event;
};

export type AthleteEventsUpdateConnectionInput = {
  node?: InputMaybe<EventUpdateInput>;
};

export type AthleteEventsUpdateFieldInput = {
  connect?: InputMaybe<Array<AthleteEventsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteEventsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteEventsCreateFieldInput>>;
  delete?: InputMaybe<Array<AthleteEventsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteEventsDisconnectFieldInput>>;
  update?: InputMaybe<AthleteEventsUpdateConnectionInput>;
  where?: InputMaybe<AthleteEventsConnectionWhere>;
};

export type AthleteNationNationsAggregationSelection = {
  __typename?: 'AthleteNationNationsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AthleteNationNationsNodeAggregateSelection>;
};

export type AthleteNationNationsNodeAggregateSelection = {
  __typename?: 'AthleteNationNationsNodeAggregateSelection';
  code: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type AthleteNationsAggregateInput = {
  AND?: InputMaybe<Array<AthleteNationsAggregateInput>>;
  NOT?: InputMaybe<AthleteNationsAggregateInput>;
  OR?: InputMaybe<Array<AthleteNationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AthleteNationsNodeAggregationWhereInput>;
};

export type AthleteNationsConnectFieldInput = {
  connect?: InputMaybe<Array<NationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<NationConnectWhere>;
};

export type AthleteNationsConnectOrCreateFieldInput = {
  onCreate: AthleteNationsConnectOrCreateFieldInputOnCreate;
  where: NationConnectOrCreateWhere;
};

export type AthleteNationsConnectOrCreateFieldInputOnCreate = {
  node: NationOnCreateInput;
};

export type AthleteNationsConnection = {
  __typename?: 'AthleteNationsConnection';
  edges: Array<AthleteNationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AthleteNationsConnectionSort = {
  node?: InputMaybe<NationSort>;
};

export type AthleteNationsConnectionWhere = {
  AND?: InputMaybe<Array<AthleteNationsConnectionWhere>>;
  NOT?: InputMaybe<AthleteNationsConnectionWhere>;
  OR?: InputMaybe<Array<AthleteNationsConnectionWhere>>;
  node?: InputMaybe<NationWhere>;
};

export type AthleteNationsCreateFieldInput = {
  node: NationCreateInput;
};

export type AthleteNationsDeleteFieldInput = {
  delete?: InputMaybe<NationDeleteInput>;
  where?: InputMaybe<AthleteNationsConnectionWhere>;
};

export type AthleteNationsDisconnectFieldInput = {
  disconnect?: InputMaybe<NationDisconnectInput>;
  where?: InputMaybe<AthleteNationsConnectionWhere>;
};

export type AthleteNationsFieldInput = {
  connect?: InputMaybe<Array<AthleteNationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteNationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteNationsCreateFieldInput>>;
};

export type AthleteNationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteNationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteNationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteNationsNodeAggregationWhereInput>>;
  code_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  code_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AthleteNationsRelationship = {
  __typename?: 'AthleteNationsRelationship';
  cursor: Scalars['String']['output'];
  node: Nation;
};

export type AthleteNationsUpdateConnectionInput = {
  node?: InputMaybe<NationUpdateInput>;
};

export type AthleteNationsUpdateFieldInput = {
  connect?: InputMaybe<Array<AthleteNationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteNationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteNationsCreateFieldInput>>;
  delete?: InputMaybe<Array<AthleteNationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteNationsDisconnectFieldInput>>;
  update?: InputMaybe<AthleteNationsUpdateConnectionInput>;
  where?: InputMaybe<AthleteNationsConnectionWhere>;
};

export type AthleteOnCreateInput = {
  birthday: Scalars['Date']['input'];
  familyName: Scalars['String']['input'];
  givenName: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type AthleteOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more AthleteSort objects to sort Athletes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AthleteSort>>;
};

export type AthleteRelationInput = {
  attempts?: InputMaybe<Array<AthleteAttemptsCreateFieldInput>>;
  competitions?: InputMaybe<Array<AthleteCompetitionsCreateFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesCreateFieldInput>>;
  events?: InputMaybe<Array<AthleteEventsCreateFieldInput>>;
  nations?: InputMaybe<Array<AthleteNationsCreateFieldInput>>;
};

/** Fields to sort Athletes by. The order in which sorts are applied is not guaranteed when specifying many fields in one AthleteSort object. */
export type AthleteSort = {
  birthday?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  familyName?: InputMaybe<SortDirection>;
  givenName?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type AthleteUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AthleteUpdateInput = {
  attempts?: InputMaybe<Array<AthleteAttemptsUpdateFieldInput>>;
  birthday?: InputMaybe<Scalars['Date']['input']>;
  competitions?: InputMaybe<Array<AthleteCompetitionsUpdateFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesUpdateFieldInput>>;
  events?: InputMaybe<Array<AthleteEventsUpdateFieldInput>>;
  familyName?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  nations?: InputMaybe<Array<AthleteNationsUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AthleteWhere = {
  AND?: InputMaybe<Array<AthleteWhere>>;
  NOT?: InputMaybe<AthleteWhere>;
  OR?: InputMaybe<Array<AthleteWhere>>;
  attemptsAggregate?: InputMaybe<AthleteAttemptsAggregateInput>;
  /** Return Athletes where all of the related AthleteAttemptsConnections match this filter */
  attemptsConnection_ALL?: InputMaybe<AthleteAttemptsConnectionWhere>;
  /** Return Athletes where none of the related AthleteAttemptsConnections match this filter */
  attemptsConnection_NONE?: InputMaybe<AthleteAttemptsConnectionWhere>;
  /** Return Athletes where one of the related AthleteAttemptsConnections match this filter */
  attemptsConnection_SINGLE?: InputMaybe<AthleteAttemptsConnectionWhere>;
  /** Return Athletes where some of the related AthleteAttemptsConnections match this filter */
  attemptsConnection_SOME?: InputMaybe<AthleteAttemptsConnectionWhere>;
  /** Return Athletes where all of the related Attempts match this filter */
  attempts_ALL?: InputMaybe<AttemptWhere>;
  /** Return Athletes where none of the related Attempts match this filter */
  attempts_NONE?: InputMaybe<AttemptWhere>;
  /** Return Athletes where one of the related Attempts match this filter */
  attempts_SINGLE?: InputMaybe<AttemptWhere>;
  /** Return Athletes where some of the related Attempts match this filter */
  attempts_SOME?: InputMaybe<AttemptWhere>;
  birthday?: InputMaybe<Scalars['Date']['input']>;
  birthday_GT?: InputMaybe<Scalars['Date']['input']>;
  birthday_GTE?: InputMaybe<Scalars['Date']['input']>;
  birthday_IN?: InputMaybe<Array<Scalars['Date']['input']>>;
  birthday_LT?: InputMaybe<Scalars['Date']['input']>;
  birthday_LTE?: InputMaybe<Scalars['Date']['input']>;
  competitionsAggregate?: InputMaybe<AthleteCompetitionsAggregateInput>;
  /** Return Athletes where all of the related AthleteCompetitionsConnections match this filter */
  competitionsConnection_ALL?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  /** Return Athletes where none of the related AthleteCompetitionsConnections match this filter */
  competitionsConnection_NONE?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  /** Return Athletes where one of the related AthleteCompetitionsConnections match this filter */
  competitionsConnection_SINGLE?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  /** Return Athletes where some of the related AthleteCompetitionsConnections match this filter */
  competitionsConnection_SOME?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  /** Return Athletes where all of the related Competitions match this filter */
  competitions_ALL?: InputMaybe<CompetitionWhere>;
  /** Return Athletes where none of the related Competitions match this filter */
  competitions_NONE?: InputMaybe<CompetitionWhere>;
  /** Return Athletes where one of the related Competitions match this filter */
  competitions_SINGLE?: InputMaybe<CompetitionWhere>;
  /** Return Athletes where some of the related Competitions match this filter */
  competitions_SOME?: InputMaybe<CompetitionWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dataSourcesAggregate?: InputMaybe<AthleteDataSourcesAggregateInput>;
  /** Return Athletes where all of the related AthleteDataSourcesConnections match this filter */
  dataSourcesConnection_ALL?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  /** Return Athletes where none of the related AthleteDataSourcesConnections match this filter */
  dataSourcesConnection_NONE?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  /** Return Athletes where one of the related AthleteDataSourcesConnections match this filter */
  dataSourcesConnection_SINGLE?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  /** Return Athletes where some of the related AthleteDataSourcesConnections match this filter */
  dataSourcesConnection_SOME?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  /** Return Athletes where all of the related DataSources match this filter */
  dataSources_ALL?: InputMaybe<DataSourceWhere>;
  /** Return Athletes where none of the related DataSources match this filter */
  dataSources_NONE?: InputMaybe<DataSourceWhere>;
  /** Return Athletes where one of the related DataSources match this filter */
  dataSources_SINGLE?: InputMaybe<DataSourceWhere>;
  /** Return Athletes where some of the related DataSources match this filter */
  dataSources_SOME?: InputMaybe<DataSourceWhere>;
  eventsAggregate?: InputMaybe<AthleteEventsAggregateInput>;
  /** Return Athletes where all of the related AthleteEventsConnections match this filter */
  eventsConnection_ALL?: InputMaybe<AthleteEventsConnectionWhere>;
  /** Return Athletes where none of the related AthleteEventsConnections match this filter */
  eventsConnection_NONE?: InputMaybe<AthleteEventsConnectionWhere>;
  /** Return Athletes where one of the related AthleteEventsConnections match this filter */
  eventsConnection_SINGLE?: InputMaybe<AthleteEventsConnectionWhere>;
  /** Return Athletes where some of the related AthleteEventsConnections match this filter */
  eventsConnection_SOME?: InputMaybe<AthleteEventsConnectionWhere>;
  /** Return Athletes where all of the related Events match this filter */
  events_ALL?: InputMaybe<EventWhere>;
  /** Return Athletes where none of the related Events match this filter */
  events_NONE?: InputMaybe<EventWhere>;
  /** Return Athletes where one of the related Events match this filter */
  events_SINGLE?: InputMaybe<EventWhere>;
  /** Return Athletes where some of the related Events match this filter */
  events_SOME?: InputMaybe<EventWhere>;
  familyName?: InputMaybe<Scalars['String']['input']>;
  familyName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  familyName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  familyName_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  familyName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  givenName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  givenName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  givenName_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  givenName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  nationsAggregate?: InputMaybe<AthleteNationsAggregateInput>;
  /** Return Athletes where all of the related AthleteNationsConnections match this filter */
  nationsConnection_ALL?: InputMaybe<AthleteNationsConnectionWhere>;
  /** Return Athletes where none of the related AthleteNationsConnections match this filter */
  nationsConnection_NONE?: InputMaybe<AthleteNationsConnectionWhere>;
  /** Return Athletes where one of the related AthleteNationsConnections match this filter */
  nationsConnection_SINGLE?: InputMaybe<AthleteNationsConnectionWhere>;
  /** Return Athletes where some of the related AthleteNationsConnections match this filter */
  nationsConnection_SOME?: InputMaybe<AthleteNationsConnectionWhere>;
  /** Return Athletes where all of the related Nations match this filter */
  nations_ALL?: InputMaybe<NationWhere>;
  /** Return Athletes where none of the related Nations match this filter */
  nations_NONE?: InputMaybe<NationWhere>;
  /** Return Athletes where one of the related Nations match this filter */
  nations_SINGLE?: InputMaybe<NationWhere>;
  /** Return Athletes where some of the related Nations match this filter */
  nations_SOME?: InputMaybe<NationWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AthletesConnection = {
  __typename?: 'AthletesConnection';
  edges: Array<AthleteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Attempt = {
  __typename?: 'Attempt';
  athlete: Athlete;
  athleteAggregate?: Maybe<AttemptAthleteAthleteAggregationSelection>;
  athleteConnection: AttemptAthleteConnection;
  createdAt: Scalars['DateTime']['output'];
  event: Event;
  eventAggregate?: Maybe<AttemptEventEventAggregationSelection>;
  eventConnection: AttemptEventConnection;
  id: Scalars['ID']['output'];
  nation: Nation;
  nationAggregate?: Maybe<AttemptNationNationAggregationSelection>;
  nationConnection: AttemptNationConnection;
  successful: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
  weight: Scalars['Float']['output'];
};


export type AttemptAthleteArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


export type AttemptAthleteAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AthleteWhere>;
};


export type AttemptAthleteConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AttemptAthleteConnectionSort>>;
  where?: InputMaybe<AttemptAthleteConnectionWhere>;
};


export type AttemptEventArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<EventOptions>;
  where?: InputMaybe<EventWhere>;
};


export type AttemptEventAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventWhere>;
};


export type AttemptEventConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AttemptEventConnectionSort>>;
  where?: InputMaybe<AttemptEventConnectionWhere>;
};


export type AttemptNationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<NationOptions>;
  where?: InputMaybe<NationWhere>;
};


export type AttemptNationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NationWhere>;
};


export type AttemptNationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AttemptNationConnectionSort>>;
  where?: InputMaybe<AttemptNationConnectionWhere>;
};

export type AttemptAggregateSelection = {
  __typename?: 'AttemptAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
  weight: FloatAggregateSelectionNonNullable;
};

export type AttemptAthleteAggregateInput = {
  AND?: InputMaybe<Array<AttemptAthleteAggregateInput>>;
  NOT?: InputMaybe<AttemptAthleteAggregateInput>;
  OR?: InputMaybe<Array<AttemptAthleteAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AttemptAthleteNodeAggregationWhereInput>;
};

export type AttemptAthleteAthleteAggregationSelection = {
  __typename?: 'AttemptAthleteAthleteAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AttemptAthleteAthleteNodeAggregateSelection>;
};

export type AttemptAthleteAthleteNodeAggregateSelection = {
  __typename?: 'AttemptAthleteAthleteNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNonNullable;
  givenName: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type AttemptAthleteConnectFieldInput = {
  connect?: InputMaybe<AthleteConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AthleteConnectWhere>;
};

export type AttemptAthleteConnectOrCreateFieldInput = {
  onCreate: AttemptAthleteConnectOrCreateFieldInputOnCreate;
  where: AthleteConnectOrCreateWhere;
};

export type AttemptAthleteConnectOrCreateFieldInputOnCreate = {
  node: AthleteOnCreateInput;
};

export type AttemptAthleteConnection = {
  __typename?: 'AttemptAthleteConnection';
  edges: Array<AttemptAthleteRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AttemptAthleteConnectionSort = {
  node?: InputMaybe<AthleteSort>;
};

export type AttemptAthleteConnectionWhere = {
  AND?: InputMaybe<Array<AttemptAthleteConnectionWhere>>;
  NOT?: InputMaybe<AttemptAthleteConnectionWhere>;
  OR?: InputMaybe<Array<AttemptAthleteConnectionWhere>>;
  node?: InputMaybe<AthleteWhere>;
};

export type AttemptAthleteCreateFieldInput = {
  node: AthleteCreateInput;
};

export type AttemptAthleteDeleteFieldInput = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<AttemptAthleteConnectionWhere>;
};

export type AttemptAthleteDisconnectFieldInput = {
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  where?: InputMaybe<AttemptAthleteConnectionWhere>;
};

export type AttemptAthleteFieldInput = {
  connect?: InputMaybe<AttemptAthleteConnectFieldInput>;
  connectOrCreate?: InputMaybe<AttemptAthleteConnectOrCreateFieldInput>;
  create?: InputMaybe<AttemptAthleteCreateFieldInput>;
};

export type AttemptAthleteNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AttemptAthleteNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AttemptAthleteNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AttemptAthleteNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  familyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AttemptAthleteRelationship = {
  __typename?: 'AttemptAthleteRelationship';
  cursor: Scalars['String']['output'];
  node: Athlete;
};

export type AttemptAthleteUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
};

export type AttemptAthleteUpdateFieldInput = {
  connect?: InputMaybe<AttemptAthleteConnectFieldInput>;
  connectOrCreate?: InputMaybe<AttemptAthleteConnectOrCreateFieldInput>;
  create?: InputMaybe<AttemptAthleteCreateFieldInput>;
  delete?: InputMaybe<AttemptAthleteDeleteFieldInput>;
  disconnect?: InputMaybe<AttemptAthleteDisconnectFieldInput>;
  update?: InputMaybe<AttemptAthleteUpdateConnectionInput>;
  where?: InputMaybe<AttemptAthleteConnectionWhere>;
};

export type AttemptConnectInput = {
  athlete?: InputMaybe<AttemptAthleteConnectFieldInput>;
  event?: InputMaybe<AttemptEventConnectFieldInput>;
  nation?: InputMaybe<AttemptNationConnectFieldInput>;
};

export type AttemptConnectOrCreateInput = {
  athlete?: InputMaybe<AttemptAthleteConnectOrCreateFieldInput>;
  event?: InputMaybe<AttemptEventConnectOrCreateFieldInput>;
  nation?: InputMaybe<AttemptNationConnectOrCreateFieldInput>;
};

export type AttemptConnectOrCreateWhere = {
  node: AttemptUniqueWhere;
};

export type AttemptConnectWhere = {
  node: AttemptWhere;
};

export type AttemptCreateInput = {
  athlete?: InputMaybe<AttemptAthleteFieldInput>;
  event?: InputMaybe<AttemptEventFieldInput>;
  nation?: InputMaybe<AttemptNationFieldInput>;
  successful: Scalars['Boolean']['input'];
  verified?: Scalars['Boolean']['input'];
  weight: Scalars['Float']['input'];
};

export type AttemptDeleteInput = {
  athlete?: InputMaybe<AttemptAthleteDeleteFieldInput>;
  event?: InputMaybe<AttemptEventDeleteFieldInput>;
  nation?: InputMaybe<AttemptNationDeleteFieldInput>;
};

export type AttemptDisconnectInput = {
  athlete?: InputMaybe<AttemptAthleteDisconnectFieldInput>;
  event?: InputMaybe<AttemptEventDisconnectFieldInput>;
  nation?: InputMaybe<AttemptNationDisconnectFieldInput>;
};

export type AttemptEdge = {
  __typename?: 'AttemptEdge';
  cursor: Scalars['String']['output'];
  node: Attempt;
};

export type AttemptEventAggregateInput = {
  AND?: InputMaybe<Array<AttemptEventAggregateInput>>;
  NOT?: InputMaybe<AttemptEventAggregateInput>;
  OR?: InputMaybe<Array<AttemptEventAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AttemptEventNodeAggregationWhereInput>;
};

export type AttemptEventConnectFieldInput = {
  connect?: InputMaybe<EventConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<EventConnectWhere>;
};

export type AttemptEventConnectOrCreateFieldInput = {
  onCreate: AttemptEventConnectOrCreateFieldInputOnCreate;
  where: EventConnectOrCreateWhere;
};

export type AttemptEventConnectOrCreateFieldInputOnCreate = {
  node: EventOnCreateInput;
};

export type AttemptEventConnection = {
  __typename?: 'AttemptEventConnection';
  edges: Array<AttemptEventRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AttemptEventConnectionSort = {
  node?: InputMaybe<EventSort>;
};

export type AttemptEventConnectionWhere = {
  AND?: InputMaybe<Array<AttemptEventConnectionWhere>>;
  NOT?: InputMaybe<AttemptEventConnectionWhere>;
  OR?: InputMaybe<Array<AttemptEventConnectionWhere>>;
  node?: InputMaybe<EventWhere>;
};

export type AttemptEventCreateFieldInput = {
  node: EventCreateInput;
};

export type AttemptEventDeleteFieldInput = {
  delete?: InputMaybe<EventDeleteInput>;
  where?: InputMaybe<AttemptEventConnectionWhere>;
};

export type AttemptEventDisconnectFieldInput = {
  disconnect?: InputMaybe<EventDisconnectInput>;
  where?: InputMaybe<AttemptEventConnectionWhere>;
};

export type AttemptEventEventAggregationSelection = {
  __typename?: 'AttemptEventEventAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AttemptEventEventNodeAggregateSelection>;
};

export type AttemptEventEventNodeAggregateSelection = {
  __typename?: 'AttemptEventEventNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type AttemptEventFieldInput = {
  connect?: InputMaybe<AttemptEventConnectFieldInput>;
  connectOrCreate?: InputMaybe<AttemptEventConnectOrCreateFieldInput>;
  create?: InputMaybe<AttemptEventCreateFieldInput>;
};

export type AttemptEventNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AttemptEventNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AttemptEventNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AttemptEventNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AttemptEventRelationship = {
  __typename?: 'AttemptEventRelationship';
  cursor: Scalars['String']['output'];
  node: Event;
};

export type AttemptEventUpdateConnectionInput = {
  node?: InputMaybe<EventUpdateInput>;
};

export type AttemptEventUpdateFieldInput = {
  connect?: InputMaybe<AttemptEventConnectFieldInput>;
  connectOrCreate?: InputMaybe<AttemptEventConnectOrCreateFieldInput>;
  create?: InputMaybe<AttemptEventCreateFieldInput>;
  delete?: InputMaybe<AttemptEventDeleteFieldInput>;
  disconnect?: InputMaybe<AttemptEventDisconnectFieldInput>;
  update?: InputMaybe<AttemptEventUpdateConnectionInput>;
  where?: InputMaybe<AttemptEventConnectionWhere>;
};

export type AttemptNationAggregateInput = {
  AND?: InputMaybe<Array<AttemptNationAggregateInput>>;
  NOT?: InputMaybe<AttemptNationAggregateInput>;
  OR?: InputMaybe<Array<AttemptNationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AttemptNationNodeAggregationWhereInput>;
};

export type AttemptNationConnectFieldInput = {
  connect?: InputMaybe<NationConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<NationConnectWhere>;
};

export type AttemptNationConnectOrCreateFieldInput = {
  onCreate: AttemptNationConnectOrCreateFieldInputOnCreate;
  where: NationConnectOrCreateWhere;
};

export type AttemptNationConnectOrCreateFieldInputOnCreate = {
  node: NationOnCreateInput;
};

export type AttemptNationConnection = {
  __typename?: 'AttemptNationConnection';
  edges: Array<AttemptNationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AttemptNationConnectionSort = {
  node?: InputMaybe<NationSort>;
};

export type AttemptNationConnectionWhere = {
  AND?: InputMaybe<Array<AttemptNationConnectionWhere>>;
  NOT?: InputMaybe<AttemptNationConnectionWhere>;
  OR?: InputMaybe<Array<AttemptNationConnectionWhere>>;
  node?: InputMaybe<NationWhere>;
};

export type AttemptNationCreateFieldInput = {
  node: NationCreateInput;
};

export type AttemptNationDeleteFieldInput = {
  delete?: InputMaybe<NationDeleteInput>;
  where?: InputMaybe<AttemptNationConnectionWhere>;
};

export type AttemptNationDisconnectFieldInput = {
  disconnect?: InputMaybe<NationDisconnectInput>;
  where?: InputMaybe<AttemptNationConnectionWhere>;
};

export type AttemptNationFieldInput = {
  connect?: InputMaybe<AttemptNationConnectFieldInput>;
  connectOrCreate?: InputMaybe<AttemptNationConnectOrCreateFieldInput>;
  create?: InputMaybe<AttemptNationCreateFieldInput>;
};

export type AttemptNationNationAggregationSelection = {
  __typename?: 'AttemptNationNationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AttemptNationNationNodeAggregateSelection>;
};

export type AttemptNationNationNodeAggregateSelection = {
  __typename?: 'AttemptNationNationNodeAggregateSelection';
  code: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type AttemptNationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AttemptNationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AttemptNationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AttemptNationNodeAggregationWhereInput>>;
  code_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  code_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AttemptNationRelationship = {
  __typename?: 'AttemptNationRelationship';
  cursor: Scalars['String']['output'];
  node: Nation;
};

export type AttemptNationUpdateConnectionInput = {
  node?: InputMaybe<NationUpdateInput>;
};

export type AttemptNationUpdateFieldInput = {
  connect?: InputMaybe<AttemptNationConnectFieldInput>;
  connectOrCreate?: InputMaybe<AttemptNationConnectOrCreateFieldInput>;
  create?: InputMaybe<AttemptNationCreateFieldInput>;
  delete?: InputMaybe<AttemptNationDeleteFieldInput>;
  disconnect?: InputMaybe<AttemptNationDisconnectFieldInput>;
  update?: InputMaybe<AttemptNationUpdateConnectionInput>;
  where?: InputMaybe<AttemptNationConnectionWhere>;
};

export type AttemptOnCreateInput = {
  successful: Scalars['Boolean']['input'];
  verified?: Scalars['Boolean']['input'];
  weight: Scalars['Float']['input'];
};

export type AttemptOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more AttemptSort objects to sort Attempts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AttemptSort>>;
};

export type AttemptRelationInput = {
  athlete?: InputMaybe<AttemptAthleteCreateFieldInput>;
  event?: InputMaybe<AttemptEventCreateFieldInput>;
  nation?: InputMaybe<AttemptNationCreateFieldInput>;
};

/** Fields to sort Attempts by. The order in which sorts are applied is not guaranteed when specifying many fields in one AttemptSort object. */
export type AttemptSort = {
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  successful?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  weight?: InputMaybe<SortDirection>;
};

export type AttemptUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AttemptUpdateInput = {
  athlete?: InputMaybe<AttemptAthleteUpdateFieldInput>;
  event?: InputMaybe<AttemptEventUpdateFieldInput>;
  nation?: InputMaybe<AttemptNationUpdateFieldInput>;
  successful?: InputMaybe<Scalars['Boolean']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  weight_ADD?: InputMaybe<Scalars['Float']['input']>;
  weight_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  weight_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  weight_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
};

export type AttemptWhere = {
  AND?: InputMaybe<Array<AttemptWhere>>;
  NOT?: InputMaybe<AttemptWhere>;
  OR?: InputMaybe<Array<AttemptWhere>>;
  athlete?: InputMaybe<AthleteWhere>;
  athleteAggregate?: InputMaybe<AttemptAthleteAggregateInput>;
  athleteConnection?: InputMaybe<AttemptAthleteConnectionWhere>;
  athleteConnection_NOT?: InputMaybe<AttemptAthleteConnectionWhere>;
  athlete_NOT?: InputMaybe<AthleteWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  event?: InputMaybe<EventWhere>;
  eventAggregate?: InputMaybe<AttemptEventAggregateInput>;
  eventConnection?: InputMaybe<AttemptEventConnectionWhere>;
  eventConnection_NOT?: InputMaybe<AttemptEventConnectionWhere>;
  event_NOT?: InputMaybe<EventWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  nation?: InputMaybe<NationWhere>;
  nationAggregate?: InputMaybe<AttemptNationAggregateInput>;
  nationConnection?: InputMaybe<AttemptNationConnectionWhere>;
  nationConnection_NOT?: InputMaybe<AttemptNationConnectionWhere>;
  nation_NOT?: InputMaybe<NationWhere>;
  successful?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  weight_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_IN?: InputMaybe<Array<Scalars['Float']['input']>>;
  weight_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_LTE?: InputMaybe<Scalars['Float']['input']>;
};

export type AttemptsConnection = {
  __typename?: 'AttemptsConnection';
  edges: Array<AttemptEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CitiesConnection = {
  __typename?: 'CitiesConnection';
  edges: Array<CityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type City = {
  __typename?: 'City';
  city: City;
  cityAggregate?: Maybe<CityCityCityAggregationSelection>;
  cityConnection: CityCityConnection;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nation: Nation;
  nationAggregate?: Maybe<CityNationNationAggregationSelection>;
  nationConnection: CityNationConnection;
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};


export type CityCityArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CityOptions>;
  where?: InputMaybe<CityWhere>;
};


export type CityCityAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CityWhere>;
};


export type CityCityConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CityCityConnectionSort>>;
  where?: InputMaybe<CityCityConnectionWhere>;
};


export type CityNationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<NationOptions>;
  where?: InputMaybe<NationWhere>;
};


export type CityNationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NationWhere>;
};


export type CityNationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CityNationConnectionSort>>;
  where?: InputMaybe<CityNationConnectionWhere>;
};

export type CityAggregateSelection = {
  __typename?: 'CityAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type CityCityAggregateInput = {
  AND?: InputMaybe<Array<CityCityAggregateInput>>;
  NOT?: InputMaybe<CityCityAggregateInput>;
  OR?: InputMaybe<Array<CityCityAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CityCityNodeAggregationWhereInput>;
};

export type CityCityCityAggregationSelection = {
  __typename?: 'CityCityCityAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CityCityCityNodeAggregateSelection>;
};

export type CityCityCityNodeAggregateSelection = {
  __typename?: 'CityCityCityNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type CityCityConnectFieldInput = {
  connect?: InputMaybe<CityConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CityConnectWhere>;
};

export type CityCityConnectOrCreateFieldInput = {
  onCreate: CityCityConnectOrCreateFieldInputOnCreate;
  where: CityConnectOrCreateWhere;
};

export type CityCityConnectOrCreateFieldInputOnCreate = {
  node: CityOnCreateInput;
};

export type CityCityConnection = {
  __typename?: 'CityCityConnection';
  edges: Array<CityCityRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CityCityConnectionSort = {
  node?: InputMaybe<CitySort>;
};

export type CityCityConnectionWhere = {
  AND?: InputMaybe<Array<CityCityConnectionWhere>>;
  NOT?: InputMaybe<CityCityConnectionWhere>;
  OR?: InputMaybe<Array<CityCityConnectionWhere>>;
  node?: InputMaybe<CityWhere>;
};

export type CityCityCreateFieldInput = {
  node: CityCreateInput;
};

export type CityCityDeleteFieldInput = {
  delete?: InputMaybe<CityDeleteInput>;
  where?: InputMaybe<CityCityConnectionWhere>;
};

export type CityCityDisconnectFieldInput = {
  disconnect?: InputMaybe<CityDisconnectInput>;
  where?: InputMaybe<CityCityConnectionWhere>;
};

export type CityCityFieldInput = {
  connect?: InputMaybe<CityCityConnectFieldInput>;
  connectOrCreate?: InputMaybe<CityCityConnectOrCreateFieldInput>;
  create?: InputMaybe<CityCityCreateFieldInput>;
};

export type CityCityNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CityCityNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CityCityNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CityCityNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CityCityRelationship = {
  __typename?: 'CityCityRelationship';
  cursor: Scalars['String']['output'];
  node: City;
};

export type CityCityUpdateConnectionInput = {
  node?: InputMaybe<CityUpdateInput>;
};

export type CityCityUpdateFieldInput = {
  connect?: InputMaybe<CityCityConnectFieldInput>;
  connectOrCreate?: InputMaybe<CityCityConnectOrCreateFieldInput>;
  create?: InputMaybe<CityCityCreateFieldInput>;
  delete?: InputMaybe<CityCityDeleteFieldInput>;
  disconnect?: InputMaybe<CityCityDisconnectFieldInput>;
  update?: InputMaybe<CityCityUpdateConnectionInput>;
  where?: InputMaybe<CityCityConnectionWhere>;
};

export type CityConnectInput = {
  city?: InputMaybe<CityCityConnectFieldInput>;
  nation?: InputMaybe<CityNationConnectFieldInput>;
};

export type CityConnectOrCreateInput = {
  city?: InputMaybe<CityCityConnectOrCreateFieldInput>;
  nation?: InputMaybe<CityNationConnectOrCreateFieldInput>;
};

export type CityConnectOrCreateWhere = {
  node: CityUniqueWhere;
};

export type CityConnectWhere = {
  node: CityWhere;
};

export type CityCreateInput = {
  city?: InputMaybe<CityCityFieldInput>;
  name: Scalars['String']['input'];
  nation?: InputMaybe<CityNationFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type CityDeleteInput = {
  city?: InputMaybe<CityCityDeleteFieldInput>;
  nation?: InputMaybe<CityNationDeleteFieldInput>;
};

export type CityDisconnectInput = {
  city?: InputMaybe<CityCityDisconnectFieldInput>;
  nation?: InputMaybe<CityNationDisconnectFieldInput>;
};

export type CityEdge = {
  __typename?: 'CityEdge';
  cursor: Scalars['String']['output'];
  node: City;
};

export type CityNationAggregateInput = {
  AND?: InputMaybe<Array<CityNationAggregateInput>>;
  NOT?: InputMaybe<CityNationAggregateInput>;
  OR?: InputMaybe<Array<CityNationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CityNationNodeAggregationWhereInput>;
};

export type CityNationConnectFieldInput = {
  connect?: InputMaybe<NationConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<NationConnectWhere>;
};

export type CityNationConnectOrCreateFieldInput = {
  onCreate: CityNationConnectOrCreateFieldInputOnCreate;
  where: NationConnectOrCreateWhere;
};

export type CityNationConnectOrCreateFieldInputOnCreate = {
  node: NationOnCreateInput;
};

export type CityNationConnection = {
  __typename?: 'CityNationConnection';
  edges: Array<CityNationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CityNationConnectionSort = {
  node?: InputMaybe<NationSort>;
};

export type CityNationConnectionWhere = {
  AND?: InputMaybe<Array<CityNationConnectionWhere>>;
  NOT?: InputMaybe<CityNationConnectionWhere>;
  OR?: InputMaybe<Array<CityNationConnectionWhere>>;
  node?: InputMaybe<NationWhere>;
};

export type CityNationCreateFieldInput = {
  node: NationCreateInput;
};

export type CityNationDeleteFieldInput = {
  delete?: InputMaybe<NationDeleteInput>;
  where?: InputMaybe<CityNationConnectionWhere>;
};

export type CityNationDisconnectFieldInput = {
  disconnect?: InputMaybe<NationDisconnectInput>;
  where?: InputMaybe<CityNationConnectionWhere>;
};

export type CityNationFieldInput = {
  connect?: InputMaybe<CityNationConnectFieldInput>;
  connectOrCreate?: InputMaybe<CityNationConnectOrCreateFieldInput>;
  create?: InputMaybe<CityNationCreateFieldInput>;
};

export type CityNationNationAggregationSelection = {
  __typename?: 'CityNationNationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CityNationNationNodeAggregateSelection>;
};

export type CityNationNationNodeAggregateSelection = {
  __typename?: 'CityNationNationNodeAggregateSelection';
  code: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type CityNationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CityNationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CityNationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CityNationNodeAggregationWhereInput>>;
  code_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  code_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CityNationRelationship = {
  __typename?: 'CityNationRelationship';
  cursor: Scalars['String']['output'];
  node: Nation;
};

export type CityNationUpdateConnectionInput = {
  node?: InputMaybe<NationUpdateInput>;
};

export type CityNationUpdateFieldInput = {
  connect?: InputMaybe<CityNationConnectFieldInput>;
  connectOrCreate?: InputMaybe<CityNationConnectOrCreateFieldInput>;
  create?: InputMaybe<CityNationCreateFieldInput>;
  delete?: InputMaybe<CityNationDeleteFieldInput>;
  disconnect?: InputMaybe<CityNationDisconnectFieldInput>;
  update?: InputMaybe<CityNationUpdateConnectionInput>;
  where?: InputMaybe<CityNationConnectionWhere>;
};

export type CityOnCreateInput = {
  name: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type CityOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CitySort objects to sort Cities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CitySort>>;
};

export type CityRelationInput = {
  city?: InputMaybe<CityCityCreateFieldInput>;
  nation?: InputMaybe<CityNationCreateFieldInput>;
};

/** Fields to sort Cities by. The order in which sorts are applied is not guaranteed when specifying many fields in one CitySort object. */
export type CitySort = {
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type CityUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CityUpdateInput = {
  city?: InputMaybe<CityCityUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  nation?: InputMaybe<CityNationUpdateFieldInput>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CityWhere = {
  AND?: InputMaybe<Array<CityWhere>>;
  NOT?: InputMaybe<CityWhere>;
  OR?: InputMaybe<Array<CityWhere>>;
  city?: InputMaybe<CityWhere>;
  cityAggregate?: InputMaybe<CityCityAggregateInput>;
  cityConnection?: InputMaybe<CityCityConnectionWhere>;
  cityConnection_NOT?: InputMaybe<CityCityConnectionWhere>;
  city_NOT?: InputMaybe<CityWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  nation?: InputMaybe<NationWhere>;
  nationAggregate?: InputMaybe<CityNationAggregateInput>;
  nationConnection?: InputMaybe<CityNationConnectionWhere>;
  nationConnection_NOT?: InputMaybe<CityNationConnectionWhere>;
  nation_NOT?: InputMaybe<NationWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum Class {
  M55 = 'M55',
  M61 = 'M61',
  M67 = 'M67',
  M73 = 'M73',
  M81 = 'M81',
  M89 = 'M89',
  M96 = 'M96',
  M102 = 'M102',
  M109 = 'M109',
  Mp109 = 'MP109',
  W45 = 'W45',
  W49 = 'W49',
  W55 = 'W55',
  W59 = 'W59',
  W64 = 'W64',
  W71 = 'W71',
  W76 = 'W76',
  W81 = 'W81',
  W87 = 'W87',
  Wp87 = 'WP87'
}

export type Competition = {
  __typename?: 'Competition';
  athletes: Array<Athlete>;
  athletesAggregate?: Maybe<CompetitionAthleteAthletesAggregationSelection>;
  athletesConnection: CompetitionAthletesConnection;
  city: City;
  cityAggregate?: Maybe<CompetitionCityCityAggregationSelection>;
  cityConnection: CompetitionCityConnection;
  createdAt: Scalars['DateTime']['output'];
  dataSources: Array<DataSource>;
  dataSourcesAggregate?: Maybe<CompetitionDataSourceDataSourcesAggregationSelection>;
  dataSourcesConnection: CompetitionDataSourcesConnection;
  date: Scalars['Date']['output'];
  events: Array<Event>;
  eventsAggregate?: Maybe<CompetitionEventEventsAggregationSelection>;
  eventsConnection: CompetitionEventsConnection;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sports: Array<Sport>;
  sportsAggregate?: Maybe<CompetitionSportSportsAggregationSelection>;
  sportsConnection: CompetitionSportsConnection;
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};


export type CompetitionAthletesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


export type CompetitionAthletesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AthleteWhere>;
};


export type CompetitionAthletesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CompetitionAthletesConnectionSort>>;
  where?: InputMaybe<CompetitionAthletesConnectionWhere>;
};


export type CompetitionCityArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CityOptions>;
  where?: InputMaybe<CityWhere>;
};


export type CompetitionCityAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CityWhere>;
};


export type CompetitionCityConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CompetitionCityConnectionSort>>;
  where?: InputMaybe<CompetitionCityConnectionWhere>;
};


export type CompetitionDataSourcesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<DataSourceOptions>;
  where?: InputMaybe<DataSourceWhere>;
};


export type CompetitionDataSourcesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DataSourceWhere>;
};


export type CompetitionDataSourcesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CompetitionDataSourcesConnectionSort>>;
  where?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
};


export type CompetitionEventsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<EventOptions>;
  where?: InputMaybe<EventWhere>;
};


export type CompetitionEventsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventWhere>;
};


export type CompetitionEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CompetitionEventsConnectionSort>>;
  where?: InputMaybe<CompetitionEventsConnectionWhere>;
};


export type CompetitionSportsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SportOptions>;
  where?: InputMaybe<SportWhere>;
};


export type CompetitionSportsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SportWhere>;
};


export type CompetitionSportsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CompetitionSportsConnectionSort>>;
  where?: InputMaybe<CompetitionSportsConnectionWhere>;
};

export type CompetitionAggregateSelection = {
  __typename?: 'CompetitionAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type CompetitionAthleteAthletesAggregationSelection = {
  __typename?: 'CompetitionAthleteAthletesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CompetitionAthleteAthletesNodeAggregateSelection>;
};

export type CompetitionAthleteAthletesNodeAggregateSelection = {
  __typename?: 'CompetitionAthleteAthletesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNonNullable;
  givenName: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type CompetitionAthletesAggregateInput = {
  AND?: InputMaybe<Array<CompetitionAthletesAggregateInput>>;
  NOT?: InputMaybe<CompetitionAthletesAggregateInput>;
  OR?: InputMaybe<Array<CompetitionAthletesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CompetitionAthletesNodeAggregationWhereInput>;
};

export type CompetitionAthletesConnectFieldInput = {
  connect?: InputMaybe<Array<AthleteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AthleteConnectWhere>;
};

export type CompetitionAthletesConnectOrCreateFieldInput = {
  onCreate: CompetitionAthletesConnectOrCreateFieldInputOnCreate;
  where: AthleteConnectOrCreateWhere;
};

export type CompetitionAthletesConnectOrCreateFieldInputOnCreate = {
  node: AthleteOnCreateInput;
};

export type CompetitionAthletesConnection = {
  __typename?: 'CompetitionAthletesConnection';
  edges: Array<CompetitionAthletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CompetitionAthletesConnectionSort = {
  node?: InputMaybe<AthleteSort>;
};

export type CompetitionAthletesConnectionWhere = {
  AND?: InputMaybe<Array<CompetitionAthletesConnectionWhere>>;
  NOT?: InputMaybe<CompetitionAthletesConnectionWhere>;
  OR?: InputMaybe<Array<CompetitionAthletesConnectionWhere>>;
  node?: InputMaybe<AthleteWhere>;
};

export type CompetitionAthletesCreateFieldInput = {
  node: AthleteCreateInput;
};

export type CompetitionAthletesDeleteFieldInput = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<CompetitionAthletesConnectionWhere>;
};

export type CompetitionAthletesDisconnectFieldInput = {
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  where?: InputMaybe<CompetitionAthletesConnectionWhere>;
};

export type CompetitionAthletesFieldInput = {
  connect?: InputMaybe<Array<CompetitionAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompetitionAthletesCreateFieldInput>>;
};

export type CompetitionAthletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionAthletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionAthletesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CompetitionAthletesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  familyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CompetitionAthletesRelationship = {
  __typename?: 'CompetitionAthletesRelationship';
  cursor: Scalars['String']['output'];
  node: Athlete;
};

export type CompetitionAthletesUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
};

export type CompetitionAthletesUpdateFieldInput = {
  connect?: InputMaybe<Array<CompetitionAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompetitionAthletesCreateFieldInput>>;
  delete?: InputMaybe<Array<CompetitionAthletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompetitionAthletesDisconnectFieldInput>>;
  update?: InputMaybe<CompetitionAthletesUpdateConnectionInput>;
  where?: InputMaybe<CompetitionAthletesConnectionWhere>;
};

export type CompetitionCityAggregateInput = {
  AND?: InputMaybe<Array<CompetitionCityAggregateInput>>;
  NOT?: InputMaybe<CompetitionCityAggregateInput>;
  OR?: InputMaybe<Array<CompetitionCityAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CompetitionCityNodeAggregationWhereInput>;
};

export type CompetitionCityCityAggregationSelection = {
  __typename?: 'CompetitionCityCityAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CompetitionCityCityNodeAggregateSelection>;
};

export type CompetitionCityCityNodeAggregateSelection = {
  __typename?: 'CompetitionCityCityNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type CompetitionCityConnectFieldInput = {
  connect?: InputMaybe<CityConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CityConnectWhere>;
};

export type CompetitionCityConnectOrCreateFieldInput = {
  onCreate: CompetitionCityConnectOrCreateFieldInputOnCreate;
  where: CityConnectOrCreateWhere;
};

export type CompetitionCityConnectOrCreateFieldInputOnCreate = {
  node: CityOnCreateInput;
};

export type CompetitionCityConnection = {
  __typename?: 'CompetitionCityConnection';
  edges: Array<CompetitionCityRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CompetitionCityConnectionSort = {
  node?: InputMaybe<CitySort>;
};

export type CompetitionCityConnectionWhere = {
  AND?: InputMaybe<Array<CompetitionCityConnectionWhere>>;
  NOT?: InputMaybe<CompetitionCityConnectionWhere>;
  OR?: InputMaybe<Array<CompetitionCityConnectionWhere>>;
  node?: InputMaybe<CityWhere>;
};

export type CompetitionCityCreateFieldInput = {
  node: CityCreateInput;
};

export type CompetitionCityDeleteFieldInput = {
  delete?: InputMaybe<CityDeleteInput>;
  where?: InputMaybe<CompetitionCityConnectionWhere>;
};

export type CompetitionCityDisconnectFieldInput = {
  disconnect?: InputMaybe<CityDisconnectInput>;
  where?: InputMaybe<CompetitionCityConnectionWhere>;
};

export type CompetitionCityFieldInput = {
  connect?: InputMaybe<CompetitionCityConnectFieldInput>;
  connectOrCreate?: InputMaybe<CompetitionCityConnectOrCreateFieldInput>;
  create?: InputMaybe<CompetitionCityCreateFieldInput>;
};

export type CompetitionCityNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionCityNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionCityNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CompetitionCityNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CompetitionCityRelationship = {
  __typename?: 'CompetitionCityRelationship';
  cursor: Scalars['String']['output'];
  node: City;
};

export type CompetitionCityUpdateConnectionInput = {
  node?: InputMaybe<CityUpdateInput>;
};

export type CompetitionCityUpdateFieldInput = {
  connect?: InputMaybe<CompetitionCityConnectFieldInput>;
  connectOrCreate?: InputMaybe<CompetitionCityConnectOrCreateFieldInput>;
  create?: InputMaybe<CompetitionCityCreateFieldInput>;
  delete?: InputMaybe<CompetitionCityDeleteFieldInput>;
  disconnect?: InputMaybe<CompetitionCityDisconnectFieldInput>;
  update?: InputMaybe<CompetitionCityUpdateConnectionInput>;
  where?: InputMaybe<CompetitionCityConnectionWhere>;
};

export type CompetitionConnectInput = {
  athletes?: InputMaybe<Array<CompetitionAthletesConnectFieldInput>>;
  city?: InputMaybe<CompetitionCityConnectFieldInput>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesConnectFieldInput>>;
  events?: InputMaybe<Array<CompetitionEventsConnectFieldInput>>;
  sports?: InputMaybe<Array<CompetitionSportsConnectFieldInput>>;
};

export type CompetitionConnectOrCreateInput = {
  athletes?: InputMaybe<Array<CompetitionAthletesConnectOrCreateFieldInput>>;
  city?: InputMaybe<CompetitionCityConnectOrCreateFieldInput>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesConnectOrCreateFieldInput>>;
  events?: InputMaybe<Array<CompetitionEventsConnectOrCreateFieldInput>>;
  sports?: InputMaybe<Array<CompetitionSportsConnectOrCreateFieldInput>>;
};

export type CompetitionConnectOrCreateWhere = {
  node: CompetitionUniqueWhere;
};

export type CompetitionConnectWhere = {
  node: CompetitionWhere;
};

export type CompetitionCreateInput = {
  athletes?: InputMaybe<CompetitionAthletesFieldInput>;
  city?: InputMaybe<CompetitionCityFieldInput>;
  dataSources?: InputMaybe<CompetitionDataSourcesFieldInput>;
  date: Scalars['Date']['input'];
  events?: InputMaybe<CompetitionEventsFieldInput>;
  name: Scalars['String']['input'];
  sports?: InputMaybe<CompetitionSportsFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type CompetitionDataSourceDataSourcesAggregationSelection = {
  __typename?: 'CompetitionDataSourceDataSourcesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CompetitionDataSourceDataSourcesNodeAggregateSelection>;
};

export type CompetitionDataSourceDataSourcesNodeAggregateSelection = {
  __typename?: 'CompetitionDataSourceDataSourcesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type CompetitionDataSourcesAggregateInput = {
  AND?: InputMaybe<Array<CompetitionDataSourcesAggregateInput>>;
  NOT?: InputMaybe<CompetitionDataSourcesAggregateInput>;
  OR?: InputMaybe<Array<CompetitionDataSourcesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CompetitionDataSourcesNodeAggregationWhereInput>;
};

export type CompetitionDataSourcesConnectFieldInput = {
  connect?: InputMaybe<Array<DataSourceConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<DataSourceConnectWhere>;
};

export type CompetitionDataSourcesConnectOrCreateFieldInput = {
  onCreate: CompetitionDataSourcesConnectOrCreateFieldInputOnCreate;
  where: DataSourceConnectOrCreateWhere;
};

export type CompetitionDataSourcesConnectOrCreateFieldInputOnCreate = {
  node: DataSourceOnCreateInput;
};

export type CompetitionDataSourcesConnection = {
  __typename?: 'CompetitionDataSourcesConnection';
  edges: Array<CompetitionDataSourcesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CompetitionDataSourcesConnectionSort = {
  node?: InputMaybe<DataSourceSort>;
};

export type CompetitionDataSourcesConnectionWhere = {
  AND?: InputMaybe<Array<CompetitionDataSourcesConnectionWhere>>;
  NOT?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  OR?: InputMaybe<Array<CompetitionDataSourcesConnectionWhere>>;
  node?: InputMaybe<DataSourceWhere>;
};

export type CompetitionDataSourcesCreateFieldInput = {
  node: DataSourceCreateInput;
};

export type CompetitionDataSourcesDeleteFieldInput = {
  delete?: InputMaybe<DataSourceDeleteInput>;
  where?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
};

export type CompetitionDataSourcesDisconnectFieldInput = {
  disconnect?: InputMaybe<DataSourceDisconnectInput>;
  where?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
};

export type CompetitionDataSourcesFieldInput = {
  connect?: InputMaybe<Array<CompetitionDataSourcesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionDataSourcesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompetitionDataSourcesCreateFieldInput>>;
};

export type CompetitionDataSourcesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionDataSourcesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionDataSourcesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CompetitionDataSourcesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CompetitionDataSourcesRelationship = {
  __typename?: 'CompetitionDataSourcesRelationship';
  cursor: Scalars['String']['output'];
  node: DataSource;
};

export type CompetitionDataSourcesUpdateConnectionInput = {
  node?: InputMaybe<DataSourceUpdateInput>;
};

export type CompetitionDataSourcesUpdateFieldInput = {
  connect?: InputMaybe<Array<CompetitionDataSourcesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionDataSourcesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompetitionDataSourcesCreateFieldInput>>;
  delete?: InputMaybe<Array<CompetitionDataSourcesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompetitionDataSourcesDisconnectFieldInput>>;
  update?: InputMaybe<CompetitionDataSourcesUpdateConnectionInput>;
  where?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
};

export type CompetitionDeleteInput = {
  athletes?: InputMaybe<Array<CompetitionAthletesDeleteFieldInput>>;
  city?: InputMaybe<CompetitionCityDeleteFieldInput>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesDeleteFieldInput>>;
  events?: InputMaybe<Array<CompetitionEventsDeleteFieldInput>>;
  sports?: InputMaybe<Array<CompetitionSportsDeleteFieldInput>>;
};

export type CompetitionDisconnectInput = {
  athletes?: InputMaybe<Array<CompetitionAthletesDisconnectFieldInput>>;
  city?: InputMaybe<CompetitionCityDisconnectFieldInput>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesDisconnectFieldInput>>;
  events?: InputMaybe<Array<CompetitionEventsDisconnectFieldInput>>;
  sports?: InputMaybe<Array<CompetitionSportsDisconnectFieldInput>>;
};

export type CompetitionEdge = {
  __typename?: 'CompetitionEdge';
  cursor: Scalars['String']['output'];
  node: Competition;
};

export type CompetitionEventEventsAggregationSelection = {
  __typename?: 'CompetitionEventEventsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CompetitionEventEventsNodeAggregateSelection>;
};

export type CompetitionEventEventsNodeAggregateSelection = {
  __typename?: 'CompetitionEventEventsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type CompetitionEventsAggregateInput = {
  AND?: InputMaybe<Array<CompetitionEventsAggregateInput>>;
  NOT?: InputMaybe<CompetitionEventsAggregateInput>;
  OR?: InputMaybe<Array<CompetitionEventsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CompetitionEventsNodeAggregationWhereInput>;
};

export type CompetitionEventsConnectFieldInput = {
  connect?: InputMaybe<Array<EventConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<EventConnectWhere>;
};

export type CompetitionEventsConnectOrCreateFieldInput = {
  onCreate: CompetitionEventsConnectOrCreateFieldInputOnCreate;
  where: EventConnectOrCreateWhere;
};

export type CompetitionEventsConnectOrCreateFieldInputOnCreate = {
  node: EventOnCreateInput;
};

export type CompetitionEventsConnection = {
  __typename?: 'CompetitionEventsConnection';
  edges: Array<CompetitionEventsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CompetitionEventsConnectionSort = {
  node?: InputMaybe<EventSort>;
};

export type CompetitionEventsConnectionWhere = {
  AND?: InputMaybe<Array<CompetitionEventsConnectionWhere>>;
  NOT?: InputMaybe<CompetitionEventsConnectionWhere>;
  OR?: InputMaybe<Array<CompetitionEventsConnectionWhere>>;
  node?: InputMaybe<EventWhere>;
};

export type CompetitionEventsCreateFieldInput = {
  node: EventCreateInput;
};

export type CompetitionEventsDeleteFieldInput = {
  delete?: InputMaybe<EventDeleteInput>;
  where?: InputMaybe<CompetitionEventsConnectionWhere>;
};

export type CompetitionEventsDisconnectFieldInput = {
  disconnect?: InputMaybe<EventDisconnectInput>;
  where?: InputMaybe<CompetitionEventsConnectionWhere>;
};

export type CompetitionEventsFieldInput = {
  connect?: InputMaybe<Array<CompetitionEventsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionEventsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompetitionEventsCreateFieldInput>>;
};

export type CompetitionEventsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionEventsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionEventsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CompetitionEventsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CompetitionEventsRelationship = {
  __typename?: 'CompetitionEventsRelationship';
  cursor: Scalars['String']['output'];
  node: Event;
};

export type CompetitionEventsUpdateConnectionInput = {
  node?: InputMaybe<EventUpdateInput>;
};

export type CompetitionEventsUpdateFieldInput = {
  connect?: InputMaybe<Array<CompetitionEventsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionEventsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompetitionEventsCreateFieldInput>>;
  delete?: InputMaybe<Array<CompetitionEventsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompetitionEventsDisconnectFieldInput>>;
  update?: InputMaybe<CompetitionEventsUpdateConnectionInput>;
  where?: InputMaybe<CompetitionEventsConnectionWhere>;
};

export type CompetitionOnCreateInput = {
  date: Scalars['Date']['input'];
  name: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type CompetitionOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CompetitionSort objects to sort Competitions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CompetitionSort>>;
};

export type CompetitionRelationInput = {
  athletes?: InputMaybe<Array<CompetitionAthletesCreateFieldInput>>;
  city?: InputMaybe<CompetitionCityCreateFieldInput>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesCreateFieldInput>>;
  events?: InputMaybe<Array<CompetitionEventsCreateFieldInput>>;
  sports?: InputMaybe<Array<CompetitionSportsCreateFieldInput>>;
};

/** Fields to sort Competitions by. The order in which sorts are applied is not guaranteed when specifying many fields in one CompetitionSort object. */
export type CompetitionSort = {
  createdAt?: InputMaybe<SortDirection>;
  date?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type CompetitionSportSportsAggregationSelection = {
  __typename?: 'CompetitionSportSportsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CompetitionSportSportsNodeAggregateSelection>;
};

export type CompetitionSportSportsNodeAggregateSelection = {
  __typename?: 'CompetitionSportSportsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type CompetitionSportsAggregateInput = {
  AND?: InputMaybe<Array<CompetitionSportsAggregateInput>>;
  NOT?: InputMaybe<CompetitionSportsAggregateInput>;
  OR?: InputMaybe<Array<CompetitionSportsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CompetitionSportsNodeAggregationWhereInput>;
};

export type CompetitionSportsConnectFieldInput = {
  connect?: InputMaybe<Array<SportConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SportConnectWhere>;
};

export type CompetitionSportsConnectOrCreateFieldInput = {
  onCreate: CompetitionSportsConnectOrCreateFieldInputOnCreate;
  where: SportConnectOrCreateWhere;
};

export type CompetitionSportsConnectOrCreateFieldInputOnCreate = {
  node: SportOnCreateInput;
};

export type CompetitionSportsConnection = {
  __typename?: 'CompetitionSportsConnection';
  edges: Array<CompetitionSportsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CompetitionSportsConnectionSort = {
  node?: InputMaybe<SportSort>;
};

export type CompetitionSportsConnectionWhere = {
  AND?: InputMaybe<Array<CompetitionSportsConnectionWhere>>;
  NOT?: InputMaybe<CompetitionSportsConnectionWhere>;
  OR?: InputMaybe<Array<CompetitionSportsConnectionWhere>>;
  node?: InputMaybe<SportWhere>;
};

export type CompetitionSportsCreateFieldInput = {
  node: SportCreateInput;
};

export type CompetitionSportsDeleteFieldInput = {
  delete?: InputMaybe<SportDeleteInput>;
  where?: InputMaybe<CompetitionSportsConnectionWhere>;
};

export type CompetitionSportsDisconnectFieldInput = {
  disconnect?: InputMaybe<SportDisconnectInput>;
  where?: InputMaybe<CompetitionSportsConnectionWhere>;
};

export type CompetitionSportsFieldInput = {
  connect?: InputMaybe<Array<CompetitionSportsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionSportsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompetitionSportsCreateFieldInput>>;
};

export type CompetitionSportsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionSportsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionSportsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CompetitionSportsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CompetitionSportsRelationship = {
  __typename?: 'CompetitionSportsRelationship';
  cursor: Scalars['String']['output'];
  node: Sport;
};

export type CompetitionSportsUpdateConnectionInput = {
  node?: InputMaybe<SportUpdateInput>;
};

export type CompetitionSportsUpdateFieldInput = {
  connect?: InputMaybe<Array<CompetitionSportsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionSportsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompetitionSportsCreateFieldInput>>;
  delete?: InputMaybe<Array<CompetitionSportsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompetitionSportsDisconnectFieldInput>>;
  update?: InputMaybe<CompetitionSportsUpdateConnectionInput>;
  where?: InputMaybe<CompetitionSportsConnectionWhere>;
};

export type CompetitionUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CompetitionUpdateInput = {
  athletes?: InputMaybe<Array<CompetitionAthletesUpdateFieldInput>>;
  city?: InputMaybe<CompetitionCityUpdateFieldInput>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesUpdateFieldInput>>;
  date?: InputMaybe<Scalars['Date']['input']>;
  events?: InputMaybe<Array<CompetitionEventsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  sports?: InputMaybe<Array<CompetitionSportsUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CompetitionWhere = {
  AND?: InputMaybe<Array<CompetitionWhere>>;
  NOT?: InputMaybe<CompetitionWhere>;
  OR?: InputMaybe<Array<CompetitionWhere>>;
  athletesAggregate?: InputMaybe<CompetitionAthletesAggregateInput>;
  /** Return Competitions where all of the related CompetitionAthletesConnections match this filter */
  athletesConnection_ALL?: InputMaybe<CompetitionAthletesConnectionWhere>;
  /** Return Competitions where none of the related CompetitionAthletesConnections match this filter */
  athletesConnection_NONE?: InputMaybe<CompetitionAthletesConnectionWhere>;
  /** Return Competitions where one of the related CompetitionAthletesConnections match this filter */
  athletesConnection_SINGLE?: InputMaybe<CompetitionAthletesConnectionWhere>;
  /** Return Competitions where some of the related CompetitionAthletesConnections match this filter */
  athletesConnection_SOME?: InputMaybe<CompetitionAthletesConnectionWhere>;
  /** Return Competitions where all of the related Athletes match this filter */
  athletes_ALL?: InputMaybe<AthleteWhere>;
  /** Return Competitions where none of the related Athletes match this filter */
  athletes_NONE?: InputMaybe<AthleteWhere>;
  /** Return Competitions where one of the related Athletes match this filter */
  athletes_SINGLE?: InputMaybe<AthleteWhere>;
  /** Return Competitions where some of the related Athletes match this filter */
  athletes_SOME?: InputMaybe<AthleteWhere>;
  city?: InputMaybe<CityWhere>;
  cityAggregate?: InputMaybe<CompetitionCityAggregateInput>;
  cityConnection?: InputMaybe<CompetitionCityConnectionWhere>;
  cityConnection_NOT?: InputMaybe<CompetitionCityConnectionWhere>;
  city_NOT?: InputMaybe<CityWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dataSourcesAggregate?: InputMaybe<CompetitionDataSourcesAggregateInput>;
  /** Return Competitions where all of the related CompetitionDataSourcesConnections match this filter */
  dataSourcesConnection_ALL?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  /** Return Competitions where none of the related CompetitionDataSourcesConnections match this filter */
  dataSourcesConnection_NONE?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  /** Return Competitions where one of the related CompetitionDataSourcesConnections match this filter */
  dataSourcesConnection_SINGLE?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  /** Return Competitions where some of the related CompetitionDataSourcesConnections match this filter */
  dataSourcesConnection_SOME?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  /** Return Competitions where all of the related DataSources match this filter */
  dataSources_ALL?: InputMaybe<DataSourceWhere>;
  /** Return Competitions where none of the related DataSources match this filter */
  dataSources_NONE?: InputMaybe<DataSourceWhere>;
  /** Return Competitions where one of the related DataSources match this filter */
  dataSources_SINGLE?: InputMaybe<DataSourceWhere>;
  /** Return Competitions where some of the related DataSources match this filter */
  dataSources_SOME?: InputMaybe<DataSourceWhere>;
  date?: InputMaybe<Scalars['Date']['input']>;
  date_GT?: InputMaybe<Scalars['Date']['input']>;
  date_GTE?: InputMaybe<Scalars['Date']['input']>;
  date_IN?: InputMaybe<Array<Scalars['Date']['input']>>;
  date_LT?: InputMaybe<Scalars['Date']['input']>;
  date_LTE?: InputMaybe<Scalars['Date']['input']>;
  eventsAggregate?: InputMaybe<CompetitionEventsAggregateInput>;
  /** Return Competitions where all of the related CompetitionEventsConnections match this filter */
  eventsConnection_ALL?: InputMaybe<CompetitionEventsConnectionWhere>;
  /** Return Competitions where none of the related CompetitionEventsConnections match this filter */
  eventsConnection_NONE?: InputMaybe<CompetitionEventsConnectionWhere>;
  /** Return Competitions where one of the related CompetitionEventsConnections match this filter */
  eventsConnection_SINGLE?: InputMaybe<CompetitionEventsConnectionWhere>;
  /** Return Competitions where some of the related CompetitionEventsConnections match this filter */
  eventsConnection_SOME?: InputMaybe<CompetitionEventsConnectionWhere>;
  /** Return Competitions where all of the related Events match this filter */
  events_ALL?: InputMaybe<EventWhere>;
  /** Return Competitions where none of the related Events match this filter */
  events_NONE?: InputMaybe<EventWhere>;
  /** Return Competitions where one of the related Events match this filter */
  events_SINGLE?: InputMaybe<EventWhere>;
  /** Return Competitions where some of the related Events match this filter */
  events_SOME?: InputMaybe<EventWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  sportsAggregate?: InputMaybe<CompetitionSportsAggregateInput>;
  /** Return Competitions where all of the related CompetitionSportsConnections match this filter */
  sportsConnection_ALL?: InputMaybe<CompetitionSportsConnectionWhere>;
  /** Return Competitions where none of the related CompetitionSportsConnections match this filter */
  sportsConnection_NONE?: InputMaybe<CompetitionSportsConnectionWhere>;
  /** Return Competitions where one of the related CompetitionSportsConnections match this filter */
  sportsConnection_SINGLE?: InputMaybe<CompetitionSportsConnectionWhere>;
  /** Return Competitions where some of the related CompetitionSportsConnections match this filter */
  sportsConnection_SOME?: InputMaybe<CompetitionSportsConnectionWhere>;
  /** Return Competitions where all of the related Sports match this filter */
  sports_ALL?: InputMaybe<SportWhere>;
  /** Return Competitions where none of the related Sports match this filter */
  sports_NONE?: InputMaybe<SportWhere>;
  /** Return Competitions where one of the related Sports match this filter */
  sports_SINGLE?: InputMaybe<SportWhere>;
  /** Return Competitions where some of the related Sports match this filter */
  sports_SOME?: InputMaybe<SportWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CompetitionsConnection = {
  __typename?: 'CompetitionsConnection';
  edges: Array<CompetitionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CreateAthletesMutationResponse = {
  __typename?: 'CreateAthletesMutationResponse';
  athletes: Array<Athlete>;
  info: CreateInfo;
};

export type CreateAttemptsMutationResponse = {
  __typename?: 'CreateAttemptsMutationResponse';
  attempts: Array<Attempt>;
  info: CreateInfo;
};

export type CreateCitiesMutationResponse = {
  __typename?: 'CreateCitiesMutationResponse';
  cities: Array<City>;
  info: CreateInfo;
};

export type CreateCompetitionsMutationResponse = {
  __typename?: 'CreateCompetitionsMutationResponse';
  competitions: Array<Competition>;
  info: CreateInfo;
};

export type CreateDataSourcesMutationResponse = {
  __typename?: 'CreateDataSourcesMutationResponse';
  dataSources: Array<DataSource>;
  info: CreateInfo;
};

export type CreateEventsMutationResponse = {
  __typename?: 'CreateEventsMutationResponse';
  events: Array<Event>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateNationsMutationResponse = {
  __typename?: 'CreateNationsMutationResponse';
  info: CreateInfo;
  nations: Array<Nation>;
};

export type CreateSportsMutationResponse = {
  __typename?: 'CreateSportsMutationResponse';
  info: CreateInfo;
  sports: Array<Sport>;
};

export type DataSource = {
  __typename?: 'DataSource';
  athletes: Array<Athlete>;
  athletesAggregate?: Maybe<DataSourceAthleteAthletesAggregationSelection>;
  athletesConnection: DataSourceAthletesConnection;
  competitions: Array<Competition>;
  competitionsAggregate?: Maybe<DataSourceCompetitionCompetitionsAggregationSelection>;
  competitionsConnection: DataSourceCompetitionsConnection;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};


export type DataSourceAthletesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


export type DataSourceAthletesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AthleteWhere>;
};


export type DataSourceAthletesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DataSourceAthletesConnectionSort>>;
  where?: InputMaybe<DataSourceAthletesConnectionWhere>;
};


export type DataSourceCompetitionsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CompetitionOptions>;
  where?: InputMaybe<CompetitionWhere>;
};


export type DataSourceCompetitionsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CompetitionWhere>;
};


export type DataSourceCompetitionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DataSourceCompetitionsConnectionSort>>;
  where?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
};

export type DataSourceAggregateSelection = {
  __typename?: 'DataSourceAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type DataSourceAthleteAthletesAggregationSelection = {
  __typename?: 'DataSourceAthleteAthletesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<DataSourceAthleteAthletesNodeAggregateSelection>;
};

export type DataSourceAthleteAthletesNodeAggregateSelection = {
  __typename?: 'DataSourceAthleteAthletesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNonNullable;
  givenName: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type DataSourceAthletesAggregateInput = {
  AND?: InputMaybe<Array<DataSourceAthletesAggregateInput>>;
  NOT?: InputMaybe<DataSourceAthletesAggregateInput>;
  OR?: InputMaybe<Array<DataSourceAthletesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DataSourceAthletesNodeAggregationWhereInput>;
};

export type DataSourceAthletesConnectFieldInput = {
  connect?: InputMaybe<Array<AthleteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AthleteConnectWhere>;
};

export type DataSourceAthletesConnectOrCreateFieldInput = {
  onCreate: DataSourceAthletesConnectOrCreateFieldInputOnCreate;
  where: AthleteConnectOrCreateWhere;
};

export type DataSourceAthletesConnectOrCreateFieldInputOnCreate = {
  node: AthleteOnCreateInput;
};

export type DataSourceAthletesConnection = {
  __typename?: 'DataSourceAthletesConnection';
  edges: Array<DataSourceAthletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DataSourceAthletesConnectionSort = {
  node?: InputMaybe<AthleteSort>;
};

export type DataSourceAthletesConnectionWhere = {
  AND?: InputMaybe<Array<DataSourceAthletesConnectionWhere>>;
  NOT?: InputMaybe<DataSourceAthletesConnectionWhere>;
  OR?: InputMaybe<Array<DataSourceAthletesConnectionWhere>>;
  node?: InputMaybe<AthleteWhere>;
};

export type DataSourceAthletesCreateFieldInput = {
  node: AthleteCreateInput;
};

export type DataSourceAthletesDeleteFieldInput = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<DataSourceAthletesConnectionWhere>;
};

export type DataSourceAthletesDisconnectFieldInput = {
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  where?: InputMaybe<DataSourceAthletesConnectionWhere>;
};

export type DataSourceAthletesFieldInput = {
  connect?: InputMaybe<Array<DataSourceAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DataSourceAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DataSourceAthletesCreateFieldInput>>;
};

export type DataSourceAthletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataSourceAthletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DataSourceAthletesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DataSourceAthletesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  familyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DataSourceAthletesRelationship = {
  __typename?: 'DataSourceAthletesRelationship';
  cursor: Scalars['String']['output'];
  node: Athlete;
};

export type DataSourceAthletesUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
};

export type DataSourceAthletesUpdateFieldInput = {
  connect?: InputMaybe<Array<DataSourceAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DataSourceAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DataSourceAthletesCreateFieldInput>>;
  delete?: InputMaybe<Array<DataSourceAthletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DataSourceAthletesDisconnectFieldInput>>;
  update?: InputMaybe<DataSourceAthletesUpdateConnectionInput>;
  where?: InputMaybe<DataSourceAthletesConnectionWhere>;
};

export type DataSourceCompetitionCompetitionsAggregationSelection = {
  __typename?: 'DataSourceCompetitionCompetitionsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<DataSourceCompetitionCompetitionsNodeAggregateSelection>;
};

export type DataSourceCompetitionCompetitionsNodeAggregateSelection = {
  __typename?: 'DataSourceCompetitionCompetitionsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type DataSourceCompetitionsAggregateInput = {
  AND?: InputMaybe<Array<DataSourceCompetitionsAggregateInput>>;
  NOT?: InputMaybe<DataSourceCompetitionsAggregateInput>;
  OR?: InputMaybe<Array<DataSourceCompetitionsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DataSourceCompetitionsNodeAggregationWhereInput>;
};

export type DataSourceCompetitionsConnectFieldInput = {
  connect?: InputMaybe<Array<CompetitionConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CompetitionConnectWhere>;
};

export type DataSourceCompetitionsConnectOrCreateFieldInput = {
  onCreate: DataSourceCompetitionsConnectOrCreateFieldInputOnCreate;
  where: CompetitionConnectOrCreateWhere;
};

export type DataSourceCompetitionsConnectOrCreateFieldInputOnCreate = {
  node: CompetitionOnCreateInput;
};

export type DataSourceCompetitionsConnection = {
  __typename?: 'DataSourceCompetitionsConnection';
  edges: Array<DataSourceCompetitionsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DataSourceCompetitionsConnectionSort = {
  node?: InputMaybe<CompetitionSort>;
};

export type DataSourceCompetitionsConnectionWhere = {
  AND?: InputMaybe<Array<DataSourceCompetitionsConnectionWhere>>;
  NOT?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  OR?: InputMaybe<Array<DataSourceCompetitionsConnectionWhere>>;
  node?: InputMaybe<CompetitionWhere>;
};

export type DataSourceCompetitionsCreateFieldInput = {
  node: CompetitionCreateInput;
};

export type DataSourceCompetitionsDeleteFieldInput = {
  delete?: InputMaybe<CompetitionDeleteInput>;
  where?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
};

export type DataSourceCompetitionsDisconnectFieldInput = {
  disconnect?: InputMaybe<CompetitionDisconnectInput>;
  where?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
};

export type DataSourceCompetitionsFieldInput = {
  connect?: InputMaybe<Array<DataSourceCompetitionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DataSourceCompetitionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DataSourceCompetitionsCreateFieldInput>>;
};

export type DataSourceCompetitionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataSourceCompetitionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DataSourceCompetitionsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DataSourceCompetitionsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DataSourceCompetitionsRelationship = {
  __typename?: 'DataSourceCompetitionsRelationship';
  cursor: Scalars['String']['output'];
  node: Competition;
};

export type DataSourceCompetitionsUpdateConnectionInput = {
  node?: InputMaybe<CompetitionUpdateInput>;
};

export type DataSourceCompetitionsUpdateFieldInput = {
  connect?: InputMaybe<Array<DataSourceCompetitionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DataSourceCompetitionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DataSourceCompetitionsCreateFieldInput>>;
  delete?: InputMaybe<Array<DataSourceCompetitionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DataSourceCompetitionsDisconnectFieldInput>>;
  update?: InputMaybe<DataSourceCompetitionsUpdateConnectionInput>;
  where?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
};

export type DataSourceConnectInput = {
  athletes?: InputMaybe<Array<DataSourceAthletesConnectFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsConnectFieldInput>>;
};

export type DataSourceConnectOrCreateInput = {
  athletes?: InputMaybe<Array<DataSourceAthletesConnectOrCreateFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsConnectOrCreateFieldInput>>;
};

export type DataSourceConnectOrCreateWhere = {
  node: DataSourceUniqueWhere;
};

export type DataSourceConnectWhere = {
  node: DataSourceWhere;
};

export type DataSourceCreateInput = {
  athletes?: InputMaybe<DataSourceAthletesFieldInput>;
  competitions?: InputMaybe<DataSourceCompetitionsFieldInput>;
  name: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type DataSourceDeleteInput = {
  athletes?: InputMaybe<Array<DataSourceAthletesDeleteFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsDeleteFieldInput>>;
};

export type DataSourceDisconnectInput = {
  athletes?: InputMaybe<Array<DataSourceAthletesDisconnectFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsDisconnectFieldInput>>;
};

export type DataSourceEdge = {
  __typename?: 'DataSourceEdge';
  cursor: Scalars['String']['output'];
  node: DataSource;
};

export type DataSourceOnCreateInput = {
  name: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type DataSourceOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more DataSourceSort objects to sort DataSources by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DataSourceSort>>;
};

export type DataSourceRelationInput = {
  athletes?: InputMaybe<Array<DataSourceAthletesCreateFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsCreateFieldInput>>;
};

/** Fields to sort DataSources by. The order in which sorts are applied is not guaranteed when specifying many fields in one DataSourceSort object. */
export type DataSourceSort = {
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type DataSourceUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DataSourceUpdateInput = {
  athletes?: InputMaybe<Array<DataSourceAthletesUpdateFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataSourceWhere = {
  AND?: InputMaybe<Array<DataSourceWhere>>;
  NOT?: InputMaybe<DataSourceWhere>;
  OR?: InputMaybe<Array<DataSourceWhere>>;
  athletesAggregate?: InputMaybe<DataSourceAthletesAggregateInput>;
  /** Return DataSources where all of the related DataSourceAthletesConnections match this filter */
  athletesConnection_ALL?: InputMaybe<DataSourceAthletesConnectionWhere>;
  /** Return DataSources where none of the related DataSourceAthletesConnections match this filter */
  athletesConnection_NONE?: InputMaybe<DataSourceAthletesConnectionWhere>;
  /** Return DataSources where one of the related DataSourceAthletesConnections match this filter */
  athletesConnection_SINGLE?: InputMaybe<DataSourceAthletesConnectionWhere>;
  /** Return DataSources where some of the related DataSourceAthletesConnections match this filter */
  athletesConnection_SOME?: InputMaybe<DataSourceAthletesConnectionWhere>;
  /** Return DataSources where all of the related Athletes match this filter */
  athletes_ALL?: InputMaybe<AthleteWhere>;
  /** Return DataSources where none of the related Athletes match this filter */
  athletes_NONE?: InputMaybe<AthleteWhere>;
  /** Return DataSources where one of the related Athletes match this filter */
  athletes_SINGLE?: InputMaybe<AthleteWhere>;
  /** Return DataSources where some of the related Athletes match this filter */
  athletes_SOME?: InputMaybe<AthleteWhere>;
  competitionsAggregate?: InputMaybe<DataSourceCompetitionsAggregateInput>;
  /** Return DataSources where all of the related DataSourceCompetitionsConnections match this filter */
  competitionsConnection_ALL?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  /** Return DataSources where none of the related DataSourceCompetitionsConnections match this filter */
  competitionsConnection_NONE?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  /** Return DataSources where one of the related DataSourceCompetitionsConnections match this filter */
  competitionsConnection_SINGLE?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  /** Return DataSources where some of the related DataSourceCompetitionsConnections match this filter */
  competitionsConnection_SOME?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  /** Return DataSources where all of the related Competitions match this filter */
  competitions_ALL?: InputMaybe<CompetitionWhere>;
  /** Return DataSources where none of the related Competitions match this filter */
  competitions_NONE?: InputMaybe<CompetitionWhere>;
  /** Return DataSources where one of the related Competitions match this filter */
  competitions_SINGLE?: InputMaybe<CompetitionWhere>;
  /** Return DataSources where some of the related Competitions match this filter */
  competitions_SOME?: InputMaybe<CompetitionWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataSourcesConnection = {
  __typename?: 'DataSourcesConnection';
  edges: Array<DataSourceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DateTimeAggregateSelectionNonNullable = {
  __typename?: 'DateTimeAggregateSelectionNonNullable';
  max: Scalars['DateTime']['output'];
  min: Scalars['DateTime']['output'];
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type Event = {
  __typename?: 'Event';
  athletes: Array<Athlete>;
  athletesAggregate?: Maybe<EventAthleteAthletesAggregationSelection>;
  athletesConnection: EventAthletesConnection;
  attempts: Array<Attempt>;
  attemptsAggregate?: Maybe<EventAttemptAttemptsAggregationSelection>;
  attemptsConnection: EventAttemptsConnection;
  class: Class;
  competition: Competition;
  competitionAggregate?: Maybe<EventCompetitionCompetitionAggregationSelection>;
  competitionConnection: EventCompetitionConnection;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};


export type EventAthletesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


export type EventAthletesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AthleteWhere>;
};


export type EventAthletesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EventAthletesConnectionSort>>;
  where?: InputMaybe<EventAthletesConnectionWhere>;
};


export type EventAttemptsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AttemptOptions>;
  where?: InputMaybe<AttemptWhere>;
};


export type EventAttemptsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AttemptWhere>;
};


export type EventAttemptsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EventAttemptsConnectionSort>>;
  where?: InputMaybe<EventAttemptsConnectionWhere>;
};


export type EventCompetitionArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CompetitionOptions>;
  where?: InputMaybe<CompetitionWhere>;
};


export type EventCompetitionAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CompetitionWhere>;
};


export type EventCompetitionConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EventCompetitionConnectionSort>>;
  where?: InputMaybe<EventCompetitionConnectionWhere>;
};

export type EventAggregateSelection = {
  __typename?: 'EventAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type EventAthleteAthletesAggregationSelection = {
  __typename?: 'EventAthleteAthletesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<EventAthleteAthletesNodeAggregateSelection>;
};

export type EventAthleteAthletesNodeAggregateSelection = {
  __typename?: 'EventAthleteAthletesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNonNullable;
  givenName: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type EventAthletesAggregateInput = {
  AND?: InputMaybe<Array<EventAthletesAggregateInput>>;
  NOT?: InputMaybe<EventAthletesAggregateInput>;
  OR?: InputMaybe<Array<EventAthletesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<EventAthletesNodeAggregationWhereInput>;
};

export type EventAthletesConnectFieldInput = {
  connect?: InputMaybe<Array<AthleteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AthleteConnectWhere>;
};

export type EventAthletesConnectOrCreateFieldInput = {
  onCreate: EventAthletesConnectOrCreateFieldInputOnCreate;
  where: AthleteConnectOrCreateWhere;
};

export type EventAthletesConnectOrCreateFieldInputOnCreate = {
  node: AthleteOnCreateInput;
};

export type EventAthletesConnection = {
  __typename?: 'EventAthletesConnection';
  edges: Array<EventAthletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type EventAthletesConnectionSort = {
  node?: InputMaybe<AthleteSort>;
};

export type EventAthletesConnectionWhere = {
  AND?: InputMaybe<Array<EventAthletesConnectionWhere>>;
  NOT?: InputMaybe<EventAthletesConnectionWhere>;
  OR?: InputMaybe<Array<EventAthletesConnectionWhere>>;
  node?: InputMaybe<AthleteWhere>;
};

export type EventAthletesCreateFieldInput = {
  node: AthleteCreateInput;
};

export type EventAthletesDeleteFieldInput = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<EventAthletesConnectionWhere>;
};

export type EventAthletesDisconnectFieldInput = {
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  where?: InputMaybe<EventAthletesConnectionWhere>;
};

export type EventAthletesFieldInput = {
  connect?: InputMaybe<Array<EventAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<EventAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<EventAthletesCreateFieldInput>>;
};

export type EventAthletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EventAthletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<EventAthletesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<EventAthletesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  familyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventAthletesRelationship = {
  __typename?: 'EventAthletesRelationship';
  cursor: Scalars['String']['output'];
  node: Athlete;
};

export type EventAthletesUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
};

export type EventAthletesUpdateFieldInput = {
  connect?: InputMaybe<Array<EventAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<EventAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<EventAthletesCreateFieldInput>>;
  delete?: InputMaybe<Array<EventAthletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<EventAthletesDisconnectFieldInput>>;
  update?: InputMaybe<EventAthletesUpdateConnectionInput>;
  where?: InputMaybe<EventAthletesConnectionWhere>;
};

export type EventAttemptAttemptsAggregationSelection = {
  __typename?: 'EventAttemptAttemptsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<EventAttemptAttemptsNodeAggregateSelection>;
};

export type EventAttemptAttemptsNodeAggregateSelection = {
  __typename?: 'EventAttemptAttemptsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
  weight: FloatAggregateSelectionNonNullable;
};

export type EventAttemptsAggregateInput = {
  AND?: InputMaybe<Array<EventAttemptsAggregateInput>>;
  NOT?: InputMaybe<EventAttemptsAggregateInput>;
  OR?: InputMaybe<Array<EventAttemptsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<EventAttemptsNodeAggregationWhereInput>;
};

export type EventAttemptsConnectFieldInput = {
  connect?: InputMaybe<Array<AttemptConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AttemptConnectWhere>;
};

export type EventAttemptsConnectOrCreateFieldInput = {
  onCreate: EventAttemptsConnectOrCreateFieldInputOnCreate;
  where: AttemptConnectOrCreateWhere;
};

export type EventAttemptsConnectOrCreateFieldInputOnCreate = {
  node: AttemptOnCreateInput;
};

export type EventAttemptsConnection = {
  __typename?: 'EventAttemptsConnection';
  edges: Array<EventAttemptsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type EventAttemptsConnectionSort = {
  node?: InputMaybe<AttemptSort>;
};

export type EventAttemptsConnectionWhere = {
  AND?: InputMaybe<Array<EventAttemptsConnectionWhere>>;
  NOT?: InputMaybe<EventAttemptsConnectionWhere>;
  OR?: InputMaybe<Array<EventAttemptsConnectionWhere>>;
  node?: InputMaybe<AttemptWhere>;
};

export type EventAttemptsCreateFieldInput = {
  node: AttemptCreateInput;
};

export type EventAttemptsDeleteFieldInput = {
  delete?: InputMaybe<AttemptDeleteInput>;
  where?: InputMaybe<EventAttemptsConnectionWhere>;
};

export type EventAttemptsDisconnectFieldInput = {
  disconnect?: InputMaybe<AttemptDisconnectInput>;
  where?: InputMaybe<EventAttemptsConnectionWhere>;
};

export type EventAttemptsFieldInput = {
  connect?: InputMaybe<Array<EventAttemptsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<EventAttemptsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<EventAttemptsCreateFieldInput>>;
};

export type EventAttemptsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EventAttemptsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<EventAttemptsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<EventAttemptsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  weight_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weight_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
};

export type EventAttemptsRelationship = {
  __typename?: 'EventAttemptsRelationship';
  cursor: Scalars['String']['output'];
  node: Attempt;
};

export type EventAttemptsUpdateConnectionInput = {
  node?: InputMaybe<AttemptUpdateInput>;
};

export type EventAttemptsUpdateFieldInput = {
  connect?: InputMaybe<Array<EventAttemptsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<EventAttemptsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<EventAttemptsCreateFieldInput>>;
  delete?: InputMaybe<Array<EventAttemptsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<EventAttemptsDisconnectFieldInput>>;
  update?: InputMaybe<EventAttemptsUpdateConnectionInput>;
  where?: InputMaybe<EventAttemptsConnectionWhere>;
};

export type EventCompetitionAggregateInput = {
  AND?: InputMaybe<Array<EventCompetitionAggregateInput>>;
  NOT?: InputMaybe<EventCompetitionAggregateInput>;
  OR?: InputMaybe<Array<EventCompetitionAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<EventCompetitionNodeAggregationWhereInput>;
};

export type EventCompetitionCompetitionAggregationSelection = {
  __typename?: 'EventCompetitionCompetitionAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<EventCompetitionCompetitionNodeAggregateSelection>;
};

export type EventCompetitionCompetitionNodeAggregateSelection = {
  __typename?: 'EventCompetitionCompetitionNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type EventCompetitionConnectFieldInput = {
  connect?: InputMaybe<CompetitionConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CompetitionConnectWhere>;
};

export type EventCompetitionConnectOrCreateFieldInput = {
  onCreate: EventCompetitionConnectOrCreateFieldInputOnCreate;
  where: CompetitionConnectOrCreateWhere;
};

export type EventCompetitionConnectOrCreateFieldInputOnCreate = {
  node: CompetitionOnCreateInput;
};

export type EventCompetitionConnection = {
  __typename?: 'EventCompetitionConnection';
  edges: Array<EventCompetitionRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type EventCompetitionConnectionSort = {
  node?: InputMaybe<CompetitionSort>;
};

export type EventCompetitionConnectionWhere = {
  AND?: InputMaybe<Array<EventCompetitionConnectionWhere>>;
  NOT?: InputMaybe<EventCompetitionConnectionWhere>;
  OR?: InputMaybe<Array<EventCompetitionConnectionWhere>>;
  node?: InputMaybe<CompetitionWhere>;
};

export type EventCompetitionCreateFieldInput = {
  node: CompetitionCreateInput;
};

export type EventCompetitionDeleteFieldInput = {
  delete?: InputMaybe<CompetitionDeleteInput>;
  where?: InputMaybe<EventCompetitionConnectionWhere>;
};

export type EventCompetitionDisconnectFieldInput = {
  disconnect?: InputMaybe<CompetitionDisconnectInput>;
  where?: InputMaybe<EventCompetitionConnectionWhere>;
};

export type EventCompetitionFieldInput = {
  connect?: InputMaybe<EventCompetitionConnectFieldInput>;
  connectOrCreate?: InputMaybe<EventCompetitionConnectOrCreateFieldInput>;
  create?: InputMaybe<EventCompetitionCreateFieldInput>;
};

export type EventCompetitionNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EventCompetitionNodeAggregationWhereInput>>;
  NOT?: InputMaybe<EventCompetitionNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<EventCompetitionNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventCompetitionRelationship = {
  __typename?: 'EventCompetitionRelationship';
  cursor: Scalars['String']['output'];
  node: Competition;
};

export type EventCompetitionUpdateConnectionInput = {
  node?: InputMaybe<CompetitionUpdateInput>;
};

export type EventCompetitionUpdateFieldInput = {
  connect?: InputMaybe<EventCompetitionConnectFieldInput>;
  connectOrCreate?: InputMaybe<EventCompetitionConnectOrCreateFieldInput>;
  create?: InputMaybe<EventCompetitionCreateFieldInput>;
  delete?: InputMaybe<EventCompetitionDeleteFieldInput>;
  disconnect?: InputMaybe<EventCompetitionDisconnectFieldInput>;
  update?: InputMaybe<EventCompetitionUpdateConnectionInput>;
  where?: InputMaybe<EventCompetitionConnectionWhere>;
};

export type EventConnectInput = {
  athletes?: InputMaybe<Array<EventAthletesConnectFieldInput>>;
  attempts?: InputMaybe<Array<EventAttemptsConnectFieldInput>>;
  competition?: InputMaybe<EventCompetitionConnectFieldInput>;
};

export type EventConnectOrCreateInput = {
  athletes?: InputMaybe<Array<EventAthletesConnectOrCreateFieldInput>>;
  attempts?: InputMaybe<Array<EventAttemptsConnectOrCreateFieldInput>>;
  competition?: InputMaybe<EventCompetitionConnectOrCreateFieldInput>;
};

export type EventConnectOrCreateWhere = {
  node: EventUniqueWhere;
};

export type EventConnectWhere = {
  node: EventWhere;
};

export type EventCreateInput = {
  athletes?: InputMaybe<EventAthletesFieldInput>;
  attempts?: InputMaybe<EventAttemptsFieldInput>;
  class: Class;
  competition?: InputMaybe<EventCompetitionFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type EventDeleteInput = {
  athletes?: InputMaybe<Array<EventAthletesDeleteFieldInput>>;
  attempts?: InputMaybe<Array<EventAttemptsDeleteFieldInput>>;
  competition?: InputMaybe<EventCompetitionDeleteFieldInput>;
};

export type EventDisconnectInput = {
  athletes?: InputMaybe<Array<EventAthletesDisconnectFieldInput>>;
  attempts?: InputMaybe<Array<EventAttemptsDisconnectFieldInput>>;
  competition?: InputMaybe<EventCompetitionDisconnectFieldInput>;
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['String']['output'];
  node: Event;
};

export type EventOnCreateInput = {
  class: Class;
  verified?: Scalars['Boolean']['input'];
};

export type EventOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more EventSort objects to sort Events by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<EventSort>>;
};

export type EventRelationInput = {
  athletes?: InputMaybe<Array<EventAthletesCreateFieldInput>>;
  attempts?: InputMaybe<Array<EventAttemptsCreateFieldInput>>;
  competition?: InputMaybe<EventCompetitionCreateFieldInput>;
};

/** Fields to sort Events by. The order in which sorts are applied is not guaranteed when specifying many fields in one EventSort object. */
export type EventSort = {
  class?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type EventUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EventUpdateInput = {
  athletes?: InputMaybe<Array<EventAthletesUpdateFieldInput>>;
  attempts?: InputMaybe<Array<EventAttemptsUpdateFieldInput>>;
  class?: InputMaybe<Class>;
  competition?: InputMaybe<EventCompetitionUpdateFieldInput>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventWhere = {
  AND?: InputMaybe<Array<EventWhere>>;
  NOT?: InputMaybe<EventWhere>;
  OR?: InputMaybe<Array<EventWhere>>;
  athletesAggregate?: InputMaybe<EventAthletesAggregateInput>;
  /** Return Events where all of the related EventAthletesConnections match this filter */
  athletesConnection_ALL?: InputMaybe<EventAthletesConnectionWhere>;
  /** Return Events where none of the related EventAthletesConnections match this filter */
  athletesConnection_NONE?: InputMaybe<EventAthletesConnectionWhere>;
  /** Return Events where one of the related EventAthletesConnections match this filter */
  athletesConnection_SINGLE?: InputMaybe<EventAthletesConnectionWhere>;
  /** Return Events where some of the related EventAthletesConnections match this filter */
  athletesConnection_SOME?: InputMaybe<EventAthletesConnectionWhere>;
  /** Return Events where all of the related Athletes match this filter */
  athletes_ALL?: InputMaybe<AthleteWhere>;
  /** Return Events where none of the related Athletes match this filter */
  athletes_NONE?: InputMaybe<AthleteWhere>;
  /** Return Events where one of the related Athletes match this filter */
  athletes_SINGLE?: InputMaybe<AthleteWhere>;
  /** Return Events where some of the related Athletes match this filter */
  athletes_SOME?: InputMaybe<AthleteWhere>;
  attemptsAggregate?: InputMaybe<EventAttemptsAggregateInput>;
  /** Return Events where all of the related EventAttemptsConnections match this filter */
  attemptsConnection_ALL?: InputMaybe<EventAttemptsConnectionWhere>;
  /** Return Events where none of the related EventAttemptsConnections match this filter */
  attemptsConnection_NONE?: InputMaybe<EventAttemptsConnectionWhere>;
  /** Return Events where one of the related EventAttemptsConnections match this filter */
  attemptsConnection_SINGLE?: InputMaybe<EventAttemptsConnectionWhere>;
  /** Return Events where some of the related EventAttemptsConnections match this filter */
  attemptsConnection_SOME?: InputMaybe<EventAttemptsConnectionWhere>;
  /** Return Events where all of the related Attempts match this filter */
  attempts_ALL?: InputMaybe<AttemptWhere>;
  /** Return Events where none of the related Attempts match this filter */
  attempts_NONE?: InputMaybe<AttemptWhere>;
  /** Return Events where one of the related Attempts match this filter */
  attempts_SINGLE?: InputMaybe<AttemptWhere>;
  /** Return Events where some of the related Attempts match this filter */
  attempts_SOME?: InputMaybe<AttemptWhere>;
  class?: InputMaybe<Class>;
  class_IN?: InputMaybe<Array<Class>>;
  competition?: InputMaybe<CompetitionWhere>;
  competitionAggregate?: InputMaybe<EventCompetitionAggregateInput>;
  competitionConnection?: InputMaybe<EventCompetitionConnectionWhere>;
  competitionConnection_NOT?: InputMaybe<EventCompetitionConnectionWhere>;
  competition_NOT?: InputMaybe<CompetitionWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventsConnection = {
  __typename?: 'EventsConnection';
  edges: Array<EventEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FloatAggregateSelectionNonNullable = {
  __typename?: 'FloatAggregateSelectionNonNullable';
  average: Scalars['Float']['output'];
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
  sum: Scalars['Float']['output'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID']['output'];
  shortest: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAthletes: CreateAthletesMutationResponse;
  createAttempts: CreateAttemptsMutationResponse;
  createCities: CreateCitiesMutationResponse;
  createCompetitions: CreateCompetitionsMutationResponse;
  createDataSources: CreateDataSourcesMutationResponse;
  createEvents: CreateEventsMutationResponse;
  createNations: CreateNationsMutationResponse;
  createSports: CreateSportsMutationResponse;
  deleteAthletes: DeleteInfo;
  deleteAttempts: DeleteInfo;
  deleteCities: DeleteInfo;
  deleteCompetitions: DeleteInfo;
  deleteDataSources: DeleteInfo;
  deleteEvents: DeleteInfo;
  deleteNations: DeleteInfo;
  deleteSports: DeleteInfo;
  updateAthletes: UpdateAthletesMutationResponse;
  updateAttempts: UpdateAttemptsMutationResponse;
  updateCities: UpdateCitiesMutationResponse;
  updateCompetitions: UpdateCompetitionsMutationResponse;
  updateDataSources: UpdateDataSourcesMutationResponse;
  updateEvents: UpdateEventsMutationResponse;
  updateNations: UpdateNationsMutationResponse;
  updateSports: UpdateSportsMutationResponse;
};


export type MutationCreateAthletesArgs = {
  input: Array<AthleteCreateInput>;
};


export type MutationCreateAttemptsArgs = {
  input: Array<AttemptCreateInput>;
};


export type MutationCreateCitiesArgs = {
  input: Array<CityCreateInput>;
};


export type MutationCreateCompetitionsArgs = {
  input: Array<CompetitionCreateInput>;
};


export type MutationCreateDataSourcesArgs = {
  input: Array<DataSourceCreateInput>;
};


export type MutationCreateEventsArgs = {
  input: Array<EventCreateInput>;
};


export type MutationCreateNationsArgs = {
  input: Array<NationCreateInput>;
};


export type MutationCreateSportsArgs = {
  input: Array<SportCreateInput>;
};


export type MutationDeleteAthletesArgs = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<AthleteWhere>;
};


export type MutationDeleteAttemptsArgs = {
  delete?: InputMaybe<AttemptDeleteInput>;
  where?: InputMaybe<AttemptWhere>;
};


export type MutationDeleteCitiesArgs = {
  delete?: InputMaybe<CityDeleteInput>;
  where?: InputMaybe<CityWhere>;
};


export type MutationDeleteCompetitionsArgs = {
  delete?: InputMaybe<CompetitionDeleteInput>;
  where?: InputMaybe<CompetitionWhere>;
};


export type MutationDeleteDataSourcesArgs = {
  delete?: InputMaybe<DataSourceDeleteInput>;
  where?: InputMaybe<DataSourceWhere>;
};


export type MutationDeleteEventsArgs = {
  delete?: InputMaybe<EventDeleteInput>;
  where?: InputMaybe<EventWhere>;
};


export type MutationDeleteNationsArgs = {
  delete?: InputMaybe<NationDeleteInput>;
  where?: InputMaybe<NationWhere>;
};


export type MutationDeleteSportsArgs = {
  delete?: InputMaybe<SportDeleteInput>;
  where?: InputMaybe<SportWhere>;
};


export type MutationUpdateAthletesArgs = {
  connect?: InputMaybe<AthleteConnectInput>;
  connectOrCreate?: InputMaybe<AthleteConnectOrCreateInput>;
  create?: InputMaybe<AthleteRelationInput>;
  delete?: InputMaybe<AthleteDeleteInput>;
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  update?: InputMaybe<AthleteUpdateInput>;
  where?: InputMaybe<AthleteWhere>;
};


export type MutationUpdateAttemptsArgs = {
  connect?: InputMaybe<AttemptConnectInput>;
  connectOrCreate?: InputMaybe<AttemptConnectOrCreateInput>;
  create?: InputMaybe<AttemptRelationInput>;
  delete?: InputMaybe<AttemptDeleteInput>;
  disconnect?: InputMaybe<AttemptDisconnectInput>;
  update?: InputMaybe<AttemptUpdateInput>;
  where?: InputMaybe<AttemptWhere>;
};


export type MutationUpdateCitiesArgs = {
  connect?: InputMaybe<CityConnectInput>;
  connectOrCreate?: InputMaybe<CityConnectOrCreateInput>;
  create?: InputMaybe<CityRelationInput>;
  delete?: InputMaybe<CityDeleteInput>;
  disconnect?: InputMaybe<CityDisconnectInput>;
  update?: InputMaybe<CityUpdateInput>;
  where?: InputMaybe<CityWhere>;
};


export type MutationUpdateCompetitionsArgs = {
  connect?: InputMaybe<CompetitionConnectInput>;
  connectOrCreate?: InputMaybe<CompetitionConnectOrCreateInput>;
  create?: InputMaybe<CompetitionRelationInput>;
  delete?: InputMaybe<CompetitionDeleteInput>;
  disconnect?: InputMaybe<CompetitionDisconnectInput>;
  update?: InputMaybe<CompetitionUpdateInput>;
  where?: InputMaybe<CompetitionWhere>;
};


export type MutationUpdateDataSourcesArgs = {
  connect?: InputMaybe<DataSourceConnectInput>;
  connectOrCreate?: InputMaybe<DataSourceConnectOrCreateInput>;
  create?: InputMaybe<DataSourceRelationInput>;
  delete?: InputMaybe<DataSourceDeleteInput>;
  disconnect?: InputMaybe<DataSourceDisconnectInput>;
  update?: InputMaybe<DataSourceUpdateInput>;
  where?: InputMaybe<DataSourceWhere>;
};


export type MutationUpdateEventsArgs = {
  connect?: InputMaybe<EventConnectInput>;
  connectOrCreate?: InputMaybe<EventConnectOrCreateInput>;
  create?: InputMaybe<EventRelationInput>;
  delete?: InputMaybe<EventDeleteInput>;
  disconnect?: InputMaybe<EventDisconnectInput>;
  update?: InputMaybe<EventUpdateInput>;
  where?: InputMaybe<EventWhere>;
};


export type MutationUpdateNationsArgs = {
  connect?: InputMaybe<NationConnectInput>;
  connectOrCreate?: InputMaybe<NationConnectOrCreateInput>;
  create?: InputMaybe<NationRelationInput>;
  delete?: InputMaybe<NationDeleteInput>;
  disconnect?: InputMaybe<NationDisconnectInput>;
  update?: InputMaybe<NationUpdateInput>;
  where?: InputMaybe<NationWhere>;
};


export type MutationUpdateSportsArgs = {
  connect?: InputMaybe<SportConnectInput>;
  connectOrCreate?: InputMaybe<SportConnectOrCreateInput>;
  create?: InputMaybe<SportRelationInput>;
  delete?: InputMaybe<SportDeleteInput>;
  disconnect?: InputMaybe<SportDisconnectInput>;
  update?: InputMaybe<SportUpdateInput>;
  where?: InputMaybe<SportWhere>;
};

export type Nation = {
  __typename?: 'Nation';
  athletes: Array<Athlete>;
  athletesAggregate?: Maybe<NationAthleteAthletesAggregationSelection>;
  athletesConnection: NationAthletesConnection;
  cities: Array<City>;
  citiesAggregate?: Maybe<NationCityCitiesAggregationSelection>;
  citiesConnection: NationCitiesConnection;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};


export type NationAthletesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


export type NationAthletesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AthleteWhere>;
};


export type NationAthletesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NationAthletesConnectionSort>>;
  where?: InputMaybe<NationAthletesConnectionWhere>;
};


export type NationCitiesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CityOptions>;
  where?: InputMaybe<CityWhere>;
};


export type NationCitiesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CityWhere>;
};


export type NationCitiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NationCitiesConnectionSort>>;
  where?: InputMaybe<NationCitiesConnectionWhere>;
};

export type NationAggregateSelection = {
  __typename?: 'NationAggregateSelection';
  code: StringAggregateSelectionNonNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type NationAthleteAthletesAggregationSelection = {
  __typename?: 'NationAthleteAthletesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<NationAthleteAthletesNodeAggregateSelection>;
};

export type NationAthleteAthletesNodeAggregateSelection = {
  __typename?: 'NationAthleteAthletesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNonNullable;
  givenName: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type NationAthletesAggregateInput = {
  AND?: InputMaybe<Array<NationAthletesAggregateInput>>;
  NOT?: InputMaybe<NationAthletesAggregateInput>;
  OR?: InputMaybe<Array<NationAthletesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<NationAthletesNodeAggregationWhereInput>;
};

export type NationAthletesConnectFieldInput = {
  connect?: InputMaybe<Array<AthleteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AthleteConnectWhere>;
};

export type NationAthletesConnectOrCreateFieldInput = {
  onCreate: NationAthletesConnectOrCreateFieldInputOnCreate;
  where: AthleteConnectOrCreateWhere;
};

export type NationAthletesConnectOrCreateFieldInputOnCreate = {
  node: AthleteOnCreateInput;
};

export type NationAthletesConnection = {
  __typename?: 'NationAthletesConnection';
  edges: Array<NationAthletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NationAthletesConnectionSort = {
  node?: InputMaybe<AthleteSort>;
};

export type NationAthletesConnectionWhere = {
  AND?: InputMaybe<Array<NationAthletesConnectionWhere>>;
  NOT?: InputMaybe<NationAthletesConnectionWhere>;
  OR?: InputMaybe<Array<NationAthletesConnectionWhere>>;
  node?: InputMaybe<AthleteWhere>;
};

export type NationAthletesCreateFieldInput = {
  node: AthleteCreateInput;
};

export type NationAthletesDeleteFieldInput = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<NationAthletesConnectionWhere>;
};

export type NationAthletesDisconnectFieldInput = {
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  where?: InputMaybe<NationAthletesConnectionWhere>;
};

export type NationAthletesFieldInput = {
  connect?: InputMaybe<Array<NationAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<NationAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<NationAthletesCreateFieldInput>>;
};

export type NationAthletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<NationAthletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<NationAthletesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<NationAthletesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  familyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NationAthletesRelationship = {
  __typename?: 'NationAthletesRelationship';
  cursor: Scalars['String']['output'];
  node: Athlete;
};

export type NationAthletesUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
};

export type NationAthletesUpdateFieldInput = {
  connect?: InputMaybe<Array<NationAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<NationAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<NationAthletesCreateFieldInput>>;
  delete?: InputMaybe<Array<NationAthletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<NationAthletesDisconnectFieldInput>>;
  update?: InputMaybe<NationAthletesUpdateConnectionInput>;
  where?: InputMaybe<NationAthletesConnectionWhere>;
};

export type NationCitiesAggregateInput = {
  AND?: InputMaybe<Array<NationCitiesAggregateInput>>;
  NOT?: InputMaybe<NationCitiesAggregateInput>;
  OR?: InputMaybe<Array<NationCitiesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<NationCitiesNodeAggregationWhereInput>;
};

export type NationCitiesConnectFieldInput = {
  connect?: InputMaybe<Array<CityConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CityConnectWhere>;
};

export type NationCitiesConnectOrCreateFieldInput = {
  onCreate: NationCitiesConnectOrCreateFieldInputOnCreate;
  where: CityConnectOrCreateWhere;
};

export type NationCitiesConnectOrCreateFieldInputOnCreate = {
  node: CityOnCreateInput;
};

export type NationCitiesConnection = {
  __typename?: 'NationCitiesConnection';
  edges: Array<NationCitiesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NationCitiesConnectionSort = {
  node?: InputMaybe<CitySort>;
};

export type NationCitiesConnectionWhere = {
  AND?: InputMaybe<Array<NationCitiesConnectionWhere>>;
  NOT?: InputMaybe<NationCitiesConnectionWhere>;
  OR?: InputMaybe<Array<NationCitiesConnectionWhere>>;
  node?: InputMaybe<CityWhere>;
};

export type NationCitiesCreateFieldInput = {
  node: CityCreateInput;
};

export type NationCitiesDeleteFieldInput = {
  delete?: InputMaybe<CityDeleteInput>;
  where?: InputMaybe<NationCitiesConnectionWhere>;
};

export type NationCitiesDisconnectFieldInput = {
  disconnect?: InputMaybe<CityDisconnectInput>;
  where?: InputMaybe<NationCitiesConnectionWhere>;
};

export type NationCitiesFieldInput = {
  connect?: InputMaybe<Array<NationCitiesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<NationCitiesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<NationCitiesCreateFieldInput>>;
};

export type NationCitiesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<NationCitiesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<NationCitiesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<NationCitiesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NationCitiesRelationship = {
  __typename?: 'NationCitiesRelationship';
  cursor: Scalars['String']['output'];
  node: City;
};

export type NationCitiesUpdateConnectionInput = {
  node?: InputMaybe<CityUpdateInput>;
};

export type NationCitiesUpdateFieldInput = {
  connect?: InputMaybe<Array<NationCitiesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<NationCitiesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<NationCitiesCreateFieldInput>>;
  delete?: InputMaybe<Array<NationCitiesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<NationCitiesDisconnectFieldInput>>;
  update?: InputMaybe<NationCitiesUpdateConnectionInput>;
  where?: InputMaybe<NationCitiesConnectionWhere>;
};

export type NationCityCitiesAggregationSelection = {
  __typename?: 'NationCityCitiesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<NationCityCitiesNodeAggregateSelection>;
};

export type NationCityCitiesNodeAggregateSelection = {
  __typename?: 'NationCityCitiesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type NationConnectInput = {
  athletes?: InputMaybe<Array<NationAthletesConnectFieldInput>>;
  cities?: InputMaybe<Array<NationCitiesConnectFieldInput>>;
};

export type NationConnectOrCreateInput = {
  athletes?: InputMaybe<Array<NationAthletesConnectOrCreateFieldInput>>;
  cities?: InputMaybe<Array<NationCitiesConnectOrCreateFieldInput>>;
};

export type NationConnectOrCreateWhere = {
  node: NationUniqueWhere;
};

export type NationConnectWhere = {
  node: NationWhere;
};

export type NationCreateInput = {
  athletes?: InputMaybe<NationAthletesFieldInput>;
  cities?: InputMaybe<NationCitiesFieldInput>;
  code: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: Scalars['Boolean']['input'];
};

export type NationDeleteInput = {
  athletes?: InputMaybe<Array<NationAthletesDeleteFieldInput>>;
  cities?: InputMaybe<Array<NationCitiesDeleteFieldInput>>;
};

export type NationDisconnectInput = {
  athletes?: InputMaybe<Array<NationAthletesDisconnectFieldInput>>;
  cities?: InputMaybe<Array<NationCitiesDisconnectFieldInput>>;
};

export type NationEdge = {
  __typename?: 'NationEdge';
  cursor: Scalars['String']['output'];
  node: Nation;
};

export type NationOnCreateInput = {
  code: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: Scalars['Boolean']['input'];
};

export type NationOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more NationSort objects to sort Nations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<NationSort>>;
};

export type NationRelationInput = {
  athletes?: InputMaybe<Array<NationAthletesCreateFieldInput>>;
  cities?: InputMaybe<Array<NationCitiesCreateFieldInput>>;
};

/** Fields to sort Nations by. The order in which sorts are applied is not guaranteed when specifying many fields in one NationSort object. */
export type NationSort = {
  code?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type NationUniqueWhere = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type NationUpdateInput = {
  athletes?: InputMaybe<Array<NationAthletesUpdateFieldInput>>;
  cities?: InputMaybe<Array<NationCitiesUpdateFieldInput>>;
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NationWhere = {
  AND?: InputMaybe<Array<NationWhere>>;
  NOT?: InputMaybe<NationWhere>;
  OR?: InputMaybe<Array<NationWhere>>;
  athletesAggregate?: InputMaybe<NationAthletesAggregateInput>;
  /** Return Nations where all of the related NationAthletesConnections match this filter */
  athletesConnection_ALL?: InputMaybe<NationAthletesConnectionWhere>;
  /** Return Nations where none of the related NationAthletesConnections match this filter */
  athletesConnection_NONE?: InputMaybe<NationAthletesConnectionWhere>;
  /** Return Nations where one of the related NationAthletesConnections match this filter */
  athletesConnection_SINGLE?: InputMaybe<NationAthletesConnectionWhere>;
  /** Return Nations where some of the related NationAthletesConnections match this filter */
  athletesConnection_SOME?: InputMaybe<NationAthletesConnectionWhere>;
  /** Return Nations where all of the related Athletes match this filter */
  athletes_ALL?: InputMaybe<AthleteWhere>;
  /** Return Nations where none of the related Athletes match this filter */
  athletes_NONE?: InputMaybe<AthleteWhere>;
  /** Return Nations where one of the related Athletes match this filter */
  athletes_SINGLE?: InputMaybe<AthleteWhere>;
  /** Return Nations where some of the related Athletes match this filter */
  athletes_SOME?: InputMaybe<AthleteWhere>;
  citiesAggregate?: InputMaybe<NationCitiesAggregateInput>;
  /** Return Nations where all of the related NationCitiesConnections match this filter */
  citiesConnection_ALL?: InputMaybe<NationCitiesConnectionWhere>;
  /** Return Nations where none of the related NationCitiesConnections match this filter */
  citiesConnection_NONE?: InputMaybe<NationCitiesConnectionWhere>;
  /** Return Nations where one of the related NationCitiesConnections match this filter */
  citiesConnection_SINGLE?: InputMaybe<NationCitiesConnectionWhere>;
  /** Return Nations where some of the related NationCitiesConnections match this filter */
  citiesConnection_SOME?: InputMaybe<NationCitiesConnectionWhere>;
  /** Return Nations where all of the related Cities match this filter */
  cities_ALL?: InputMaybe<CityWhere>;
  /** Return Nations where none of the related Cities match this filter */
  cities_NONE?: InputMaybe<CityWhere>;
  /** Return Nations where one of the related Cities match this filter */
  cities_SINGLE?: InputMaybe<CityWhere>;
  /** Return Nations where some of the related Cities match this filter */
  cities_SOME?: InputMaybe<CityWhere>;
  code?: InputMaybe<Scalars['String']['input']>;
  code_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  code_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  code_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  code_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NationsConnection = {
  __typename?: 'NationsConnection';
  edges: Array<NationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  athletes: Array<Athlete>;
  athletesAggregate: AthleteAggregateSelection;
  athletesConnection: AthletesConnection;
  attempts: Array<Attempt>;
  attemptsAggregate: AttemptAggregateSelection;
  attemptsConnection: AttemptsConnection;
  cities: Array<City>;
  citiesAggregate: CityAggregateSelection;
  citiesConnection: CitiesConnection;
  competitions: Array<Competition>;
  competitionsAggregate: CompetitionAggregateSelection;
  competitionsConnection: CompetitionsConnection;
  dataSources: Array<DataSource>;
  dataSourcesAggregate: DataSourceAggregateSelection;
  dataSourcesConnection: DataSourcesConnection;
  events: Array<Event>;
  eventsAggregate: EventAggregateSelection;
  eventsConnection: EventsConnection;
  nations: Array<Nation>;
  nationsAggregate: NationAggregateSelection;
  nationsConnection: NationsConnection;
  sports: Array<Sport>;
  sportsAggregate: SportAggregateSelection;
  sportsConnection: SportsConnection;
};


export type QueryAthletesArgs = {
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


export type QueryAthletesAggregateArgs = {
  where?: InputMaybe<AthleteWhere>;
};


export type QueryAthletesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<AthleteSort>>>;
  where?: InputMaybe<AthleteWhere>;
};


export type QueryAttemptsArgs = {
  options?: InputMaybe<AttemptOptions>;
  where?: InputMaybe<AttemptWhere>;
};


export type QueryAttemptsAggregateArgs = {
  where?: InputMaybe<AttemptWhere>;
};


export type QueryAttemptsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<AttemptSort>>>;
  where?: InputMaybe<AttemptWhere>;
};


export type QueryCitiesArgs = {
  options?: InputMaybe<CityOptions>;
  where?: InputMaybe<CityWhere>;
};


export type QueryCitiesAggregateArgs = {
  where?: InputMaybe<CityWhere>;
};


export type QueryCitiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CitySort>>>;
  where?: InputMaybe<CityWhere>;
};


export type QueryCompetitionsArgs = {
  options?: InputMaybe<CompetitionOptions>;
  where?: InputMaybe<CompetitionWhere>;
};


export type QueryCompetitionsAggregateArgs = {
  where?: InputMaybe<CompetitionWhere>;
};


export type QueryCompetitionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CompetitionSort>>>;
  where?: InputMaybe<CompetitionWhere>;
};


export type QueryDataSourcesArgs = {
  options?: InputMaybe<DataSourceOptions>;
  where?: InputMaybe<DataSourceWhere>;
};


export type QueryDataSourcesAggregateArgs = {
  where?: InputMaybe<DataSourceWhere>;
};


export type QueryDataSourcesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<DataSourceSort>>>;
  where?: InputMaybe<DataSourceWhere>;
};


export type QueryEventsArgs = {
  options?: InputMaybe<EventOptions>;
  where?: InputMaybe<EventWhere>;
};


export type QueryEventsAggregateArgs = {
  where?: InputMaybe<EventWhere>;
};


export type QueryEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<EventSort>>>;
  where?: InputMaybe<EventWhere>;
};


export type QueryNationsArgs = {
  options?: InputMaybe<NationOptions>;
  where?: InputMaybe<NationWhere>;
};


export type QueryNationsAggregateArgs = {
  where?: InputMaybe<NationWhere>;
};


export type QueryNationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<NationSort>>>;
  where?: InputMaybe<NationWhere>;
};


export type QuerySportsArgs = {
  options?: InputMaybe<SportOptions>;
  where?: InputMaybe<SportWhere>;
};


export type QuerySportsAggregateArgs = {
  where?: InputMaybe<SportWhere>;
};


export type QuerySportsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SportSort>>>;
  where?: InputMaybe<SportWhere>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type Sport = {
  __typename?: 'Sport';
  athletes: Array<Athlete>;
  athletesAggregate?: Maybe<SportAthleteAthletesAggregationSelection>;
  athletesConnection: SportAthletesConnection;
  competitions: Array<Competition>;
  competitionsAggregate?: Maybe<SportCompetitionCompetitionsAggregationSelection>;
  competitionsConnection: SportCompetitionsConnection;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};


export type SportAthletesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


export type SportAthletesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AthleteWhere>;
};


export type SportAthletesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SportAthletesConnectionSort>>;
  where?: InputMaybe<SportAthletesConnectionWhere>;
};


export type SportCompetitionsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CompetitionOptions>;
  where?: InputMaybe<CompetitionWhere>;
};


export type SportCompetitionsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CompetitionWhere>;
};


export type SportCompetitionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SportCompetitionsConnectionSort>>;
  where?: InputMaybe<SportCompetitionsConnectionWhere>;
};

export type SportAggregateSelection = {
  __typename?: 'SportAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type SportAthleteAthletesAggregationSelection = {
  __typename?: 'SportAthleteAthletesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SportAthleteAthletesNodeAggregateSelection>;
};

export type SportAthleteAthletesNodeAggregateSelection = {
  __typename?: 'SportAthleteAthletesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNonNullable;
  givenName: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type SportAthletesAggregateInput = {
  AND?: InputMaybe<Array<SportAthletesAggregateInput>>;
  NOT?: InputMaybe<SportAthletesAggregateInput>;
  OR?: InputMaybe<Array<SportAthletesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SportAthletesNodeAggregationWhereInput>;
};

export type SportAthletesConnectFieldInput = {
  connect?: InputMaybe<Array<AthleteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AthleteConnectWhere>;
};

export type SportAthletesConnectOrCreateFieldInput = {
  onCreate: SportAthletesConnectOrCreateFieldInputOnCreate;
  where: AthleteConnectOrCreateWhere;
};

export type SportAthletesConnectOrCreateFieldInputOnCreate = {
  node: AthleteOnCreateInput;
};

export type SportAthletesConnection = {
  __typename?: 'SportAthletesConnection';
  edges: Array<SportAthletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SportAthletesConnectionSort = {
  node?: InputMaybe<AthleteSort>;
};

export type SportAthletesConnectionWhere = {
  AND?: InputMaybe<Array<SportAthletesConnectionWhere>>;
  NOT?: InputMaybe<SportAthletesConnectionWhere>;
  OR?: InputMaybe<Array<SportAthletesConnectionWhere>>;
  node?: InputMaybe<AthleteWhere>;
};

export type SportAthletesCreateFieldInput = {
  node: AthleteCreateInput;
};

export type SportAthletesDeleteFieldInput = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<SportAthletesConnectionWhere>;
};

export type SportAthletesDisconnectFieldInput = {
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  where?: InputMaybe<SportAthletesConnectionWhere>;
};

export type SportAthletesFieldInput = {
  connect?: InputMaybe<Array<SportAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SportAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SportAthletesCreateFieldInput>>;
};

export type SportAthletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SportAthletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SportAthletesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SportAthletesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  familyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SportAthletesRelationship = {
  __typename?: 'SportAthletesRelationship';
  cursor: Scalars['String']['output'];
  node: Athlete;
};

export type SportAthletesUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
};

export type SportAthletesUpdateFieldInput = {
  connect?: InputMaybe<Array<SportAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SportAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SportAthletesCreateFieldInput>>;
  delete?: InputMaybe<Array<SportAthletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SportAthletesDisconnectFieldInput>>;
  update?: InputMaybe<SportAthletesUpdateConnectionInput>;
  where?: InputMaybe<SportAthletesConnectionWhere>;
};

export type SportCompetitionCompetitionsAggregationSelection = {
  __typename?: 'SportCompetitionCompetitionsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SportCompetitionCompetitionsNodeAggregateSelection>;
};

export type SportCompetitionCompetitionsNodeAggregateSelection = {
  __typename?: 'SportCompetitionCompetitionsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type SportCompetitionsAggregateInput = {
  AND?: InputMaybe<Array<SportCompetitionsAggregateInput>>;
  NOT?: InputMaybe<SportCompetitionsAggregateInput>;
  OR?: InputMaybe<Array<SportCompetitionsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SportCompetitionsNodeAggregationWhereInput>;
};

export type SportCompetitionsConnectFieldInput = {
  connect?: InputMaybe<Array<CompetitionConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CompetitionConnectWhere>;
};

export type SportCompetitionsConnectOrCreateFieldInput = {
  onCreate: SportCompetitionsConnectOrCreateFieldInputOnCreate;
  where: CompetitionConnectOrCreateWhere;
};

export type SportCompetitionsConnectOrCreateFieldInputOnCreate = {
  node: CompetitionOnCreateInput;
};

export type SportCompetitionsConnection = {
  __typename?: 'SportCompetitionsConnection';
  edges: Array<SportCompetitionsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SportCompetitionsConnectionSort = {
  node?: InputMaybe<CompetitionSort>;
};

export type SportCompetitionsConnectionWhere = {
  AND?: InputMaybe<Array<SportCompetitionsConnectionWhere>>;
  NOT?: InputMaybe<SportCompetitionsConnectionWhere>;
  OR?: InputMaybe<Array<SportCompetitionsConnectionWhere>>;
  node?: InputMaybe<CompetitionWhere>;
};

export type SportCompetitionsCreateFieldInput = {
  node: CompetitionCreateInput;
};

export type SportCompetitionsDeleteFieldInput = {
  delete?: InputMaybe<CompetitionDeleteInput>;
  where?: InputMaybe<SportCompetitionsConnectionWhere>;
};

export type SportCompetitionsDisconnectFieldInput = {
  disconnect?: InputMaybe<CompetitionDisconnectInput>;
  where?: InputMaybe<SportCompetitionsConnectionWhere>;
};

export type SportCompetitionsFieldInput = {
  connect?: InputMaybe<Array<SportCompetitionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SportCompetitionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SportCompetitionsCreateFieldInput>>;
};

export type SportCompetitionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SportCompetitionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SportCompetitionsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SportCompetitionsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SportCompetitionsRelationship = {
  __typename?: 'SportCompetitionsRelationship';
  cursor: Scalars['String']['output'];
  node: Competition;
};

export type SportCompetitionsUpdateConnectionInput = {
  node?: InputMaybe<CompetitionUpdateInput>;
};

export type SportCompetitionsUpdateFieldInput = {
  connect?: InputMaybe<Array<SportCompetitionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SportCompetitionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SportCompetitionsCreateFieldInput>>;
  delete?: InputMaybe<Array<SportCompetitionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SportCompetitionsDisconnectFieldInput>>;
  update?: InputMaybe<SportCompetitionsUpdateConnectionInput>;
  where?: InputMaybe<SportCompetitionsConnectionWhere>;
};

export type SportConnectInput = {
  athletes?: InputMaybe<Array<SportAthletesConnectFieldInput>>;
  competitions?: InputMaybe<Array<SportCompetitionsConnectFieldInput>>;
};

export type SportConnectOrCreateInput = {
  athletes?: InputMaybe<Array<SportAthletesConnectOrCreateFieldInput>>;
  competitions?: InputMaybe<Array<SportCompetitionsConnectOrCreateFieldInput>>;
};

export type SportConnectOrCreateWhere = {
  node: SportUniqueWhere;
};

export type SportConnectWhere = {
  node: SportWhere;
};

export type SportCreateInput = {
  athletes?: InputMaybe<SportAthletesFieldInput>;
  competitions?: InputMaybe<SportCompetitionsFieldInput>;
  name: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type SportDeleteInput = {
  athletes?: InputMaybe<Array<SportAthletesDeleteFieldInput>>;
  competitions?: InputMaybe<Array<SportCompetitionsDeleteFieldInput>>;
};

export type SportDisconnectInput = {
  athletes?: InputMaybe<Array<SportAthletesDisconnectFieldInput>>;
  competitions?: InputMaybe<Array<SportCompetitionsDisconnectFieldInput>>;
};

export type SportEdge = {
  __typename?: 'SportEdge';
  cursor: Scalars['String']['output'];
  node: Sport;
};

export type SportOnCreateInput = {
  name: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type SportOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more SportSort objects to sort Sports by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SportSort>>;
};

export type SportRelationInput = {
  athletes?: InputMaybe<Array<SportAthletesCreateFieldInput>>;
  competitions?: InputMaybe<Array<SportCompetitionsCreateFieldInput>>;
};

/** Fields to sort Sports by. The order in which sorts are applied is not guaranteed when specifying many fields in one SportSort object. */
export type SportSort = {
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type SportUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SportUpdateInput = {
  athletes?: InputMaybe<Array<SportAthletesUpdateFieldInput>>;
  competitions?: InputMaybe<Array<SportCompetitionsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SportWhere = {
  AND?: InputMaybe<Array<SportWhere>>;
  NOT?: InputMaybe<SportWhere>;
  OR?: InputMaybe<Array<SportWhere>>;
  athletesAggregate?: InputMaybe<SportAthletesAggregateInput>;
  /** Return Sports where all of the related SportAthletesConnections match this filter */
  athletesConnection_ALL?: InputMaybe<SportAthletesConnectionWhere>;
  /** Return Sports where none of the related SportAthletesConnections match this filter */
  athletesConnection_NONE?: InputMaybe<SportAthletesConnectionWhere>;
  /** Return Sports where one of the related SportAthletesConnections match this filter */
  athletesConnection_SINGLE?: InputMaybe<SportAthletesConnectionWhere>;
  /** Return Sports where some of the related SportAthletesConnections match this filter */
  athletesConnection_SOME?: InputMaybe<SportAthletesConnectionWhere>;
  /** Return Sports where all of the related Athletes match this filter */
  athletes_ALL?: InputMaybe<AthleteWhere>;
  /** Return Sports where none of the related Athletes match this filter */
  athletes_NONE?: InputMaybe<AthleteWhere>;
  /** Return Sports where one of the related Athletes match this filter */
  athletes_SINGLE?: InputMaybe<AthleteWhere>;
  /** Return Sports where some of the related Athletes match this filter */
  athletes_SOME?: InputMaybe<AthleteWhere>;
  competitionsAggregate?: InputMaybe<SportCompetitionsAggregateInput>;
  /** Return Sports where all of the related SportCompetitionsConnections match this filter */
  competitionsConnection_ALL?: InputMaybe<SportCompetitionsConnectionWhere>;
  /** Return Sports where none of the related SportCompetitionsConnections match this filter */
  competitionsConnection_NONE?: InputMaybe<SportCompetitionsConnectionWhere>;
  /** Return Sports where one of the related SportCompetitionsConnections match this filter */
  competitionsConnection_SINGLE?: InputMaybe<SportCompetitionsConnectionWhere>;
  /** Return Sports where some of the related SportCompetitionsConnections match this filter */
  competitionsConnection_SOME?: InputMaybe<SportCompetitionsConnectionWhere>;
  /** Return Sports where all of the related Competitions match this filter */
  competitions_ALL?: InputMaybe<CompetitionWhere>;
  /** Return Sports where none of the related Competitions match this filter */
  competitions_NONE?: InputMaybe<CompetitionWhere>;
  /** Return Sports where one of the related Competitions match this filter */
  competitions_SINGLE?: InputMaybe<CompetitionWhere>;
  /** Return Sports where some of the related Competitions match this filter */
  competitions_SOME?: InputMaybe<CompetitionWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SportsConnection = {
  __typename?: 'SportsConnection';
  edges: Array<SportEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String']['output'];
  shortest: Scalars['String']['output'];
};

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type UpdateAthletesMutationResponse = {
  __typename?: 'UpdateAthletesMutationResponse';
  athletes: Array<Athlete>;
  info: UpdateInfo;
};

export type UpdateAttemptsMutationResponse = {
  __typename?: 'UpdateAttemptsMutationResponse';
  attempts: Array<Attempt>;
  info: UpdateInfo;
};

export type UpdateCitiesMutationResponse = {
  __typename?: 'UpdateCitiesMutationResponse';
  cities: Array<City>;
  info: UpdateInfo;
};

export type UpdateCompetitionsMutationResponse = {
  __typename?: 'UpdateCompetitionsMutationResponse';
  competitions: Array<Competition>;
  info: UpdateInfo;
};

export type UpdateDataSourcesMutationResponse = {
  __typename?: 'UpdateDataSourcesMutationResponse';
  dataSources: Array<DataSource>;
  info: UpdateInfo;
};

export type UpdateEventsMutationResponse = {
  __typename?: 'UpdateEventsMutationResponse';
  events: Array<Event>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateNationsMutationResponse = {
  __typename?: 'UpdateNationsMutationResponse';
  info: UpdateInfo;
  nations: Array<Nation>;
};

export type UpdateSportsMutationResponse = {
  __typename?: 'UpdateSportsMutationResponse';
  info: UpdateInfo;
  sports: Array<Sport>;
};
