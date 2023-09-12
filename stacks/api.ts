import { Api, StackContext, use } from "sst/constructs";
import Database from "./database";

export default function StartupGPTApi({ stack }: StackContext) {
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        bind: [use(Database)],
      },
    },
    routes: {
      "POST /S3/upload-project-files/{user_id}/{project_id}":
        "functions/upload-project-file.ts",
    },
  });

  // Show the resource info in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
