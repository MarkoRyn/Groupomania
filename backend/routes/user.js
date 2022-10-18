const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/logout', userCtrl.logout);
router.get('/users', auth, userCtrl.getAllUsers);
router.get('/users/:id', auth, userCtrl.getUserData);
router.put('/users/:id', auth, multer, userCtrl.updateUser);
router.delete('/users/:id', auth, multer, userCtrl.deleteUser);

module.exports = router;