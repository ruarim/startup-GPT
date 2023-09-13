import { getServerSession } from "next-auth";
import { options } from "../api/auth/options";
import Login from "@/components/auth/login";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  console.log(user);

  if (!user)
    return (
      <div className="w-full h-screen flex justify-center items-center px-3">
        <Login />
      </div>
    );

  return <div>{children}</div>;
}

export async function getUser() {
  const session = await getServerSession(options);
  const user = session?.user;
  return user;
}
