const express = require('express');
const router = express.Router();
const {
  createApplication,
  getAllApplications,
  getApplicationById,
  updateApplicationById,
  deletedApplicationById,
  getLastApplication
} = require('./ApplicationControler');

router.post('/last/:service', getLastApplication);
router.post('/', createApplication);
router.get('/', getAllApplications);
router.get('/:id', getApplicationById);
router.put('/:id', updateApplicationById);
router.delete('/:id', deletedApplicationById); 

module.exports = router;
