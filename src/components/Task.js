import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, setCompleteCallback, deleteTaskCallback}) => {
  // const [complete, setComplete] = useState(isComplete);
  const complete = isComplete;
  const buttonClass = complete ? 'tasks__item__toggle--completed' : '';


  const toggleComplete = () => {
    setCompleteCallback(id);
    // setComplete(!complete);
  };

  const deleteTask = () => {
    deleteTaskCallback(id);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        // onClick={() => setComplete(!complete)}
          onClick={() => toggleComplete()}
      >
        {title}
      </button>
      <button className="tasks__item__remove button" onClick={() => deleteTask()}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  setCompleteCallback: PropTypes.func.isRequired,
  deleteTaskCallback: PropTypes.func.isRequired
};

export default Task;
