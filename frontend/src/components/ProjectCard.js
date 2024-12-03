import React, { useState } from 'react';

const ProjectCard = ({ project, onUpdateProject, onDeleteProject }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProject, setEditedProject] = useState(project);

  const handleSave = () => {
    onUpdateProject(project.id, editedProject);
    setIsEditing(false);
  };

  return (
    <div className="project-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedProject.name}
            onChange={(e) => setEditedProject({ ...editedProject, name: e.target.value })}
          />
          <input
            type="date"
            value={editedProject.dueDate}
            onChange={(e) => setEditedProject({ ...editedProject, dueDate: e.target.value })}
          />
          <select
            value={editedProject.status}
            onChange={(e) => setEditedProject({ ...editedProject, status: e.target.value })}
          >
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{project.name}</h3>
          <p>Due: {project.dueDate}</p>
          <p>Status: {project.status}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => onDeleteProject(project.id)}>Delete</button>
    </div>
  );
};

export default ProjectCard;
