const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// current projects and progress
const ProjectSchema = new Schema({
    pattern: {
        type: String,
        required: true
    },
    progress: {
        type: Number,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    lastStitch: {
        type: String,
        default: Date.now()
    }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;