import React from "react";

function Task() {
  return (
    <>
      <div class="flex items-center gap-2 text-slate">
        <h2 class="lws-date">26</h2>
        <h4 class="lws-month">March</h4>
      </div>

      <div class="lws-taskContainer">
        <h1 class="lws-task-title">Last over need 15 runs</h1>
        <span class="lws-task-badge color-scoreboard">Scoreboard</span>
      </div>
    </>
  );
}

export default Task;
