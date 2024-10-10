const mongoose = require('mongoose');

const schema = mongoose.Schema ({
    Id : Number,
    Destination : String,
    StartingPackage : String,
    HighestPackage : String,
    Image : String,
    Description : String,
    MoreImages1 : String,
    MoreImages2 : String,
    Duration : String
});

module.exports = mongoose.model('tourschema', schema , 'Tours');