# Todo App

A simple Node.js Todo application with MongoDB.

## Features

- Create a new todo
- Retrieve all todos
- Update a todo
- Delete a todo

## Getting Started

### Prerequisites

- Node.js (version 18.15.0 +)
- MongoDB (running locally)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/todo-app.git
    cd todo-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up your MongoDB database:**

    Update the database configuration in `config/database.js` if necessary.

4. **Start the application:**

    ```bash
    npm start
    ```

## Dependencies

- Express.js
- Mongoose


## API Endpoints

- **GET /todo/get/all :** Retrieve all todos
- **POST /todo/create :** Create a new todo
- **PUT /todo'/update/:id:** Update a todo
- **DELETE /todo/delete/:id:** Delete a todo