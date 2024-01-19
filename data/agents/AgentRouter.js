const express = require ('express');
const router = express.Router();
const { createAgent,
       getAllAgents,
       getAgentById,
       updateAgentById,
       deletedAgentById,AgentLogin,AgentRegister} = require('./AgentControler');


router.post('/', createAgent);
router.get('/', getAllAgents);
router.get('/:id', getAgentById);
router.put('/:id', updateAgentById);
router.delete('/:id', deletedAgentById);
router.post('/login', AgentLogin);
router.post('/register', AgentRegister);

module.exports = router;
