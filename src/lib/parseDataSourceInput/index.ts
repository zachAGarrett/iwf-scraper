import { ElementHandle } from "puppeteer";
import getRootDomainFromUrl from "./getHostnameFromUrl";
import getTargetComponentFromUrl from "./getTargetComponentFromUrl";

export default async function parseDataSourceInput(
  node: ElementHandle<HTMLAnchorElement>,
  targetUrlComponent: string
) {
  const resultsUrl = await (await node.getProperty("href")).jsonValue();
  const targetUrlComponentValue = getTargetComponentFromUrl(
    resultsUrl,
    targetUrlComponent
  );
  if (targetUrlComponentValue === null) {
    throw new Error(`Could not parse target: ${targetUrlComponent} from href`);
  }

  const dataSourceName = getRootDomainFromUrl(resultsUrl);
  if (dataSourceName === null) {
    throw new Error(`Could not parse required hostname from ${resultsUrl}`);
  }

  const dataSources = {
    connectOrCreate: [
      {
        where: {
          node: { name: dataSourceName },
        },
        onCreate: {
          node: { name: dataSourceName },
          edge: { entityId: targetUrlComponentValue },
        },
      },
    ],
  };

  return dataSources;
}
