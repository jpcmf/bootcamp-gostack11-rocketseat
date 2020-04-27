import React, { useState } from 'react';

import Header from './components/Header';

import './App.css';

// import { Container } from './styles';

export default function App() {
  const [projects, setProjects] = useState(['Dev de app', 'Front-end web']);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Home" />
      <ul>
        {projects.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Add project
      </button>
    </>
  );
}
