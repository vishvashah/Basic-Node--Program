const Note = require('../models/note.model.js');

// Create and Save a new Note
exports.create = (req, res) => {

    exports.create = (req, res) => {
        // Validate request
        if(!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            })
        }
        }
    

};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {

};

// Find a single note with a noteId
exports.findOne = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};