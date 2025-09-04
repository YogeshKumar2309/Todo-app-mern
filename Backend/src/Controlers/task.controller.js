const Task = require('../Models/Task.model');

exports.addTask = async (req, res) => {
  try {
    const {taskName, taskDate, isDone, doneAt} = req.body;
    
    const newTask = new Task({
      taskName,
      taskDate: taskDate || Date.now(),
      isDone: typeof isDone === 'boolean' ? isDone : false,
      doneAt: isDone ? (doneAt || Date.now()) : null,
    });

    await newTask.save();
    res.status(201).json({message: "Task added successfully", task: newTask});

  } catch (error) {
    res.status(500).json({message: "Server error while adding task", error: error.message});
  } 
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const {taskName, taskDate, isDone, doneAt} = req.body;  
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({message: "Task not found"});
    }
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        taskName,
        taskDate: taskDate || Date.now(),
        isDone: typeof isDone === 'boolean' ? isDone : false,
        doneAt: isDone ? (doneAt || Date.now()) : null,
      },
      { new: true }
    );
    res.status(200).json({message: "Task updated successfully", updatedTask});  
  } catch (error) {
    res.status(500).json({message: "Server error while updating task", error: error.message});
  }  
}

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskId = await Task.findById(id);
    if (!taskId) {
      return res.status(404).json({message: "Task not found"});
    }

    const task = await  Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({message: "Task not found"} );
    }
    res.status(200).json({message: "Task deleted successfully"});
  } catch (error) {
    res.status(500).json({message: "Server error while deleting task", error: error.message});
  } 

}  


exports.getAllTasks = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 4;
  const status = req.query.status; // 'pending' or 'done'

  const skip = (page - 1) * limit;

    // Build filter dynamically
  const filter = {};
  if (status === 'pending') filter.isDone = false;
  if (status === 'done') filter.isDone = true;


  try {
    const tasks = await Task.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    const total = await Task.countDocuments(filter);
    const countTotalPage = Math.ceil(total / limit);
     res.status(200).json({
    tasks,
    total,               // total tasks
    totalPages: countTotalPage, // total pages
    currentPage: page,   // ✅ current page added
    limit,               // ✅ limit info
  });
  } catch (error) {
    res.status(500).json({error: `Server Error`})
  }
}

exports.getTask = async (req, res) => {
  const task = await Task.findById(id);
  if(!task || task.lenght === 0){
    return res.status(404).json({message: "No task found"});
  }
  res.status(200).json({message: "Task retrieved successfully", task});
}


exports.searchTask = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: "Query is required" });
  }

  try {
    // 1. Fetch all tasks sorted by createdAt (same as normal listing)
    const allTasks = await Task.find().sort({ createdAt: -1 });

    // 2. Filter tasks by search query
    const matchedTasks = allTasks
      .map((task, index) => ({
        ...task.toObject(),
        position: index // original index in the sorted list
      }))
      .filter(task =>
        task.taskName.toLowerCase().includes(query.toLowerCase())
      );

    // 3. Sort: prefix match first
    matchedTasks.sort((a, b) => {
      const aStarts = a.taskName.toLowerCase().startsWith(query.toLowerCase()) ? 0 : 1;
      const bStarts = b.taskName.toLowerCase().startsWith(query.toLowerCase()) ? 0 : 1;
      return aStarts - bStarts;
    });

    // 4. Limit first 3
    const limitedTasks = matchedTasks.slice(0, 2);

    res.status(200).json({ tasks: limitedTasks });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};






