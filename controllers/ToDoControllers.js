const ToDoModel = require("../models/ToDoModel.js");
const taskmodel =require("../models/catmodel.js")

module.exports.getToDo = async (req, res) => {
  const ToDo = await ToDoModel.find();
  res.send(ToDo);
};

module.exports.gettask = async (req, res) => {
  const task = await taskmodel.find();
  res.send(task);
};


module.exports.saveToDo = async (req, res) => {
  const { text, deadline, task } = req.body;
  console.log(task)
  ToDoModel.create({ text, deadline, task }).then((data) => {
    console.log("added successfully");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text, deadline } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text, deadline })
    .then(() => res.send("updated successfully"))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("deleted successfully"))
    .catch((err) => console.log(err));
};
