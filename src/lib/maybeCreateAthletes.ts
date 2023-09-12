import { AthletesQuery } from "../__generated__/graphql";

export interface MaybeCreateAthletesReturnType {
  dataSourceEntityId: string;
  internalId: string;
}
export interface MaybeCreateAthletesProps {
  knownAthletesQuery: AthletesQuery;
  logDecorator?: string;
  onAthleteIsUnknown: () => Promise<MaybeCreateAthletesReturnType>;
  onAthleteNotConnectedToCompetition: (
    matchedAthlete: AthletesQuery["athletes"][0]
  ) => Promise<MaybeCreateAthletesReturnType>;
}
export default async function maybeCreateAthletes({
  knownAthletesQuery,
  logDecorator,
  onAthleteIsUnknown,
  onAthleteNotConnectedToCompetition,
}: MaybeCreateAthletesProps) {
  const maybeLogDecorator = logDecorator ? `[${logDecorator}]: ` : "";

  const athleteIsUnknown = knownAthletesQuery.athletes.length === 0;
  if (athleteIsUnknown) {
    /**
     * Create the new athlete in the database
     */
    const maybeCreateAthletesReturn = await onAthleteIsUnknown();
    return maybeCreateAthletesReturn;
  }

  const matchedAthlete = knownAthletesQuery.athletes[0];
  const athleteNotConnectedToCompetition =
    matchedAthlete.competitionsAggregate?.count === 0;
  if (athleteNotConnectedToCompetition) {
    /**
     * Update the athlete by linking them to the competition.
     */
    const maybeCreateAthletesReturn = await onAthleteNotConnectedToCompetition(
      matchedAthlete
    );
    return maybeCreateAthletesReturn;
  }

  /**
   * If neither of the above are true, the athlete exists and has an existing connection to this competition.
   * Reject this promise and do not insert update the athlete.
   */
  throw new Error(
    `[${new Date().toISOString()}]${maybeLogDecorator} ${
      matchedAthlete.name
    } already exists in the database with id ${matchedAthlete.id}`
  );
}
