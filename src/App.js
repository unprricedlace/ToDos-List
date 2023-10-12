import { useEffect, useState } from "react";
import "./App.css";

import ToDo from "./components/ToDo.js";
import {
  getalltask,
  addToDo,
  getAllTodo,
  updateToDo,
  deleteToDo,
} from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [deadline, setdeadline] = useState("");
  const [isUpdating, setisUpdating] = useState(false);
  const [todoId, settodoId] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [task, settask] = useState([]);

  const handleDropdownChange = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    getAllTodo(setToDo);
    getalltask(settask);
  }, []);

  const updateMode = (_id, text, deadline) => {
    setisUpdating(true);
    setText(text);
    setdeadline(deadline);
    settodoId(_id);
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <h1>ToDoApp</h1>
          <div className="top">
            <select value={selectedValue} onChange={handleDropdownChange}>
              {task.map((it) => (
                <option value={it.text}>{it.text}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="add todo"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <input
              type="text"
              placeholder="add deadline"
              value={deadline}
              onChange={(e) => setdeadline(e.target.value)}
            />
            <div
              className="add"
              onClick={
                isUpdating
                  ? () =>
                      updateToDo(
                        todoId,
                        text,
                        deadline,
                        setToDo,
                        setText,
                        setdeadline,
                        setisUpdating
                      )
                  : () => {
                      addToDo(
                        text,
                        deadline,
                        selectedValue,
                        setdeadline,
                        setText,
                        setSelectedValue,
                        setToDo
                      );
                    }
              }
            >
              {isUpdating ? "Update" : "Add"}
            </div>
          </div>
          <div className="list">
            {toDo.map((item) => (
              <ToDo
                key={item._id}
                text={item.text}
                deadline={item.deadline}
                task={item.task}
                updateMode={() =>
                  updateMode(item._id, item.text, item.deadline)
                }
                deleteToDo={() => deleteToDo(item._id, setToDo)}
              />
            ))}
            <ToDo text="hii" deadline="today" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
