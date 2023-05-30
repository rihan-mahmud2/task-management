import React, { useState } from "react";
import { useGetTeamQuery } from "../../features/getTeam/getTeamApi";
import { useGetProjectsQuery } from "../../features/getProjects/getProjectsApi";
import { useEditTaskMutation } from "../../features/getTasks/getTasksApi";
import { useNavigate } from "react-router-dom";

function EditForm({ task }) {
  const {
    teamMember: editTeamMeber,
    project: editProject,
    deadline: editDeadline,
    taskName: editName,
    id,
  } = task || {};

  const { name: editTo } = editTeamMeber || {};
  const { projectName: editProjectName } = editProject || {};

  const { data: teamMembers } = useGetTeamQuery();
  const { data: projects } = useGetProjectsQuery();

  const [editTask, { isError, isLoading, isSuccess }] = useEditTaskMutation();
  const [to, setTo] = useState(editTo);
  const [projectName, setProjectName] = useState(editProjectName);
  const [deadline, setDeadline] = useState(editDeadline);
  const teamMember = teamMembers?.find((teamMember) => teamMember?.name === to);
  const project = projects?.find(
    (project) => project?.projectName === projectName
  );
  const [name, setName] = useState(editName);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    editTask({
      id,
      data: {
        id,
        taskName: name,
        teamMember,
        project,
        deadline,
      },
    });

    if (isSuccess) {
      navigate("/");
    }
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
          {isError && <p>There was an error editing the task</p>}
        </div>
      </form>
    </div>
  );
}

export default EditForm;
