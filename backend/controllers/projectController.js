const Project = require('../models/Project');
const { exportProjectsToCSV, importProjectsFromCSV } = require('../utils/csvUtils');


const createProject = async (req, res) => {
  try {
    const project = await Project.create({ ...req.body, createdBy: req.user });
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create project' });
  }
};


const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({ createdBy: req.user });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve projects' });
  }
};


const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve project' });
  }
};


const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update project' });
  }
};


const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
};


const exportProjects = async (req, res) => {
  await exportProjectsToCSV(req, res);
};


const importProjects = async (req, res) => {
  await importProjectsFromCSV(req, res);
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  exportProjects,
  importProjects,
};
