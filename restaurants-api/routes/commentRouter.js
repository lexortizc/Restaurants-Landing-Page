const CommentController = require('../controllers/commentController');
const express = require('express');

const router = express.Router();

router.get("/:id", CommentController.findAll);
router.post("/add", CommentController.addOne);

module.exports = router;