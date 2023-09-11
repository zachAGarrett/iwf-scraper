import getCompetitionResults from "..";
import { MutationCreateAthletesArgs } from "../../../__generated__/graphql";

const createAthleteInputFromDataRow = (
  row: Awaited<ReturnType<typeof getCompetitionResults>>[0]["rows"][0],
  keys: Awaited<ReturnType<typeof getCompetitionResults>>[0]["keys"]
) => {
  const createAthleteInput: MutationCreateAthletesArgs["input"][0] = {
    birthday: null,
    competitions: {
      connect: [
        {
          edge: {
            rank: null,
            group: null,
            bodyweight: null,
          },
          where: {
            node: {
              date: null,
              id: null,
              name: null,
              nation: {
                name: null,
              },
            },
          },
        },
      ],
    },
    nations: {
      connectOrCreate: [
        {
          onCreate: {
            node: {
              code: String(row.find((cell) => cell.key === keys[2])?.value),
            },
          },
          where: { node: { code: null } },
        },
      ],
    },
    dataSources: {
      connect: [
        {
          edge: {
            entityId: null,
          },
          where: {
            node: {
              id: null,
            },
          },
        },
      ],
    },
    name: String(row.find((cell) => cell.key === keys[1])?.value),
  };
  return createAthleteInput;
};
export default createAthleteInputFromDataRow;
