import React from "react";
import Project from "./Project";
import { useGetProjectsQuery } from "../../../features/getProjects/getProjectsApi";
function Projects() {
  const { data: projects, isError, isLoading } = useGetProjectsQuery();

  //decide what to render
  console.log(projects);

  let content = null;

  if (isLoading) {
    content = <p>Loading....</p>;
  }

  if (!isLoading && isError) {
    content = <p>There was an error</p>;
  }
  if (!isLoading && !isError && projects?.length === 0) {
    content = <p>No project found</p>;
  }
  if (!isLoading && !isError && projects?.length > 0) {
    content = projects.map((project) => {
      const { projectName, colorClass } = project;
      return (
        <Project
          key={project.id}
          projectName={projectName}
          colorClass={colorClass}
        />
      );
    });
  }

  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
}

export default Projects;
