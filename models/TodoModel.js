const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  content: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const TodoModel = mongoose.model('apollo', todoSchema);

module.exports = TodoModel;