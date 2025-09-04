const express = require('express');
const { addTask , updateTask ,deleteTask ,getAllTasks, getTask, searchTask} = require('../Controlers/task.controller');
const { addTaskValidator, updateTaskValidator } = require('../validators/task.validator');
const validate = require('../middlewares/validate')

const router = require('express').Router();


router.post('/addTask', addTaskValidator, validate, addTask );
router.put('/updateTask/:id',updateTaskValidator, validate, updateTask);
router.delete('/deleteTask/:id', deleteTask);
router.get('/', getAllTasks);
router.get('/search', searchTask);
router.get('/:id', getTask);



module.exports = router;


