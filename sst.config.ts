import { SSTConfig } from "sst";
import Database from "./stacks/database";
import Bucket from "./stacks/bucket";
import Api from "./stacks/api";
import Frontend from "./stacks/frontend";

export default {
  config(_input) {
    return {
      name: "startup-gpt",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app.stack(Database).stack(Bucket).stack(Api).stack(Frontend);
  },
} satisfies SSTConfig;
