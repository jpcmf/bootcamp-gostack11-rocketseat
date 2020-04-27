import React, { useState, useEffect } from 'react';

import Header from './components/Header';

import './App.css';

// import { Container } from './styles';

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('/projects');

      setProjects(response.data);
    }

    loadProjects();
  }, []);

  async function handleAddProject() {
    const response = await api.post('/projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'João Paulo',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Home" />
      <ul>
        {projects &&
          projects.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Add project
      </button>
    </>
  );
}
