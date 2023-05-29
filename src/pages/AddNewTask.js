import React from "react";
import Form from "../components/task/Form";

function componentName() {
  return (
    <div class="container relative">
      <main class="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <h1 class="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
          Create Task for Your Team
        </h1>

        <Form />
      </main>
    </div>
  );
}

export default componentName;
