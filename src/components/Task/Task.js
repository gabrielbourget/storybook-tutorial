import React from "react";

const Task = (props) => {
  const {
    task: { id, title, state },
    onArchiveTask, oonPinTask,
  } = props;

  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}

export default Task;