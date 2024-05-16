import React from "react";
import { ProjectContextProvider } from "@/contexts/ProjectContext";
import HomeProvider from "@/layout/HomeProvider";

const LayoutProject = ({ children }: IChildren) => {
  return (
    <ProjectContextProvider>
      <HomeProvider>{children}</HomeProvider>
    </ProjectContextProvider>
  );
};

export default LayoutProject;
