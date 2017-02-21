/**
 * Created by dntsoft on 2017/2/15.
 */
var models = require('../models');

module.exports = {
    popular: function(callback){
        models.Image.find({},{},{limit:9,sort:{likes: -1}},function(err,images){
            if(err) throw err;
            callback(null,images);
        });
    }
}