import { NextjsSite, StackContext } from "sst/constructs";

export default function StartupGPTFrontend({ stack }: StackContext) {
  const site = new NextjsSite(stack, "site");

  stack.addOutputs({
    SiteUrl: site.url,
  });
}
