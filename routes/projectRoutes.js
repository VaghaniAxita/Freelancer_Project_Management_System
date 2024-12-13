const express = require('express');
const { getProjects, createProject, updateProject, deleteProject, exportProjectsCSV, importProjectsCSV } = require('../controllers/projectController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.get('/', getProjects);
router.post('/', createProject);
router.put('/:id',  updateProject);
router.delete('/:id',  deleteProject);
router.get('/export', exportProjectsCSV);
router.post('/import',  upload.single('file'), importProjectsCSV);

module.exports = router;
