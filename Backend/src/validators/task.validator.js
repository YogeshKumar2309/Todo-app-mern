// validators/taskValidator.js
const { body } = require('express-validator');

exports.addTaskValidator = [
  body('taskName')
    .notEmpty().withMessage('Task name is required')
    .isLength({ min: 3 }).withMessage('Task name must be at least 3 characters'),
  body('taskDate')
    .optional()
    .isISO8601().withMessage('Invalid date format'),
  body('isDone')
    .optional()
    .isBoolean().withMessage('isDone must be a boolean'),
  body('doneAt')
    .optional()
    .isISO8601().withMessage('Invalid doneAt date'),
];

exports.updateTaskValidator = [
  body('taskName')
    .optional()
    .notEmpty().withMessage('Task name cannot be empty'),
  body('taskDate')
    .optional()
    .isISO8601().withMessage('Invalid date'),
  body('isDone')
    .optional()
    .isBoolean().withMessage('isDone must be a boolean'),
  body('doneAt')
    .optional()
    .isISO8601().withMessage('Invalid doneAt date'),
];
