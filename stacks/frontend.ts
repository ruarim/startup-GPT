import { NextjsSite, StackContext, use } from "sst/constructs";
import Database from "./database";

export default function StartupGPTFrontend({ stack }: StackContext) {
  const site = new NextjsSite(stack, "site", {
    bind: [use(Database)],
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
}
