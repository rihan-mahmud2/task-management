import React, { useState } from "react";
import {
  useGetMemberQuery,
  useGetTeamQuery,
} from "../../features/getTeam/getTeamApi";
import {
  useGetProjectQuery,
  useGetProjectsQuery,
} from "../../features/getProjects/getProjectsApi";
import {
  useAddTaskMutation,
  useEditTaskMutation,
} from "../../features/getTasks/getTasksApi";

function AddForm() {
  const { data: teamMembers } = useGetTeamQuery();
  const { data: projects } = useGetProjectsQuery();

  const [addTask, { isError, isLoading }] = useAddTaskMutation();
  const [to, setTo] = useState("");
  const [projectName, setProjectName] = useState("");
  const [deadline, setDeadline] = useState("");
  const teamMember = teamMembers?.find((teamMember) => teamMember?.name === to);
  const project = projects?.find(
    (project) => project?.projectName === projectName
  );

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      taskName: name,
      teamMember,
      project,
      deadline,
    });
  };

  return (
    <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="fieldContainer">
          <label for="lws-taskName">Task Name</label>
          <input
            type="text"
            name="taskName"
            id="lws-taskName"
            required
            placeholder="Implement RTK Query"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="fieldContainer">
          <label>Assign To</label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            name="teamMember"
            id="lws-teamMember"
            required
          >
            <option value="" hidden selected>
              Select Job
            </option>
            {teamMembers?.map((member) => (
              <option key={member?.id}>{member?.name}</option>
            ))}
          </select>
        </div>
        <div className="fieldContainer">
          <label for="lws-projectName">Project Name</label>
          <select
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            id="lws-projectName"
            name="projectName"
            required
          >
            <option value="" hidden selected>
              Select Project
            </option>
            <option>Scoreboard</option>
            {projects?.map((project) => (
              <option key={project?.id}>{project?.projectName}</option>
            ))}
          </select>
        </div>

        <div className="fieldContainer">
          <label for="lws-deadline">Deadline</label>
          <input
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            type="date"
            name="deadline"
            id="lws-deadline"
            required
          />
        </div>

        <div className="text-right">
          <button disabled={isLoading} type="submit" className="lws-submit">
            Save
          </button>
          {isError && <p>There was an error adding the task</p>}
        </div>
      </form>
    </div>
  );
}

export default AddForm;
