import React from "react";

import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ text, updateMode, deleteToDo, deadline, task }) => {
  return (
    <div className="todo">
      <div className="text">{task} {text} {deadline}</div>
      <div className="icons">
        <BiEdit className="icons" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
