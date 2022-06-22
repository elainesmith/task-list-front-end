import React from 'react';
import { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';

// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

const App = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    axios
      .get('https://task-list-api-c17.herokuapp.com/tasks')
      .then((response) => {
        const newTasks = response.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            isComplete: task.is_complete,
          };
        });
        setTasks(newTasks);
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
  };

  useEffect(() => {
    getTasks();
  }, [tasks]);

  const updateComplete = (id) => {
    const newTasks = tasks.map((task) => {
      const newTask = { ...task };
      if (newTask.id === id) {
        newTask.isComplete = !newTask.isComplete;
        let taskStatus = 'mark_complete';
        if (!newTask.isComplete) {
          taskStatus = 'mark_incomplete';
        }
        axios
          .patch(
            `https://task-list-api-c17.herokuapp.com/tasks/${id}/${taskStatus}`
          )
          // eslint-disable-next-line no-unused-vars
          .then((response) => {
            console.log(`Marked:, ${taskStatus}, Title: ${newTask.title}`);
          })
          .catch((error) => {
            console.log('ERROR', error);
          });
      }
      return newTask;
    });
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    axios
      .delete(`https://task-list-api-c17.herokuapp.com/tasks/${id}`)
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        console.log('Deleted Task');
        setTasks(newTasks);
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={tasks}
            setCompleteCallback={updateComplete}
            deleteTaskCallback={deleteTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
