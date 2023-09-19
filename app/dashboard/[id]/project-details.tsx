import getProject from "../_requests/get-project";

export default async function ProjectDetails({
  user_id,
  project_id,
}: {
  user_id: string;
  project_id: number;
}) {
  //const project = await getProject(project_id);

  return true ? <>is</> : <></>;
}
