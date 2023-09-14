import { getServerSession } from "next-auth";
import { options } from "../api/auth/options";
import Login from "../_components/auth/login";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);

  if (!session)
    return (
      <div className="w-full h-screen flex justify-center items-center px-3">
        <Login />
      </div>
    );

  //add mobile layout
  return <div className="grid grid-cols-10 h-screen">{children}</div>;
}
