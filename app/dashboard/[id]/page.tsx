export default function ProjectDetails({ params }: { params: { id: string } }) {
  const { id } = params;
  return <>Project Details {id}</>;
}
