import React from 'react';
import './App.scss';
import HomePage from "./components/pages/Home/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProjectPage from "./components/pages/Project/ProjectPage";
import {Project, projects} from "./utils/Projects";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
