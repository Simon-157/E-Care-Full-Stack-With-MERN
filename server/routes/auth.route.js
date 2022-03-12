const express = require('express')
const authenticateUser = require('../controllers/auth.cont')


const router = express.Router();

router.post('/api/google-login', authenticateUser);

module.exports = router;