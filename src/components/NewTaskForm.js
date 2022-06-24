import "./NewTaskForm.css";
import PropTypes from "prop-types";
import { useState } from "react";

const defaultTask = {title: '', isComplete: false};

const TaskForm = (props) => {
  const [taskData, setTaskData] = useState(defaultTask);

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newTaskData = { ...taskData };
    newTaskData[name] = value;
    setTaskData(newTaskData);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.handleSubmission(taskData);
  };

  return (
    <form onSubmit={handleFormSubmission}>
          <label>Title</label>
          <input
            name="title"
            type="text"
            value={taskData.title}
            onChange={handleFormInput}
          />
          <label>Is Complete?</label>
          <input
            name="isComplete"
            type="text"
            value={taskData.isComplete}
            onChange={handleFormInput}
          />
          <input type="submit" />
    </form>
  );
};

TaskForm.propTypes = {
  handleSubmission: PropTypes.func.isRequired,
};

export default TaskForm;