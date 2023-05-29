import React from "react";
import Projects from "../components/sidebar/project/Projects";
import Teams from "../components/sidebar/team/Teams";
import AddTask from "../components/task/AddTask";
import Tasks from "../components/task/Tasks";

function Home() {
  return (
    <div class="container relative">
      <div class="sidebar">
        <Projects />

        <Teams />
      </div>

      <div class="lg:pl-[16rem] 2xl:pl-[23rem]">
        <main class="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
          <AddTask />

          <Tasks />
        </main>
      </div>
    </div>
  );
}

export default Home;
