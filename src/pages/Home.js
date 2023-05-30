import React from "react";
import Projects from "../components/sidebar/project/Projects";
import Teams from "../components/sidebar/team/Teams";
import AddTask from "../components/task/AddTask";
import Tasks from "../components/task/Tasks";

function Home() {
  return (
    <div className="container relative">
      <div className="sidebar">
        <Projects />

        <Teams />
      </div>

      <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
        <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
          <AddTask />

          <div className="lws-task-list">
            <Tasks />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
