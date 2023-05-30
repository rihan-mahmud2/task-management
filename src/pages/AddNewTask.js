import React from "react";

import AddForm from "../components/task/AddForm";

function AddNewTask() {
  return (
    <div className="container relative">
      <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
          Create Task for Your Team
        </h1>

        <AddForm />
      </main>
    </div>
  );
}

export default AddNewTask;
