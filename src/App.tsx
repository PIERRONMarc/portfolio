import React from 'react';
import './App.scss';
import HomePage from "./components/pages/Home/HomePage";
import {HashRouter, Route, Routes} from "react-router-dom";
import ProjectPage from "./components/pages/Project/ProjectPage";
import {Project, projects} from "./utils/Projects";
import { init, track, Types } from '@amplitude/analytics-browser';

init('e0d700db356f1c500480cf5e321476be', undefined, {
    disableCookies: true, // Disables the use of browser cookies
    serverZone: Types.ServerZone.EU, // Send data to Amplitude's EU servers
});

track('visit');

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
