const Agent = require("./AgentModel");

// create a new demande

const create = async (data) => {
  try {

    const newAgent = new Agent(data);
   
    const savedAgent = await newAgent.save();
   
    return savedAgent;
  } catch (error) {
    throw error;
  }
};

// Get all Agent

const getAll = async () => {
  try {
    const Agents = await Agent.find({});
    return Agents;
  } catch (error) {
    throw error;
  }
};

//  get all Agent by id

const getById = async (id) => {
  try {
    const agent = await Agent.findById(id);
    return agent;
  } catch (error) {
    throw error;
  }
};



//  update Agent by id
const updateById = async (id, newData) => {
  try {
    console.log(id, newData);
    const agent = await Agent.findById(id);
    console.log('newData.password',newData.password);
    if (newData.password) {
      newData.password = await agent.hash(newData.password);
    }
    console.log('rrrrr',newData);
    const updatedAgent = await Agent.findByIdAndUpdate(id, newData, { new: true });
    return (updatedAgent);
  } catch (error) {
    throw error;
  }
};


//    delete Agent by id

const deleteById = async (id) => {
  try {
    const deletedAgent = await Agent.findByIdAndDelete(id);
    return deletedAgent;
  } catch (error) {
    throw error;
  }
};
const register = async (data) => {
    try {
      const newAgent = new Agent(data);
      const savedAgent = await newAgent.save();
      const token = savedAgent.generateToken();
      return { agent: savedAgent, token };
    } catch (error) {
      throw error;
    }
  };
  
  const login = async (email, password) => {
    try {
      const agent = await Agent.findOne({ email });
      if (!agent) {
        throw new Error("Invalid email");
      }  
      const isPasswordValid = await agent.comparePassword(password);
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }
      const token = agent.generateToken();
      return { agent, token };
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
  register,
  login
};
