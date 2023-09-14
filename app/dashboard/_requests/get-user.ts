import { options } from "../../api/auth/options";
import { getServerSession } from "next-auth";

export async function getUser() {
  const session = await getServerSession(options);
  const user = session?.user;
  return user;
}
