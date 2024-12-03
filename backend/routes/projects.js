const express = require('express');
const multer = require('multer');
const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  exportProjects,
  importProjects,
} = require('../controllers/projectController');
const protect = require('../middleware/auth');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', protect, createProject);
router.get('/', protect, getAllProjects);
router.get('/:id', protect, getProjectById);
router.put('/:id', protect, updateProject);
router.delete('/:id', protect, deleteProject);
router.get('/export', protect, exportProjects);
router.post('/import', protect, upload.single('file'), importProjects);

module.exports = router;
