import { Bucket } from "sst/node/bucket";
import { db } from "../../../services/db/client/postgres";

export async function firstOrCreateUser(email: string) {
  console.log(Bucket.public.bucketName);

  const user = await db
    .insertInto("user")
    .values({
      email: email,
    })
    .onConflict((oc) => oc.column("email").doNothing())
    .returningAll()
    .executeTakeFirst();

  console.log(user);

  return user;
}
