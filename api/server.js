const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/stitchmark', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to DB!'))
    .catch(console.error);

const Todo = require('./models/Todo');
// get list of todos
app.get('/todos', async(req, res) => {
    const todos = await Todo.find();

    res.json(todos);
});
// new todo to db
app.post('/todo/new', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });

    todo.save();

    res.json(todo);
});
// delete
app.delete('/todo/delete/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);

    res.json(result);
});
// check off completed todos
// get or put?
app.put('/todo/complete/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    todo.complete = !todo.complete;

    todo.save();

    res.json(todo);
});


const Project = require('./models/Project');
// get list of projects
app.get('/projects', async(req, res) => {
    const projects = await Project.find();

    res.json(projects);
});
// add new project
app.post('/project/new', (req, res) => {
    const project = new Project({
        text: req.body.text
    });
    project.save();

    res.json(project);
});
// delete project
app.delete('/project/delete/:id', async (req, res) => {
    const result = await Project.findByIdAndDelete(req.params.id);

    res.json(result);
});
// mark projects as complete
app.put('/project/complete/:id', async (req, res) => {
    const project = await Project.findById(req.params.id);

    project.complete = !project.complete;

    project.save();

    res.json(project);
});


app.listen(3001, () => console.log('Server started on port 3001'));