/**
 * Created by Arun on 18/07/2017.
 */
var mongoose = require('mongoose');
var ProjectSchema = new mongoose.Schema({
    name: String,
    description: String,
<<<<<<< HEAD
    repository: String,
    location: String,
    collaborators: { type : Array , "default" : [] },
    tags: { type : Array , "default" : [] },
    numOfCollaborators: { type: Number, min: 0, max: 10 }
=======
    repository: String
>>>>>>> api
});
mongoose.model('Project', ProjectSchema);

module.exports = mongoose.model('Project');