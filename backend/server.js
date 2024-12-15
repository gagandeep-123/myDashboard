// server.js
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // replace with your MySQL username
  password: "Gagandeep@123", // replace with your MySQL password
  database: "dashboard_manager",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

// Routes

// Get all tasks
app.get("/tasks", (req, res) => {
  db.query("SELECT * FROM tasks WHERE deleted_at IS NULL", (err, results) => {
    if (err) {
      console.error("Error fetching tasks:", err);
      return res.status(500).json({ message: "Server error" });
    }
    res.json(results);
  });
});

// Add a new task
app.post("/tasks", (req, res) => {
  const { task_name, uid, important } = req.body;

  db.query(
    "INSERT INTO tasks (task_name, uid, important) VALUES (?, ?, ?)",
    [task_name, uid, important],
    (err, result) => {
      if (err) {
        console.error("Error adding task:", err);
        return res.status(500).json({ message: "Server error" });
      }
      res.json({ id: result.insertId, task_name, uid, important });
    }
  );
});

// Update a task
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { task_name, completed, important } = req.body;

  db.query(
    "UPDATE tasks SET task_name = ?, completed = ?, important = ? WHERE id = ?",
    [task_name, completed, important, id],
    (err, result) => {
      if (err) {
        console.error("Error updating task:", err);
        return res.status(500).json({ message: "Server error" });
      }
      if (result.affectedRows > 0) {
        res.json({ message: "Task updated successfully" });
      } else {
        res.status(404).json({ message: "Task not found" });
      }
    }
  );
});

app.delete("/tasks/:id", (req, res) => {
  const taskId = req.params.id;

  // Delete task from the database
  const deleteQuery = "DELETE FROM tasks WHERE id = ?";

  db.query(deleteQuery, [taskId], (err, result) => {
    if (err) {
      console.error("Error deleting task:", err);
      return res.status(500).json({ message: "Error deleting task" });
    }

    // After deleting, fetch the updated task list
    const getTasksQuery = "SELECT * FROM tasks WHERE deleted_at IS NULL";

    db.query(getTasksQuery, (err, tasks) => {
      if (err) {
        console.error("Error fetching tasks:", err);
        return res.status(500).json({ message: "Error fetching tasks" });
      }

      // Return the updated task list in the response
      return res
        .status(200)
        .json({ message: "Task deleted successfully", tasks, deleted: true });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
