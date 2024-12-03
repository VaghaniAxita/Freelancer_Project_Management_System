const fs = require('fs');
const csvParser = require('csv-parser');
const { parse } = require('json2csv');
const Project = require('../models/Project');


const exportProjectsToCSV = async (req, res) => {
  try {
    const projects = await Project.find({ createdBy: req.user });
    const csv = parse(projects.map(project => project.toObject()));
    res.attachment('projects.csv').send(csv);
  } catch (error) {
    res.status(500).json({ error: 'Failed to export projects' });
  }
};


const importProjectsFromCSV = async (req, res) => {
  const projects = [];
  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on('data', data => projects.push(data))
    .on('end', async () => {
      try {
       
        const enrichedProjects = projects.map(project => ({
          ...project,
          createdBy: req.user,
        }));
        await Project.insertMany(enrichedProjects);
        res.json({ message: 'Projects imported successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to import projects' });
      }
    });
};

module.exports = { exportProjectsToCSV, importProjectsFromCSV };
