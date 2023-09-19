import Link from "next/link";
import { Project } from "../../services/db/client/types";
import NewProject from "./_forms/new-project";
import getProjects from "./_requests/get-projects";

export default async function ProjectsList({ user_id }: { user_id: number }) {
  //const projects = await getProjects(user_id);
  return (
    <div className="p-2 space-y-2">
      <NewProject user_id={user_id} />
      <div>
        {/* {projects.length > 0 &&
        projects.map((project: Project) => (
          <ProjectRow key={project.id} name={project.name} />
        ))} */}
      </div>
    </div>
  );
}

function ProjectRow({ name, id }: { name: string; id: number }) {
  return (
    <Link href={`/dashboard/${id}`}>
      <div className="w-full p-3 rounded-md transition hover:bg-gray-600 hover:transition-all">
        {name}
      </div>
    </Link>
  );
}
