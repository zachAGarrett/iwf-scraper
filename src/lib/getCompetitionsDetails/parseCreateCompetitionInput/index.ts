import { ElementHandle } from "puppeteer";
import { MutationCreateCompetitionsArgs } from "../../../__generated__/graphql";
import parseDataSourceInput from "../../parseDataSourceInput";

export default async function parseCreateCompetitionInput(
  node: ElementHandle<HTMLAnchorElement>
) {
  let completeInput: MutationCreateCompetitionsArgs["input"][0];
  const competitionDataSourcesPart = await parseDataSourceInput(
    node,
    "event_id"
  );

  const competitionDetailsAndNationParts = await node.$$eval("p", (cells) => {
    /**
     * Declare functions inside the $$eval operation in order to have them available in the puppeteer scope
     */

    function parseCityAndNation(inputString: string) {
      const parts = inputString.split(",");

      if (parts.length === 2) {
        const city = parts[0].trim();
        const nationCode = parts[1].trim();
        return {
          city,
          nationCode,
        };
      } else {
        // Handle invalid input
        return null;
      }
    }
    function parseDates(dateString?: string): string | null {
      if (dateString === undefined) return null;

      // Define months to map abbreviated month names to numeric values
      const months: { [key: string]: number } = {
        Jan: 1,
        Feb: 2,
        Mar: 3,
        Apr: 4,
        May: 5,
        Jun: 6,
        Jul: 7,
        Aug: 8,
        Sep: 9,
        Oct: 10,
        Nov: 11,
        Dec: 12,
      };

      // Split the input string into parts
      const parts = dateString.match(/(\w{3}) (\d{2}), (\d{4})/);

      if (!parts || parts.length !== 4) {
        // Invalid input format
        return null;
      }

      const [, monthStr, dayStr, yearStr] = parts;
      const month = months[monthStr];
      const day = parseInt(dayStr);
      const year = parseInt(yearStr);

      if (isNaN(month) || isNaN(day) || isNaN(year)) {
        // Invalid month, day, or year
        return null;
      }

      // Format the date as "YYYY-MM-DD HH:mm:ss"
      const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")} 00:00:00`;

      return formattedDate;
    }

    let createCompetitionInputPart: {
      date: string;
      name: string;
      nation: MutationCreateCompetitionsArgs["input"][0]["nation"];
    } = {
      date: "",
      name: "",
      nation: undefined,
    };
    cells.forEach((cell, i) => {
      switch (i) {
        /**
         * The first cell contains the competition name
         */
        case 0:
          const name = cell.textContent;
          if (name === null) {
            throw new Error("Could not parse required competition name");
          }
          createCompetitionInputPart.name = name;
          break;

        /**
         * The second cell contains the competition date
         */
        case 1:
          const date = parseDates(
            cell.textContent?.replace(/\n/g, "").replace(/\s+$/, "")
          );
          if (date === null) {
            throw new Error("Could not parse required competition date");
          }
          createCompetitionInputPart.date = date;
          break;

        /**
         * The third cell contains the competition location information
         */
        default:
          const location = parseCityAndNation(
            cell.textContent?.replace(/\n/g, "").replace(/\s+$/, "")!
          );
          if (location === null) {
            throw new Error("Could not parse required fields from location");
          }
          createCompetitionInputPart.nation = {
            connectOrCreate: {
              where: { node: { code: location.nationCode } },
              onCreate: {
                node: { code: location.nationCode },
                edge: { city: location.city },
              },
            },
          };

          break;
      }
    });
    return createCompetitionInputPart;
  });

  completeInput = {
    dataSources: competitionDataSourcesPart,
    ...competitionDetailsAndNationParts,
    sports: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: "WEIGHTLIFTING",
            },
          },
          onCreate: {
            node: {
              name: "WEIGHTLIFTING",
            },
          },
        },
      ],
    },
  };

  return completeInput;
}
