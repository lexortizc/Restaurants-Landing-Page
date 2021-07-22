const Comment = require('../models/CommentModel');

const findAll = (req, res) => {
  Comment.find({ idRestaurant: req.params.id }, (err, comments) => {
    err && res.send(500).send(err.message);

    res.status(200).json(comments);
  }).sort({ date : "desc"})
}

const addOne = (req, res) => {
  console.log(req);
  let comment = new Comment({
    user: req.body.user,
    comment: req.body.comment,
    idRestaurant: req.body.idRestaurant
  });

  comment.save((err, comment) => {
    err && res.status(500).send(err.message);

    res.status(201).json(comment);
  });
}

module.exports = { findAll, addOne };