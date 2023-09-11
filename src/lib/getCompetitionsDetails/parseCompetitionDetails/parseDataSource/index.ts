import { ElementHandle } from "puppeteer";
import { MutationCreateCompetitionsArgs } from "../../../../__generated__/graphql";
import getRootDomainFromUrl from "./getHostnameFromUrl";
import getEventIdFromUrl from "./getEventIdFromUrl";

export default async function parseDataSources(
  node: ElementHandle<HTMLAnchorElement>
) {
  const resultsUrl = await (await node.getProperty("href")).jsonValue();
  const eventId = getEventIdFromUrl(resultsUrl);
  if (eventId === null) {
    throw new Error("Count not parse required eventId");
  }

  const dataSourceName = getRootDomainFromUrl(resultsUrl);
  if (dataSourceName === null) {
    throw new Error("Count not parse required dataSourceName");
  }

  const dataSources: MutationCreateCompetitionsArgs["input"][0]["dataSources"] =
    {
      connectOrCreate: [
        {
          where: {
            node: { name: dataSourceName },
          },
          onCreate: {
            node: { name: dataSourceName },
            edge: { entityId: eventId },
          },
        },
      ],
    };

  return dataSources;
}
