import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DeveloperForm from './Components/DeveloperForm';
import ProjectForm from './Components/ProjectForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DeveloperForm />} />
        <Route path="/project" element={<ProjectForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
