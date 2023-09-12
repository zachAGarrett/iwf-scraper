import { GraphQLClient } from "graphql-request";
import athletes from "./graph/athlete/query/athletes";
import getCompetitionAthletes from "./getCompetitionAthletes";

export interface CheckForMatchingKnownAthletesProps {
  client: GraphQLClient;
  logDecorator?: string;
  athleteInput: Awaited<ReturnType<typeof getCompetitionAthletes>>[0];
  competitionInternalId: string;
}
const checkForMatchingKnownAthletes = async ({
  client,
  logDecorator,
  athleteInput,
  competitionInternalId,
}: CheckForMatchingKnownAthletesProps) => {
  const maybeLogDecorator = logDecorator ? `[${logDecorator}]: ` : "";
  const knownAthletesQuery = await client.request(athletes, {
    where: {
      name: athleteInput.name,
      birthday: athleteInput.birthday,
      nations_SOME: {
        /**
         * It's safe to assert this is true because we set the values in getCompetitionAthletes()
         * In the future, it might be good to create a type for getCompetitionAthletes response
         * that doesn't rely on the generated graphql types.
         */
        code: athleteInput.nations!.connectOrCreate![0].where.node.code,
      },
    },
    competitionsAggregateWhere: {
      id: competitionInternalId,
    },
  });

  if (knownAthletesQuery.athletes.length > 1) {
    console.warn(`[${new Date().toISOString()}]${maybeLogDecorator} Could not secure an excusive connection to the athlete. 
    Query filter:
    ${JSON.stringify({
      name: athleteInput.name,
      birthday: athleteInput.birthday,
      nations_SOME: {
        code: athleteInput.nations!.connectOrCreate![0].where.node.code,
      },
    })}
    Matched ${knownAthletesQuery.athletes.length} athletes.`);

    // temporarily disabling throw, until resolving athlete redundancy issues
    // throw new Error(

    // );
  }
  return knownAthletesQuery;
};
export default checkForMatchingKnownAthletes;
