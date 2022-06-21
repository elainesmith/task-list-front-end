import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, setCompleteCallback}) => {
  // const [complete, setComplete] = useState(isComplete);
  const complete = isComplete;
  const buttonClass = complete ? 'tasks__item__toggle--completed' : '';


  const toggleComplete = () => {
    setCompleteCallback(id);
    // setComplete(!complete);

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
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  setCompleteCallback: PropTypes.func.isRequired
};

export default Task;
