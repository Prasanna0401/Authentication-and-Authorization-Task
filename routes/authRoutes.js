const express = require('express');
const { register, login } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user', verifyToken, (req, res) => {
    res.json({ userId: req.userId, username: req.username });
});

module.exports = router;