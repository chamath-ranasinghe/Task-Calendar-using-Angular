const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Path to the JSON file
const filePath = path.join(__dirname, 'db.json');

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to read JSON data from file
const readTasks = () => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

// Helper function to write JSON data to file
const writeTasks = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf-8');
};

// GET endpoint to retrieve tasks
app.get("/tasks", (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

// DELETE endpoint to delete a task by ID
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id); // Convert id to number
    let tasks = readTasks(); // Read tasks from file

    const taskToRemove = tasks.find(task => task.id === id); // Find the task to delete

    if (taskToRemove) {
        tasks = tasks.filter(task => task.id !== id); // Remove the task
        writeTasks(tasks); // Write the updated tasks back to the file
        console.log(tasks);
        res.json(taskToRemove); // Respond with the removed task
    }

    res.status(404).json({ message: "Task not found" }); // Respond with 404 if not found
});

// PUT endpoint to add a task
app.put("/tasks", (req, res) => {
    let tasks = readTasks(); // Read tasks from file

    // Auto-generate a new ID
    const newId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;

    let newTask = {id:newId, ...req.body};

    tasks.push(newTask);

    writeTasks(tasks);

    res.json(newTask);
});

// Start the server
app.listen(8080, () => {
    console.log("Server Successfully Running on http://localhost:8080");
});
