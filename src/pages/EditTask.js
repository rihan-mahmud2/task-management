import React from "react";

import { useGetTaskQuery } from "../features/getTasks/getTasksApi";
import { useParams } from "react-router-dom";
import EditForm from "../components/task/EdiForm";

function EditTask() {
  const { id } = useParams();
  const { data: task, isError, isLoading } = useGetTaskQuery(id);
  let content = null;

  if (isLoading) {
    content = <p>Loading.....</p>;
  } else if (!isLoading && isError) {
    content = <p>There was an error</p>;
  } else if (!isLoading && !isError && task?.id) {
    content = <EditForm task={task} />;
  }

  return (
    <div className="container relative">
      <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
          Create Task for Your Team
        </h1>

        {content}
      </main>
    </div>
  );
}

export default EditTask;
