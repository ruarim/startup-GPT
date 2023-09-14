import { getUser } from "./_requests/get-user";
import Projects from "./projects";
import Prompt from "./prompt";

export default async function Dashboard() {
  const user = await getUser();

  return (
    user?.email && (
      <>
        <div className="col-span-2 bg-gray-900">
          <Projects user_id={user?.email} />
        </div>
        <div className="bg-gray-700 col-span-8">
          <Prompt />
        </div>
      </>
    )
  );
}
