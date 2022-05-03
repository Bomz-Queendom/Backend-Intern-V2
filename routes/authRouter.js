const { villagerSignUp, agentSignUp, getProfile, Login } = require('../controller/authController');
const { auth, midVillagerSignUp, midAgentSignUp, midLogin, address } = require('../middleware/authMiddleware');
const router = require('express').Router();

router.post('/villagerSignUp', midVillagerSignUp, address, villagerSignUp);
router.post('/agentSignUp', midAgentSignUp, agentSignUp);
router.post('/Login', midLogin, Login);
router.get('/myProfile', auth, getProfile);

module.exports = router;