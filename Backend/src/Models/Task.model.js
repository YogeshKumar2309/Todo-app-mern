const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  taskName: {
    type: String,
    required: true
  },
  taskDate:{
    type: Date,
    default: Date.now
  },
  isDone: {
    type: Boolean,
    default: false
  },
  doneAt: {
    type: Date,
    default: null
  }
},
{
  timestamps: true
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;