import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: `http://very.coffee:4000/graphql`,
  documents: "src/lib/**/*.ts",
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  emitLegacyCommonJSImports: false,
  ignoreNoDocuments: false,
};

export default config;
