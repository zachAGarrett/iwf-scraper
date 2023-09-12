import { GraphQLClient } from "graphql-request";
import createAthletes from "./graph/athlete/mutation/createAthletes";
import { MutationCreateAthletesArgs } from "../__generated__/graphql";

export interface CreateNewAthleteProps {
  logDecorator?: string;
  client: GraphQLClient;
  athleteInput: MutationCreateAthletesArgs["input"][0];
}
const createNewAthlete = async ({
  logDecorator,
  client,
  athleteInput,
}: CreateNewAthleteProps) => {
  const maybeLogDecorator = logDecorator ? `[${logDecorator}]: ` : "";

  console.log(
    `[${new Date().toISOString()}]${maybeLogDecorator} Ok to create athlete`
  );
  const createAthletesMutation = await client.request(createAthletes, {
    input: [athleteInput],
  });
  console.log(
    `[${new Date().toISOString()}]${maybeLogDecorator} Successfully created athlete`
  );
  const createdAthlete = createAthletesMutation.createAthletes.athletes[0];
  return {
    dataSourceEntityId: createdAthlete.dataSourcesConnection.edges[0].entityId,
    internalId: createdAthlete.id,
  };
};

export default createNewAthlete;
