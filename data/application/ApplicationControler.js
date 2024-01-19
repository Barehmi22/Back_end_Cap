const { create, getAll, getById, updateById, deleteById ,getlast} = require('./ApplicationService');

const createApplication = async (req, res) => {
  try {
    const newApplication = await create(req.body);
    res.json(newApplication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllApplications = async (req, res) => {
  try {
    const allApplications = await getAll();
    res.json(allApplications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getApplicationById = async (req, res) => {
  try {
    const application = await getById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getLastApplication= async (req, res) => {
  try {
    console.log('contr',req.params.service);
    const application = await getlast(req.params.service);
    if (application.length === 0) {
      return res.status(404).json({ message: 'Application not found' });
    }
    
    res.json(application[0].code);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateApplicationById = async (req, res) => {
  try {
    const updatedApplication = await updateById(req.params.id, req.body);
    if (!updatedApplication) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.json(updatedApplication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletedApplicationById = async (req, res) => {
  try {
    const deletedApplication = await deleteById(req.params.id);
    if (!deletedApplication) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.json(deletedApplication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createApplication,
  getAllApplications,
  getApplicationById,
  updateApplicationById,
  deletedApplicationById,
  getLastApplication
};
