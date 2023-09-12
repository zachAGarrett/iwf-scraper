import { useFragment } from "../__generated__";
import {
  CompetitionDefaultFieldsFragmentDoc,
  CompetitionDetailsFragmentDoc,
  CompetitionsQuery,
} from "../__generated__/graphql";
export interface MaybeCreateCompetitionReturnType {
  dataSourceEntityId: string;
  internalId: string;
}
export interface MaybeCreateCompetitionsProps {
  knownCompetitionsQuery: CompetitionsQuery;
  logDecorator?: string;
  onCompetitionIsUnknown: () => Promise<MaybeCreateCompetitionReturnType>;
}
export default async function maybeCreateCompetition({
  knownCompetitionsQuery,
  logDecorator,
  onCompetitionIsUnknown,
}: MaybeCreateCompetitionsProps) {
  const maybeLogDecorator = logDecorator ? `[${logDecorator}]: ` : "";
  const competitionIsUnknown = knownCompetitionsQuery.competitions.length === 0;
  if (competitionIsUnknown) {
    /**
     * If the competition is unknown, create and scrape it, and return the data source entity id and the internal id
     */
    console.log(
      `[${new Date().toISOString()}]${maybeLogDecorator} Ok to create and analyze competition`
    );

    const maybeCreateCompetitionReturn = await onCompetitionIsUnknown();
    console.log(
      `[${new Date().toISOString()}]${maybeLogDecorator} Successfully created`
    );
    return maybeCreateCompetitionReturn;
  }

  /**
   * [EDGE CASE]
   * This assumes there will only be one competition at the union of name, nation, date
   */
  const knownCompetition = knownCompetitionsQuery.competitions[0];
  // Unpack the Competition Details Fragment
  const knownCompetitionDetailsFragment = useFragment(
    CompetitionDetailsFragmentDoc,
    knownCompetition
  );
  // Unpack the Competition Default Fields Fragment
  const competitionDefaultFields = useFragment(
    CompetitionDefaultFieldsFragmentDoc,
    knownCompetition
  );
  const competitionIsKnownButNotScraped =
    knownCompetitionDetailsFragment.scraped === false;
  if (competitionIsKnownButNotScraped) {
    /**
     * If the competition exists but has not yet been scraped, return the data source entity id and the internal id
     */
    console.log(
      `[${new Date().toISOString()}]${maybeLogDecorator} The competition exists but it needs to be analyzed`
    );
    return {
      dataSourceEntityId:
        knownCompetition.dataSourcesConnection.edges[0].entityId,
      internalId: competitionDefaultFields.id,
    };
  }

  /**
   * If neither of the above are true, the competition exists and has been scraped.
   * Reject this promise and do not insert or scrape the competition.
   */
  throw new Error(
    `[${new Date().toISOString()}]${maybeLogDecorator} ${
      knownCompetitionDetailsFragment.name
    } on ${knownCompetitionDetailsFragment.date} already exists in the database`
  );
}
