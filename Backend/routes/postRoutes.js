const express = require('express');
const { getAllPosts, createPost, getPostById } = require('../controllers/postController');
const authenticateJWT = require('../middleware/authMiddleware.js');

const router = express.Router();

router.get('/', authenticateJWT, getAllPosts);
router.post('/', authenticateJWT, createPost);
router.get('/:id', authenticateJWT, getPostById);

module.exports = router;
