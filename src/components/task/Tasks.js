import React from "react";
import Task from "./Task";

import { useGetTasksQuery } from "../../features/getTasks/getTasksApi";

function Tasks() {
  const { data: tasks, isError, isLoading } = useGetTasksQuery();
  let content = null;

  if (isLoading) {
    content = <p>Tasks are loading......</p>;
  } else if (!isLoading && isError) {
    content = <p>There was an error</p>;
  } else if (!isLoading && !isError && tasks?.length === 0) {
    content = <p>There is no content found</p>;
  } else if (!isLoading && !isError && tasks?.length > 0) {
    content = tasks.map((task) => <Task key={task.id} task={task} />);
  }

  return <>{content}</>;
}

export default Tasks;
