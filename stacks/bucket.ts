import { Bucket, StackContext } from "sst/constructs";

export default function StartupGPTBucket({ stack }: StackContext) {
  const bucket = new Bucket(stack, "public");

  stack.addOutputs({
    BucketName: bucket.bucketName,
    BucketArn: bucket.bucketArn,
  });
}
