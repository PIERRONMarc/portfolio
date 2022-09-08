import React from 'react';
import './App.scss';
import HomePage from "./components/pages/Home/HomePage";
import {HashRouter, Route, Routes} from "react-router-dom";
import ProjectPage from "./components/pages/Project/ProjectPage";
import {Project, projects} from "./utils/Projects";

function App() {
  return (
    <HashRouter basename="/">
        <Routes>
            <Route path="/" element={<HomePage />} />
            {projects.map((project: Project, key: number) => (
                <Route
                    path={project.uri}
                    element={<ProjectPage project={project} />}
                    key={key}
                />
            ))}
        </Routes>
    </HashRouter>
  );
}

export default App;
