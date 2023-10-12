import axios from "axios";

const baseurl = "http://localhost:3001";

const getalltask = (settask) => {
  axios.get(`${baseurl}/task`).then(({ data }) => {
    console.log("data---->", data);
    settask(data);
  });
};

const getAllTodo = (setToDo) => {
  axios.get(baseurl).then(({ data }) => {
    console.log("data---->", data);
    setToDo(data);
  });
};

const addToDo = (
  text,
  deadline,
  selectedValue,
  setText,
  setdeadline,
  setSelectedValue,
  setToDo
) => {
  //console.log(selectedValue)
  axios
    .post(`${baseurl}/save`, { text, deadline, task: selectedValue })
    .then((data) => {
      console.log(data);
      setText("");
      setdeadline("");
      setSelectedValue("");
      getAllTodo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (
  todoId,
  text,
  deadline,
  setToDo,
  setText,
  setdeadline,
  setisUpdating
) => {
  axios
    .post(`${baseurl}/update`, { _id: todoId, text, deadline })
    .then((data) => {
      console.log(data);
      setText("");
      setdeadline("");
      setisUpdating(false);
      getAllTodo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (todoId, setToDo) => {
  axios
    .post(`${baseurl}/delete`, { _id: todoId })
    .then((data) => {
      console.log(data);
      getAllTodo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getalltask, getAllTodo, addToDo, updateToDo, deleteToDo };
