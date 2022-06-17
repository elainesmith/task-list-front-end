import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = (props) => {
  // console.log(props.tasks);

  const taskComponent = props.tasks.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      title={task.title}
      isComplete={task.isComplete}
    />
  ));
  // const getTaskListJSX = (props) => {
  //   return props.tasks.map((task) => {
  //     return (
  //       <Task
  //         key={task.id}
  //         id={task.id}
  //         title={task.title}
  //         isComplete={task.isComplete}
  //       />
  //     );
  //   });
  // };
  // return <ul className="tasks__list no-bullet">{getTaskListJSX(props)}</ul>;
  return <ul className="tasks__list no-bullet">{taskComponent}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default TaskList;
