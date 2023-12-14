const TodoModel = require('../models/TodoModel');

class TodoController {
  async createTodo(req, res) {
    const { content, completed } = req.body;
    try {
      const newTodo = await TodoModel.create({ content,completed });
      res.status(200).json(newTodo);
    } catch (error) {
      console.error('Error creating todo:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getTodos(req, res) {
    try {
      const todos = await TodoModel.find();
      res.status(200).json(todos);
    } catch (error) {
      console.error('Error getting todos:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateTodo(req, res) {
    const { id } = req.params;
    const {value} = req.body;
    try {
      const updatedTodo = await TodoModel.findByIdAndUpdate(id, {completed: value});
      if (!updatedTodo) {
        res.status(404).json({ error: 'Todo not found' });
      } else {
        res.status(200).json(updatedTodo);
      }
    } catch (error) {
      console.error('Error updating todo:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteTodo(req, res) {
    const { id } = req.params;
    try {
      const deletedTodo = await TodoModel.findByIdAndDelete(id);
      if (!deletedTodo) {
        res.status(404).json({ error: 'Todo not found' });
      } else {
        res.status(200).send();
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = TodoController;