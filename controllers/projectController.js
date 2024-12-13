const Project = require('../models/Project');
const csv = require('csv-parser');
const fs = require('fs');

exports.getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

exports.createProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.json(project);
};

exports.updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(project);
};

exports.deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Project deleted' });
};

exports.exportProjectsCSV = async (req, res) => {
  const projects = await Project.find();
  const csvData = projects.map(project => ({
    id: project._id,
    name: project.name,
    description: project.description,
    status: project.status
  }));

  res.attachment('projects.csv');
  res.send(csvData);
};

exports.importProjectsCSV = (req, res) => {
  const filePath = req.file.path;

  const projects = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => projects.push(data))
    .on('end', async () => {
      await Project.insertMany(projects);
      res.json({ message: 'Projects imported successfully' });
    });
};
