const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://pushpendra123b:itKDzBd4MDGlGKGv@second.pgjdyrc.mongodb.net/todo");

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const Todo = mongoose.model("Todo" , todoSchema)

module.exports = {
    Todo
}