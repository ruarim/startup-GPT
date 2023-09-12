import { RDS, StackContext } from "sst/constructs";

export default function StartupGPTDatabase({ stack }: StackContext) {
  const cluster = new RDS(stack, "Cluster", {
    engine: "postgresql11.13",
    defaultDatabaseName: "startupgptdb", //env variable
    migrations: "services/migrations",
  });

  stack.addOutputs({
    database: cluster.clusterEndpoint.hostname,
    database_port: cluster.clusterEndpoint.port.toString(),
    database_socket: cluster.clusterEndpoint.socketAddress.toString(),
  });

  return cluster;
}
