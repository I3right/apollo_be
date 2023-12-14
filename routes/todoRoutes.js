const express = require('express');
const TodoController = require('../controllers/TodoController');

const router = express.Router();
const todoController = new TodoController();

router.post('/create', (req, res) => todoController.createTodo(req, res));
router.get('/get/all', (req, res) => todoController.getTodos(req, res));
router.put('/update/:id', (req, res) => todoController.updateTodo(req, res));
router.delete('/delete/:id', (req, res) => todoController.deleteTodo(req, res));

module.exports = router;