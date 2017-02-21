/**
 * Created by dntsoft on 2017/2/16.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    path = require('path');

var ImageSchema = new Schema({
    title: {type: String},
    description: {type: String},
    filename: {type: String},
    views: {type: String, 'default': 0},
    likes: {type: Number, 'default': 0},
    timestamp: {type: Date, 'default': Date.now}
});

ImageSchema.virtual('uniqueId').get(function () {
    return this.filename.replace(path.extname(this.filename),'');
});

module.exports = mongoose.model('Image',ImageSchema);