// TaskList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
    const [taskIdToEdit, setTaskIdToEdit] = useState(null);

  // Fetch tasks from the backend
  useEffect(() => {
    fetchTasks();
  }, []);

    const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("There was an error fetching tasks!", error);
    }
  };

  // Handle adding a task
  const handleAddTask = async () => {
    if (!taskName) return;
    try {
      const response = await axios.post("http://localhost:5000/tasks", {
        task_name: taskName,
        uid: "user1",
        important: false,
      });
      setTasks([...tasks, response.data]);
      setTaskName("");
    } catch (error) {
      console.error("There was an error adding the task!", error);
    }
  };

  // Handle editing a task
  const handleEditTask = async () => {
    if (!taskName) return;
    try {
      const response = await axios.put(
        `http://localhost:5000/tasks/${taskIdToEdit}`,
        {
          task_name: taskName,
          completed: false,
          important: false,
        }
      );
      setTasks(
        tasks.map((task) =>
          task.id === taskIdToEdit ? { ...task, task_name: taskName } : task
        )
      );
      setTaskName("");
      setTaskIdToEdit(null);
    } catch (error) {
      console.error("There was an error editing the task!", error);
    }
    };
    

  // Handle deleting a task
  const handleDeleteTask = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:5000/tasks/${id}`);
        if (response.data.deleted) {
            setTasks(response.data.tasks);
            
      } else {
        console.log("Error: Task not found");
      }
    } catch (error) {
      console.error("There was an error deleting the task!", error);
    }
    };
    
    const handleToggleImportant = async (id, important) => {
    try {
      const response = await axios.put(`http://localhost:5000/tasks/${id}`, {
        important: !important,
        completed: tasks.filter((ele) => ele.id === id)[0].completed,
        task_name:  tasks.filter((ele) => ele.id === id)[0].task_name,
      });

      if (response.data.message === "Task updated successfully") {
        setTasks(
          tasks.map((task) =>
            task.id === id ? { ...task, important: !important } : task
          )
        );
      }
    } catch (error) {
      console.error("Error updating task importance:", error);
    }
  };

      const handleToggleCompleted = async (id, completed) => {
        try {
          const response = await axios.put(
            `http://localhost:5000/tasks/${id}`,
            {
              completed: !completed,
              important: tasks.filter((ele) => ele.id === id)[0].important,
              task_name: tasks.filter((ele) => ele.id === id)[0].task_name,
            }
          );

          if (response.data.message === "Task updated successfully") {
            setTasks(
              tasks.map((task) =>
                task.id === id ? { ...task, completed: !completed } : task
              )
            );
          }
        } catch (error) {
          console.error("Error updating task completion:", error);
        }
      };


  return (
    <div className="bg-light rounded p-4">
      <h2 className="fs-17 fw-bold text-start mb-3 ">Task List</h2>

      <input
        className="rounded border-0 px-3 py-2 fs-6"
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <button
        className="border-0 fs-6 rounded-2 px-3 py-2 ms-2"
        onClick={taskIdToEdit ? handleEditTask : handleAddTask}
      >
        {taskIdToEdit ? "Edit Task" : "Add Task"}
      </button>

      <ul className="p-0 text-start hide-overflow">
        {tasks.length === 0 ? (
          <div className="text-center mt-5">Please add Task to show</div>
        ) : (
          tasks.map((task) => (
            <li
              key={task.id}
              className="list-unstyled pt-3 d-flex align-items-center border-bottom border-light pb-1 me-2 justify-content-between"
            >
              <div>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() =>
                    handleToggleCompleted(task.id, task.completed)
                  }
                />
                <span className="ms-2">{task.task_name}</span>
              </div>

              <div>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="border-0 bg-transparent"
                >
                  <MdDelete />
                </button>
                <button
                  className="border-0 bg-transparent"
                  onClick={() => {
                    setTaskName(task.task_name);
                    setTaskIdToEdit(task.id);
                  }}
                >
                  <MdEdit />
                </button>
                <button
                  className="border-0 bg-transparent"
                  onClick={() => handleToggleImportant(task.id, task.important)}
                >
                  {task.important ? <FaStar /> : <FaRegStar />}
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TaskList;
