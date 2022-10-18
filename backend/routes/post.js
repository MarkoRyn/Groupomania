const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post');

router.get('/posts', postCtrl.getAllPosts);
router.post('/posts', auth, multer, postCtrl.createPost);
router.get('/posts/:id', postCtrl.getOnePost);
router.put('/posts/:id', auth, multer, postCtrl.modifyPost);
router.delete('/posts/:id', auth, postCtrl.deletePost);
router.post('/posts/:id/like', auth, postCtrl.likePost);


module.exports = router;