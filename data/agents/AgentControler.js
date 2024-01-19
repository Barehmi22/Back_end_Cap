
const { create,
    getAll,
    getById,
    updateById,
    deleteById,
    register,
    
    login} = require('./AgentService');
const createAgent = async (req,res)=>{
    
    try {
        const newAgent = await create (req.body);
        console.log(req.body);
        res.json(newAgent);
    } catch (error){
        res.status(500).json({error:error.message});
    }
};
const getAllAgents = async (req,res)=>{
    try {
        const allAgents = await getAll();
        res.json(allAgents);
    }catch (error){
        res.status(500).json({error:error.message});
    }};
    
const getAgentById = async (req,res)=>{
    try{
    const Agent = await getById(req.params.id);
   if (!Agent) {
    return res.status(404).json({message:'Agent not found'});
   }  res.json(Agent);  
} catch (error){
    res.status(500).json({error:error.message});
}};

const updateAgentById = async (req,res)=>{
    try {
        const updatedAgent = await updateById (req.params.id, req.body);
        if (!updatedAgent){
            return res.status(404).json({message: 'Agent not found'});
        }
        res.json(updatedAgent);
    } catch (error) {
        res.status(500).json({error:error.message});
    }};

const deletedAgentById = async (req, res)=>{
    try {
        const deletedAgent = await deleteById(req.params.id);
        if (!deletedAgent){
            return res.status(404).json({message: 'Agent not found'});
            }
            res.json(deletedAgent);
}   catch (error) {
    res.status(500).json({error:error.message});
}};

const AgentRegister = async (req, res) => {
    try {
        console.log('eeeee',req.body);
      const { agent, token } = await register(req.body);
      console.log( agent, token);
      res.json({ agent, token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const AgentLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const { agent, token } = await login(email, password);
      res.json({ agent, token });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  };

module.exports ={ createAgent, getAllAgents, getAgentById,updateAgentById,deletedAgentById,AgentLogin,AgentRegister};