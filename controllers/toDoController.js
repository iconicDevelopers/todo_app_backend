const ToDoModel = require("../models/todoModel");

// Create Data
const createData = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Create a new instance of the model
    const newTodo = new ToDoModel({
      title,
      description,
    });

    // Save the new todo item to the database
    await newTodo.save();
    console.log(newTodo);
    // Respond with the created todo
    res.status(201).json(newTodo);
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: "Failed to create todo" });
  }
};

// read data
const fetchData = async (req, res) => {
  try {
    const todos = await ToDoModel.find();
    res.status(200).json(todos);
    console.log(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "unable to get a Data" });
  }
};

// Update data
const updateDate = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = await ToDoModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateData);
    console.log(updateData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "unable to update a data" });
  }
};

// Delete data
const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    await ToDoModel.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "unable to delete a data" });
  }
};

module.exports = { createData, fetchData, updateDate, deleteData };
