/**
 * Created by Arun on 18/07/2017.
 */
var mongoose = require('mongoose');
var dburi = process.env._DATABASE_URI;
mongoose.connect(dburi);
