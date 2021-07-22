const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
  idRestaurant: { type: Schema.Types.ObjectId, required: true }
})

module.exports = Comment = mongoose.model('Comment', commentSchema);