import { GraphQLClient } from "graphql-request";
import updateAthletes from "./graph/athlete/mutation/updateAthlete";
import { MutationUpdateAthletesArgs } from "../__generated__/graphql";

export interface ConnectAthleteToCompetitionProps {
  logDecorator?: string;
  client: GraphQLClient;
  updateAthletesInput: MutationUpdateAthletesArgs;
  dataSourceEntityId: string;
}
const connectAthleteToCompetition = async ({
  logDecorator,
  client,
  updateAthletesInput,
  dataSourceEntityId,
}: ConnectAthleteToCompetitionProps) => {
  const maybeLogDecorator = logDecorator ? `[${logDecorator}]: ` : "";
  console.log(
    `[${new Date().toISOString()}]${maybeLogDecorator} Connecting athlete to competition`
  );
  const updateAthletesMutation = await client.request(
    updateAthletes,
    updateAthletesInput
  );
  console.log(
    `[${new Date().toISOString()}]${maybeLogDecorator} Connected athlete to competition`
  );
  const updatedAthlete = updateAthletesMutation.updateAthletes.athletes[0];
  return {
    /**
     * It's safe to assert this is true because we set the values in getCompetitionAthletes()
     * In the future, it might be good to create a type for getCompetitionAthletes response
     * that doesn't rely on the generated graphql types.
     */
    dataSourceEntityId: dataSourceEntityId,
    internalId: updatedAthlete.id,
  };
};
export default connectAthleteToCompetition;
