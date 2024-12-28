import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DeveloperForm from './Components/DeveloperForm';
import ProjectForm from './Components/ProjectForm';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/DeveloperForm" element={<DeveloperForm />} />
        <Route path="/project" element={<ProjectForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
