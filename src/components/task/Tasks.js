import React from "react";
import Task from "./Task";
import Assign from "../assign/Assign";

function Tasks() {
  return (
    <div class="lws-task-list">
      <Task />
      <Assign />
    </div>
  );
}

export default Tasks;
