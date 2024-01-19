const Application = require('./ApplicationModel');




const create = async (data) => {
  try {
    console.log(data);
    const maxCodeApp = await Application.find({ Services: data.Services }).sort({ code: -1 }).limit(1);
    
    let newCode = 1; 

    if (maxCodeApp.length > 0) {
      newCode = maxCodeApp[0].code + 1;
    }

    
    data.code = newCode;

    const newApplication = new Application(data);
    const savedApplication = await newApplication.save();
    
    console.log('New application created:', savedApplication);
    return savedApplication;
  } catch (error) {
    throw error;
  }
};


const getAll = async () => {
  try {
    const applications = await Application.find({});
    return applications;
  } catch (error) {
    throw error;
  }
};

const getById = async (id) => {
  try {
    const application = await Application.findById(id);
    return application;
  } catch (error) {
    throw error;
  }
};

const getlast = async (ser) => {
  try {
    console.log('service',ser);
    const application = await Application.find({ Services: ser, state: false }).sort({ code : +1 }).limit(1);
    console.log('result',application);
    return application;
  } catch (error) {
    throw error;
  }
};
// 

const updateById = async (id) => {
  try {
    console.log(id);
    const updatedApplication = await Application.findByIdAndUpdate(id, { state: true }, { new: true });
    return updatedApplication;
  } catch (error) {
    throw error;
  }
};


const deleteById = async (id) => {
  try {
    const deletedApplication = await Application.findByIdAndDelete(id);
    return deletedApplication;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
  getlast
};
