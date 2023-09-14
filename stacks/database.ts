import { RDS, StackContext } from "sst/constructs";

export default function StartupGPTDatabase({ stack }: StackContext) {
  const cluster = new RDS(stack, "db", {
    engine: "postgresql11.13",
    defaultDatabaseName: "startupgptdb", //env variable
    migrations: "services/db/migrations",
    types: { path: "services/db/client/types.ts", camelCase: true },
  });

  stack.addOutputs({
    database: cluster.clusterEndpoint.hostname,
    database_port: cluster.clusterEndpoint.port.toString(),
    database_socket: cluster.clusterEndpoint.socketAddress.toString(),
  });

  return cluster;
}
