import React from 'react';
import {useState} from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);

  const updateComplete = (id) => {
    // console.log('inside updateComplete', id);
    const newTasks = tasks.map((task) => {
      const newTask = {...task};  
      if (newTask.id === id) {
        newTask.isComplete = !newTask.isComplete;
      }
      return newTask;
  });
    console.log(newTasks);
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
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
