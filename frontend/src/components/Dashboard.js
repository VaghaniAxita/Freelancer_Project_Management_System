import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Payments from './Payments';
import ProjectForm from './ProjectForm';
import { Bar } from 'react-chartjs-2';
import mockEarnings from '../data/mockEarnings';
import { generateId } from '../utils/helpers';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, { id: generateId(), ...project }]);
  };

  const updateProject = (id, updatedProject) => {
    setProjects(projects.map((p) => (p.id === id ? updatedProject : p)));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="earnings-overview">
        <h2>Earnings Overview</h2>
        <Bar
          data={{
            labels: mockEarnings.map((item) => item.month),
            datasets: [
              {
                label: 'Earnings',
                data: mockEarnings.map((item) => item.earnings),
                backgroundColor: 'rgba(75,192,192,0.4)',
              },
            ],
          }}
        />
      </div>

      <ProjectForm onAddProject={addProject} />

      <div className="project-list">
        <h2>Projects</h2>
        {projects.length === 0 ? (
          <p>No projects available. Add a project to get started!</p>
        ) : (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onUpdateProject={updateProject}
              onDeleteProject={deleteProject}
            />
          ))
        )}
      </div>

      <Payments />
    </div>
  );
};

export default Dashboard;
