"use client";
import { useTransition } from "react";
import Button from "../../_components/ui/button";

export default function NewProject({ user_id }: { user_id: number }) {
  const [isPending, startTransition] = useTransition();

  const handleNewProject = () => {
    console.log("New Project");
    // startTransition(() => createProject(user_id));
  };

  return <Button onClick={handleNewProject}>New Project</Button>;
}
