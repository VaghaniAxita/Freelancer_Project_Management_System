import React, { useState } from 'react';

const ProjectForm = ({ onAddProject }) => {
  const [name, setName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('active');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && dueDate) {
      onAddProject({ name, dueDate, status });
      setName('');
      setDueDate('');
    }
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h3>Add Project</h3>
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;
