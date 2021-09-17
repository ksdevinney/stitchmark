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
app.get('/todos', async(req, res) => {
    const todos = await Todo.find();

    res.json(todos);
});

const Project = require('./models/Project');
app.get('/projects', async(req, res) => {
    const projects = await Project.find();

    res.json(projects);
});

app.listen(3001, () => console.log('Server started on port 3001'));