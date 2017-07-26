/**
 * Created by Arun on 18/07/2017.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
var Project = require('./Project');

// CREATES A NEW PROJECT
router.post('/', function (req, res) {
    Project.create({
            name : req.body.name,
            description : req.body.description,
            repository : req.body.repository,
            location : req.body.location,
            collaborators : req.body.collaborators,
            tags: req.body.tags,
            numOfCollaborators : req.body.numOfCollaborators
        },
        function (err, project) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(project);
        });
});

// RETURNS ALL THE PROJECTS IN THE DATABASE
router.get('/', function (req, res) {
    Project.find({}, function (err, projects) {
        if (err) return res.status(500).send("There was a problem finding the projects.");
        res.status(200).send(projects);
    });
});

// GETS A SINGLE PROJECT FROM THE DATABASE
router.get('/:id', function (req, res) {
    Project.findById(req.params.id, function (err, project) {
        if (err) return res.status(500).send("There was a problem finding the project.");
        if (!project) return res.status(404).send("No project found.");
        res.status(200).send(project);
    });
});

// DELETES A PROJECT FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Project.findByIdAndRemove(req.params.id, function (err, project) {
        if (err) return res.status(500).send("There was a problem deleting the project.");
        res.status(200).send("Project: "+ project.name +" was deleted.");
    });
});

// UPDATES A SINGLE PROJECT IN THE DATABASE
router.put('/:id', function (req, res) {
    Project.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, project) {
        if (err) return res.status(500).send("There was a problem updating the project.");
        res.status(200).send(project);
    });
});

//ADD A COLLABORATOR TO A PROJECT
router.put('/:id/addCollaborator', function (req, res) {
    Project.findByIdAndUpdate(req.params.id, {
        $set: {
            "numOfCollaborators": (numOfCollaborators+1),
            "collaborators": collaborators.push(req.params.collaborators[collaborators.length])
        }}).exec(function(err, project){
        if(err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send(project);
}
});
    });


module.exports = router;