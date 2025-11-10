// routes/auth.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/adminMiddleware');
const { registerUser, loginUser, deleteUser } = require('../controllers/authController');

// @route    POST api/auth/register
// @desc     Register user
// @access   Public
router.post('/register', registerUser);

// @route    POST api/auth/login
// @desc     Authenticate user & get token
// @access   Public
router.post('/login', loginUser);

router.delete('/delete/:id', auth, isAdmin, deleteUser);

module.exports = router;
