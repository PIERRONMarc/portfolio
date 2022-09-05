import React from 'react';
import './App.scss';
import HomePage from "./components/pages/Home/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
