const router = require('express').Router();
let User = require('../models/Users');
const { loginUser,registerUser } = require('../controllers/AuthController');


router.post('/login',loginUser);
router.post('/register',registerUser);


module.exports = router;